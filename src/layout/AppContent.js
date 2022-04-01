import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ContentContainer, Loading } from '../components'
import Dashboard from '../views/dashboard/Dashboard'
import Dashboard2 from '../views/dashboard/Dashboard2'

// routes config
import routes from '../routes'

const AppContent = () => {

  return (
    <ContentContainer>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })} */}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard2" element={<Dashboard2 />} />
        </Routes>
      </Suspense>
    </ContentContainer>
  )
}

export default AppContent
