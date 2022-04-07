import React from 'react'
import * as _ from 'lodash'
import { Card, CardBody, CardHeader } from '../../../components'
import { CircleSVG } from '../../../assets'
import cardBackgroundGradients from '../../../assets/constant/cardBackgroundGradients'

const MetricCardSection = ({ title, values, description, metricType }) => {
  let bgIndex = -1
  return (
    <div className="section" key={title}>
      <h4>{title}</h4>
      <div className="cards_item_container">
        {values.map((item, index) => {
          ++bgIndex
          bgIndex = bgIndex > 6 ? 0 : bgIndex;
          return (
            <Card key={index} style={{ color: '#ffffff', ...cardBackgroundGradients[bgIndex]}}>
              <CardHeader>                  
                <div className="tooltip">{metricType}
                  <span className="tooltiptext">{description}</span>
                </div>
                <div>
                  {/* <code>{item.metricProperty}</code> */}
                </div>
              </CardHeader>
              <CardBody>
                <img src={CircleSVG} className="card_img_absolute" alt="circle" />
                {/* <div className="card_value_type">writing state</div> */}
                <span className="card_value">{item.metricValue}</span>
              </CardBody>
            </Card>
          ) 
        })}
      </div>
    </div>
  )
  
}

export default MetricCardSection
