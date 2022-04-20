
import React from 'react'
import './style.css'

const HttpStatus = ({ className, children, ...rest }) => {
  const cName = "HttpStatus" + (className || "");
  return (
    <div className={cName} {...rest}>
      {children}
    </div>
  )
}

export default HttpStatus