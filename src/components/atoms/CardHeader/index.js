
import React from 'react'
import './style.css'

const CardHeader = ({ className, children, ...rest }) => { //CardHeader_BottomBorder
  const cName = "CardHeader " + (className || "");
  return (
    <div className={cName} {...rest}>
      {children}
    </div>
  )
}

export default CardHeader