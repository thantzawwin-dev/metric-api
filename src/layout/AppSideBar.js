import React from 'react'
import { SideBarItem } from '../components'
import { HomeSVG, sideBarIcons } from '../assets'

const AppSideBar = ({ routes, sideDrawerOpen, drawerToggleClickHandler }) => {
	return (
		<div
			className={sideDrawerOpen ? "sideBar sideBar_Open" : "sideBar"}
			onClick={() => drawerToggleClickHandler()}>
			{
				routes && routes.map((route, idx) => 
					<SideBarItem 
						key={idx} to={route.path} 
						icon={ !idx ? HomeSVG : (sideBarIcons[idx - 1] || sideBarIcons[0])} 
					>
						{route.name}
					</SideBarItem>
				)
			}
		</div>
	)
}

export default AppSideBar