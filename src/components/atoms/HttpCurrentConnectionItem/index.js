import React from 'react'
import { Helper } from '../../../helper';
import './style.css'

const HttpCurrentConnectionItem = ({ className, value, title, description, metricType, ...rest }) => {
  const cName = "HttpCurrentConnectionItem " + (className || "");
  const state = value.metricProperty && value.metricProperty.hasOwnProperty('state') ? value.metricProperty.state : ''
  return (
    <div className={cName} {...rest}>
      <div className="tooltip align_celf_center">
        <span className="tooltiptext">{description}</span>
        <span className="">Kong state {state}
          &nbsp;(type = {metricType})
        </span>
      </div>
      
      <span className='Connection_Value'>{Helper.moneyFormat(value.metricValue || 0)}</span>
    </div>
  )
}

export default HttpCurrentConnectionItem