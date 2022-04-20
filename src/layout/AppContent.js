import React, { Suspense, useEffect }  from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as _ from 'lodash'
import { getMetricsAsync, selectMetrics, selectMetricsRaw } from '../features/metric/metricSlice'
import { filterMetricWithService, filterMetricWithoutService, splitSpecificServiceMetric } from '../helper'

const AppContent = ({ routes }) => {
  const metrics = useSelector(selectMetrics)
  const metricsRaw = useSelector(selectMetricsRaw)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second!');
      dispatch(getMetricsAsync())
    }, 10000); //10 seconds
    return () => clearInterval(interval);
  }, [])

  const generalMetrics = filterMetricWithoutService(metrics);
  const serviceMetrics = filterMetricWithService(metrics);
  const sepecificServiceMetrics = splitSpecificServiceMetric(serviceMetrics);

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        {routes.map((route, idx) => {
          return (
            route.element && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                
                element={<route.element metrics={[...sepecificServiceMetrics[route.name] || [], ...generalMetrics]} raw={metricsRaw} />}
              />
            )
          )
        })}
        <Route path="/" element={<Navigate to="/home" replace {...metrics} />} />
      </Routes>
    </Suspense>
  )
}

export default AppContent
