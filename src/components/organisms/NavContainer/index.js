import React from 'react'
import './style.css';

const NavContainer = (props) => {
  return (
    <div className="Nav">
      {props.children}
    </div>
  )
}

export default NavContainer