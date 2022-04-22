import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useLocation } from "react-router-dom"
import * as _ from 'lodash'
import { BackDrop } from '../components'
import { getMetricsAsync, selectMetricsStatus, selectMetricsError, selectMetricsUpdatedDateTime } from '../features/metric/metricSlice'
import AppNav from './AppNav.js'
import AppHeader from './AppHeader.js'
import AppContent from './AppContent.js'
import AppFooter from './AppFooter.js'
import routes from '../routes'
import { createPageRouteByKongService, takeServiceNameOutOfKongMetrics, kongMetricsResponseConverter } from '../helper';
import { Loading, ContentContainer } from '../components'

const KongServiceMetrics = React.lazy(() => import('../views/dashboard/KongServiceMetrics'))

const handlePageRoute = (payload, set) => {
  let serviceNames = takeServiceNameOutOfKongMetrics(kongMetricsResponseConverter(payload));
  let extraRoute = createPageRouteByKongService(serviceNames, KongServiceMetrics);
    // routes.concat(createPageRouteByKongService(metrics));
  set(extraRoute);
}

const DefaultLayout = () => {
  const location = useLocation();
  const metricsUpdatedDateTime = useSelector(selectMetricsUpdatedDateTime)
  const metricsStatus = useSelector(selectMetricsStatus)
  const metricsError = useSelector(selectMetricsError)
  const [myRoutes, setMyRoutes] = useState([]);
  const [isTransparent, setIsTransparent] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [reload, setReload] = useState(true);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const dispatch = useDispatch()

  const listenScrollEvent = () => {
    if (window.scrollY <= 70 && isTransparent) {
      setIsTransparent(false);
    } else if (window.scrollY >= 70 && !isTransparent) {
      setIsTransparent(true);
    }
  };
  
  useEffect(() => {console.log("HI")
    dispatch(getMetricsAsync())
    .then( ({ payload }) => {
      if(payload) {
        handlePageRoute(
          payload, (extraRoute) => {
            setMyRoutes(_.concat(routes, extraRoute) )
            setIsFirstTime(false)
          }
        )
      }
    })
  }, [reload])

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    }
  }, [isTransparent])

  if(metricsError && metricsStatus === "idle") {
    return <Navigate to={"/500"} state={{ from: location, error:{...metricsError} }} replace />
  };

  const drawerToggleClickHandler = () => { console.log("drawer toggle")
    setSideDrawerOpen(!sideDrawerOpen)
  }

  const backDropClickHandler = () => { console.log("back Drop")
    // setSideDrawerOpen(false)
  }

  let backdrop;

  if (sideDrawerOpen) {
    // sideDrawer = <SideDrawer />;
    backdrop = <BackDrop 
      click={backDropClickHandler()} 
    />;
  }
  console.log(sideDrawerOpen)
  return (
    <>
    <div >
    {backdrop}
      {/* <AppSidebar /> */}
      <AppHeader metricsUpdatedDateTime={metricsUpdatedDateTime} 
      isTransparent={isTransparent}
      handleReload={()=>{
        setIsFirstTime(true)
        setReload(!reload)
      }} /> 
      <AppNav 
        routes={myRoutes} 
        isTransparent={isTransparent} 
        drawerToggleClickHandler={() => drawerToggleClickHandler()}
        sideDrawerOpen={sideDrawerOpen}
      />
      <ContentContainer >
        {
          (metricsStatus === "loading" && isFirstTime) ? <Loading /> : <AppContent routes={myRoutes} />
        }
      </ContentContainer>
      <AppFooter />
    </div>
    </>
  )
}

export default DefaultLayout
