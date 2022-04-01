import React from 'react'
import './style.css';

const FooterContainer = (props) => {
  return (
    <div className="Footer">
      {props.children}
    </div>
  )
}

export default FooterContainer
