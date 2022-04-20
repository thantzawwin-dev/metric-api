
import React from 'react'
import {
  Link,
  NavLink 
  // useMatch,
  // useResolvedPath,
} from "react-router-dom"
import './style.css'

const CustomLink = ({ children, to, className, ...rest }) => {
  // let resolved = useResolvedPath(to);
  // let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <NavLink 
      className="NavLink no_text_decoration"
      to={to}
      activeclassname="active"
      replace={true}
      // {...rest}
    >
      {children}
    </NavLink >
  )
}

export default CustomLink