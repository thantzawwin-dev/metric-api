
import React from 'react'
import './style.css'

const CardBody = ({ className, children, ...rest }) => {
  const cName = "CardBody " + (className || "");
  return (
    <div className={cName} {...rest}>
      {children}
    </div>
  )
}

export default CardBody