import React from 'react'
import * as _ from 'lodash'
import { Card, CardBody, CardHeader } from '../../../components'
import { CircleSVG, kongBandwidthBGColor } from '../../../assets'
import cardBackgroundGradients from '../../../assets/constant/cardBackgroundGradients'
import { Helper } from '../../../helper'

const KongBandwidth = ({  values, title, description, metricType }) => {
  let bgIndex = -1
  return (
    <Card>
      <CardHeader className="CardHeader_BottomBorder">
        <div className="tooltip">
          {/* {(values && values.length > 0 && values[0].metricName) || ""} */}
          <span className="tooltiptext">{description}</span>
          {title} (type = {metricType})
        </div>
      </CardHeader>
      <CardBody>
      {values.map((value, index) => {
        ++bgIndex
        // bgIndex = bgIndex > 6 ? 0 : bgIndex;
        bgIndex = bgIndex > 1 ? 0 : bgIndex;
        return (
          <Card key={index} //style={{ color: '#ffffff', ...cardBackgroundGradients[bgIndex]}}
          style={{ ...kongBandwidthBGColor[bgIndex]}}
          >
            <CardHeader className="text_white">                  
              {/* {value.metricName} */}
              <div className="card_header_right">{value.metricProperty && value.metricProperty.type || ""}</div>
            </CardHeader>
            <CardBody>
              {/* <img src={CircleSVG} className="card_img_absolute" alt="circle" /> */}
              <div className="card_value">{Helper.moneyFormat(value.metricValue)}</div>
              <div className="card_value_unit">kbps</div>
            </CardBody>
          </Card>
        ) 
      })}
      </CardBody>
    </Card>
  )
  
}

export default KongBandwidth
