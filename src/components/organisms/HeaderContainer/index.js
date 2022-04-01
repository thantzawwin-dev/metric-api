import React from 'react'
import './style.css';

const HeaderContainer = (props) => {
  return (
    <div className="Header">
      {props.children}
    </div>
  )
}

export default HeaderContainer