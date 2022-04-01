import React, { useEffect } from 'react'
import * as _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardBody, CardHeader, MetricCardSection } from '../../components'
import { MockText } from '../../assets'
import { getMetricsAsync, selectMetrics } from '../../features/metric/metricSlice'

const Dashboard = () => {
  const metrics = useSelector(selectMetrics)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getMetricsAsync())
    const interval = setInterval(() => {
      console.log('This will run every second!');
      dispatch(getMetricsAsync())
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <>
      <div className="content_container">
        {
          metrics.map(metric => {
            return <MetricCardSection key={metric.name} {...metric} />
          })
        }
      </div>
    </>
  )
  
}

export default Dashboard