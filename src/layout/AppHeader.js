import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer } from '../components'

const AppHeader = (props) => {
  return (
    <HeaderContainer>
      <div>
        <Link to='/dashboard' className="no_text_decoration">
          <h1 className="title">A bank <span className="sub_title">API Metrics</span></h1>
        </Link>
        {/* <span className="ms-1">&copy; 2022</span> */}
      </div>
      <br/>
      
      {props.children}
    </HeaderContainer>
  )
}

export default React.memo(AppHeader)
