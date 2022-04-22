import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { HeaderContainer } from '../components'
import { getMetricsAsync } from '../features/metric/metricSlice'
import { ReloadSVG, HamburgerMenuSVG } from '../assets'

const AppHeader = ({ children, metricsUpdatedDateTime, handleReload, drawerToggleClickHandler }) => { 
  const [count, setCount] = useState(0);
  const dispatch = useDispatch()

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log('count will update every second!', metricsUpdatedDateTime);
      setCount((count) => ++count)
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    setCount(0)
  }, [metricsUpdatedDateTime])

  const reload = () => handleReload()

  return (
    <HeaderContainer>
      <div>
      <div className="toggle_btn" onClick={() => drawerToggleClickHandler()}>
        <img src={HamburgerMenuSVG} className="" alt="loading" />
      </div>
        <Link to='/' className="no_text_decoration">
          <h1 className="title">Kong &nbsp;<span className="sub_title">API Metrics</span></h1>
        </Link>
        {/* <span className="ms-1">&copy; 2022</span> */}
      </div>
      <div className="reload_container">
        <span className="reloaded_time">update {count} seconds ago</span>
        <span className="reloaded_button" onClick={() => reload()}>
          <img src={ReloadSVG} className="" alt="reload" />
        </span>
      </div>
      {children}
    </HeaderContainer>
  )
}

export default AppHeader
