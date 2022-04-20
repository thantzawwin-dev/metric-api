import React, { useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { metricSlice } from '../../../features/metric/metricSlice'

const Page500 = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const dispatch = useDispatch()
  const { actions: { removeError } } = metricSlice;

  useEffect(() => {
    dispatch(removeError())
  }, [])
  
  return (
    <div className="error_page">
      <div className="error_page_container">
        <h1 className="error_title">Kong <span className="error_sub_title">API Metrics</span></h1>
        <div>
            <h1 className="">{state.error && state.error.name}</h1>
            <h4 className="">We have a problem! {state.error && state.error.message}</h4>
            <p className="">{state.error && state.error.stack}</p>
            <form onSubmit={ (e) => { 
              e.preventDefault()
              navigate("/home")
            }}>
              <input type="submit" value="TRY AGAIN" className="try_again_button" />
            </form>
        </div>
      </div>
    </div>
  );
}

export default Page500;
