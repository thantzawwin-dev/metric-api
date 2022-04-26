import React from 'react'
import './style.css'
import { CustomLink } from '../../index'

const SideBarItem = ({ to, children, className, icon = null }) => {
	const cName = "SideBarItem " + (className || "");
	return (
		<CustomLink to={to} >
			<div className={cName} >
				{icon &&
					<div className="SideBarIcon" >
						<img src={icon} alt="loading" />
					</div>
				}
				{children}
			</div>
		</CustomLink>
	)
}

export default SideBarItem