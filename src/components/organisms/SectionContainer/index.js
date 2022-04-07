import React from 'react'
import './style.css'

const SectionContainer = ({ title, description, metricType, children }) => {
  return (
    <div className="Section" key={title}>
      <div className="tooltip metric_title">{title} (type = {metricType})
        <span className="tooltiptext">{description}</span>
      </div>
      <div className="cards_item_container">
        {children}
      </div>
    </div>
  )
}

export default SectionContainer
