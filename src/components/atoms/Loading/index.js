
import React from 'react'
import './style.css'
import { LoadingSpinnerSVG2 } from '../../../assets';

const Loading = () => {
  return (
    <div className="loading">
      <img src={LoadingSpinnerSVG2} className="loading-spinner" alt="loading" />
    </div>
      
  )
}


export default Loading