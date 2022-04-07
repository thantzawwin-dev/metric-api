import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useLocation } from "react-router-dom"
import * as _ from 'lodash'
import { getMetricsAsync, selectMetricsStatus, selectMetricsError } from '../features/metric/metricSlice'
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
  const metricsStatus = useSelector(selectMetricsStatus)
  const metricsError = useSelector(selectMetricsError)
  const [myRoutes, setMyRoutes] = useState([]);
  const [isTransparent, setIsTransparent] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);

  const dispatch = useDispatch()

  const listenScrollEvent = () => {
    if (window.scrollY <= 70) {
      setIsTransparent(false);
    } else if (window.scrollY >= 70) {
      setIsTransparent(true);
    }
  };
  
  useEffect(() => {
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

    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    }

  }, [])

  if(metricsError && metricsStatus === "idle") {
    return <Navigate to={"/500"} state={{ from: location, error:{...metricsError} }} replace />
  };
  
  return (
    <div >
      {/* <AppSidebar /> */}
      <AppHeader /> 
      <AppNav routes={myRoutes} isTransparent={isTransparent} />
      <div className="">
        <ContentContainer >
          <div className="flex_box">
          {
            (metricsStatus === "loading" && isFirstTime) ? <Loading /> : <AppContent routes={myRoutes} />
          }
          </div>
        </ContentContainer>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
