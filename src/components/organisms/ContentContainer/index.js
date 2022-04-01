import React from 'react'
import './style.css';

const ContentContainer = (props) => {
  return (
    <div className="Content">
      {props.children}
    </div>
  )
}

export default ContentContainer