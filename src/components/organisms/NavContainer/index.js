import React from 'react'
import './style.css';

const NavContainer = ({ children, className = "", isTransparent = false, sideDrawerOpen, ...rest }) => {
  const cName = "Nav " + (className || "") + (isTransparent ? " Nav_Transparent" : "") + 
  (sideDrawerOpen ? " Nav_Open" : "");
  return (
    <div className={cName} {...rest}>
      {children}
    </div>
  )
}

export default NavContainer