import React, { Suspense } from 'react'
import * as _ from 'lodash'
import {  SectionContainer } from '../../components'
import { kongMetricUIConfig } from '../../assets'

const KongServiceMetrics = ({ metrics = [] }) => {
  return (
    <>
      {metrics.map((metric, index) => {
        if(kongMetricUIConfig.hasOwnProperty(metric['title'])) {
          if(metric.hasOwnProperty('values') && metric['values'].length > 0) {
            return (
              <SectionContainer key={index} title={metric.title} description={metric.description} metricType={metric.metricType}>
                {kongMetricUIConfig[metric['title']].map((uiConfig, idx) => {
                  return (
                  <Suspense key={idx} loading={<div>loading</div>}>
                    <uiConfig.element values={metric['values'].filter(value => value.metricName === uiConfig.metricName)} />
                  </Suspense>
                  )
                })}
              </SectionContainer>
            )
          }
        }
      })}
    </>
  )
}

export default KongServiceMetrics