
import React from 'react'
import './style.css'
import { CustomLink } from '../../index'

const NavItem = ({ className, children, to, active, ...rest }) => {
  const cName = "NavItem " + (className || "");
  return (
    <CustomLink to={to} >
      <div className={cName} >
        {children}
      </div>
    </CustomLink>
  )
}

export default NavItem