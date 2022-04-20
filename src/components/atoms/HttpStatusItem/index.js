import React from 'react'
import { Helper } from '../../../helper';
import { httpStatusCodeBGColor } from '../../../assets'
import './style.css'

const HttpStatusItem = ({ className, key, value, ...rest }) => {
  const cName = "HttpStatusItem " + (className || "");
  const colors = httpStatusCodeBGColor.bgColors;
  let fontColor = '#000000';
  if(value && value.metricProperty && value.metricProperty.hasOwnProperty('code')) {
    fontColor = colors[value.metricProperty['code'][0]] || 0
  }
  return (
    <div className={cName} {...rest} key={key}>
      <span style={{ color : fontColor }}>
        {value.metricProperty && value.metricProperty.hasOwnProperty('code') ? value.metricProperty.code : ''}
      </span>
        &nbsp;
        Status Count
        -
        &nbsp;&nbsp;&nbsp;&nbsp;
      <span style={{color: fontColor }}>{Helper.moneyFormat(value.metricValue || 0)}</span>
    </div>
  )
}

export default HttpStatusItem