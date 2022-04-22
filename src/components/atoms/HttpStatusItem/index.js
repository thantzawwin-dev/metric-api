import React from 'react'
import { Helper } from '../../../helper';
import { httpStatusCodeData } from '../../../assets'
import './style.css'

const HttpStatusItem = ({ className, key, value, ...rest }) => {
  const cName = "HttpStatusItem tooltip " + (className || "");
  const colors = httpStatusCodeData.bgColors;
  const httpStatusCodes = httpStatusCodeData.HttpStatusCode;
  let fontColor = '#000000';
  if(value && value.metricProperty && value.metricProperty.hasOwnProperty('code')) {
    fontColor = colors[Number(value.metricProperty.code)] || colors[value.metricProperty.code[0] + "xx"] 
    || colors["0xx"]
  }
  
  return (
    <div className={cName} {...rest} key={key}>
      <span className="tooltiptext">{httpStatusCodes[Number(value.metricProperty.code)] || ''}</span>
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