import React from 'react'
import * as _ from 'lodash'
import { Card, CardBody, CardHeader } from '../../../components'
import { CircleSVG } from '../../../assets'
import cardBackgroundGradients from '../../../assets/constant/cardBackgroundGradients'

const MetricCardSection = ({ name, values, description, metricType }) => {
  return (
    <div className="section" key={name}>
      <h4>{name}</h4>
      <div className="item_container">
        {values.map((item, index) => {
          const bgIndex = index % 7 > 0 ? index % 7 : index;
          return (
            <Card key={index} style={cardBackgroundGradients[bgIndex]}>
              <CardHeader>                  
                <div className="tooltip">{metricType}
                  <span className="tooltiptext">{description}</span>
                </div>
                <div>
                  <code>{item.metricProperty}</code>
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
