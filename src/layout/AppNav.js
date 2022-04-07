import React from 'react'
// import routes from '../routes'
import { NavContainer, NavList, NavItem } from '../components'

const AppNav = ({ routes, isTransparent }) => {
  return (
    <NavContainer isTransparent={isTransparent}>
      <NavList>
        {
          routes && routes.map((route, idx) => <NavItem key={idx} to={route.path} >{route.name}</NavItem>)
        }
      </NavList>
    </NavContainer>
  )
}

export default AppNav
