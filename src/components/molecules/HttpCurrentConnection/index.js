
import React from 'react'
import './style.css'

const HttpCurrentConnection = ({ className, children, ...rest }) => {
  const cName = "HttpCurrentConnection" + (className || "");
  return (
    <div className={cName} {...rest}>
      {children}
    </div>
  )
}

export default HttpCurrentConnection