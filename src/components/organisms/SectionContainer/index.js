import React from 'react'
import './style.css'

const SectionContainer = ({ children }) => {
  return (
    <div className="Section">
      {/* <div className="tooltip metric_title">
        <span className="tooltiptext">{description}</span>
        {title} (type = {metricType})
      </div> */}
      <div className="cards_item_container">
        {children}
      </div>
    </div>
  )
}

export default SectionContainer
