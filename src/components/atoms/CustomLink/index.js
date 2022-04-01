
import React from 'react'
import {
  Link,
  // useMatch,
  // useResolvedPath,
} from "react-router-dom";

const CustomLink = ({ children, to, className, ...rest }) => {
  // let resolved = useResolvedPath(to);
  // let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      className="no_text_decoration"
      to={to}
      // {...rest}
    >
      {children}
    </Link>
  )
}

export default CustomLink