import React from 'react'
// import routes from '../routes'
import { NavContainer, NavList, NavItem } from '../components'

const AppNav = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem to={"/dashboard"} >
          Dashboard
        </NavItem>
        {/* <NavItem to={"/dashboard2"} >
          Route_2
        </NavItem> */}
      </NavList>
    </NavContainer>
  )
}

export default React.memo(AppNav)
