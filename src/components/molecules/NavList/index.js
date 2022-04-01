
import React from 'react'
import './style.css'

const NavList = (props) => {
  const className = "NavList " + (props.className || "");
  return (
    <div className={className} >
      {props.children}
    </div>
  )
}

export default NavList