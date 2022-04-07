import React from 'react'
import * as _ from 'lodash'
import { Card, CardBody, CardHeader } from '../../../components'
import { CircleSVG } from '../../../assets'
import cardBackgroundGradients from '../../../assets/constant/cardBackgroundGradients'

const KongBandwidth = ({  values, metricType }) => {
  let bgIndex = -1
  return (
    <>
      {values.map((value, index) => {
        ++bgIndex
        bgIndex = bgIndex > 6 ? 0 : bgIndex;
        return (
          <Card key={index} style={{ color: '#ffffff', ...cardBackgroundGradients[bgIndex]}}>
            <CardHeader>                  
              {value.metricName}
              <code className="card_header_right">{value.metricProperty && value.metricProperty.type || ""}</code>
            </CardHeader>
            <CardBody>
              <img src={CircleSVG} className="card_img_absolute" alt="circle" />
              <span className="card_value">{value.metricValue}</span>
            </CardBody>
          </Card>
        ) 
      })}
    </>
  )
  
}

export default KongBandwidth
