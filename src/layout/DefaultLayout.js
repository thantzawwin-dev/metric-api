import React from 'react'
import AppNav from './AppNav.js'
import AppHeader from './AppHeader.js'
import AppContent from './AppContent.js'
import AppFooter from './AppFooter.js'

const DefaultLayout = () => {
  return (
    <div>
      {/* <AppSidebar /> */}
      <AppHeader>
      <AppNav />
        </AppHeader>
      <div className="">
        <div className="">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
