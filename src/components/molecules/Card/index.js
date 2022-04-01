
import React from 'react'
import './style.css'

const Card = ({ className, children, ...rest }) => {
  const cName = "Card" + (className || "");
  return (
    <div className={cName} {...rest}>
      {children}
    </div>
  )
}

export default Card