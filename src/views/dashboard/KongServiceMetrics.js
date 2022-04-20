import React, { Suspense } from 'react'
import * as _ from 'lodash'
import { SectionContainer } from '../../components'
import { kongMetricUIConfig, kongGeneralMetricUIConfig } from '../../assets'

const KongServiceMetrics = ({ metrics = [] }) => {
  return (
    <div className="content_flex_box" >
      <div className="flex_box" style={{flexDirection: 'column'}}>
        {metrics.map((metric, index) => {
          if(kongMetricUIConfig.hasOwnProperty(metric['title'])) {
            if(metric.hasOwnProperty('values') && metric['values'].length > 0) {
              return (
                <SectionContainer key={index} title={metric.title} description={metric.description} metricType={metric.metricType}>
                  {kongMetricUIConfig[metric['title']].map((uiConfig, idx) => {
                    return (
                    <Suspense key={idx} loading={<div>loading</div>}>
                      <uiConfig.element title={metric.title} description={metric.description} metricType={metric.metricType} values={metric['values'].filter(value => value.metricName === uiConfig.metricName)} />
                    </Suspense>
                    )
                  })}
                </SectionContainer>
              )
            }
          }
        })}
        </div>
        {/* <br /> */}
        <div className="flex_box">
        {metrics.map((metric, index) => {
          if(kongGeneralMetricUIConfig.hasOwnProperty(metric['title'])) {
            if(metric.hasOwnProperty('values') && metric['values'].length > 0) {
              return (
                <SectionContainer key={index} title={metric.title} description={metric.description} metricType={metric.metricType}>
                  {kongGeneralMetricUIConfig[metric['title']].map((uiConfig, idx) => {

                    return (
                    <Suspense key={idx} loading={<div>loading</div>}>
                      <uiConfig.element title={metric.title} description={metric.description} metricType={metric.metricType} values={metric['values'].filter(value => value.metricName === uiConfig.metricName)} />
                    </Suspense>
                    )
                  })}
                </SectionContainer>
              )
            }
          }
        })}
      </div>
    </div>
  )
}

export default KongServiceMetrics