import React from 'react'
import './style.css';

const NavContainer = ({ children, className = "", isTransparent = false, ...rest }) => {
  const cName = "Nav " + (className || "") + (isTransparent ? " Nav_Transparent" : "")
  return (
    <div className={cName} {...rest}>
      {children}
    </div>
  )
}

export default NavContainer