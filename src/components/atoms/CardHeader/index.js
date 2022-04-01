
import React from 'react'
import './style.css'

const CardHeader = ({ className, children, ...rest }) => {
  const cName = "CardHeader " + (className || "");
  return (
    <div className={cName} {...rest}>
      {children}
    </div>
  )
}

export default CardHeader