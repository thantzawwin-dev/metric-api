import React from 'react'
// import routes from '../routes'
import { NavContainer, NavList, NavItem } from '../components'



const AppNav = ({ routes, isTransparent, sideDrawerOpen }) => {
  return (
    <>
      <NavContainer isTransparent={isTransparent} sideDrawerOpen={sideDrawerOpen}>
        <NavList>
          {
            routes && routes.map((route, idx) => <NavItem key={idx} to={route.path} >{route.name}</NavItem>)
          }
        </NavList>
      </NavContainer>
    </>
    
  )
}

export default AppNav
