
import React from 'react'
import {
  Link,
  NavLink 
  // useMatch,
  // useResolvedPath,
} from "react-router-dom";

const CustomLink = ({ children, to, className, ...rest }) => {
  // let resolved = useResolvedPath(to);
  // let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <NavLink 
      className="no_text_decoration"
      to={to}
      activeclassname="active"
      // {...rest}
    >
      {children}
    </NavLink >
  )
}

export default CustomLink