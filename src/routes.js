import React from 'react';

const KongMetricsRaw = React.lazy(() => import('./views/dashboard/KongMetricsRaw'))

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/home', exact: true, name: 'Home', element: KongMetricsRaw },
  // { path: '/kong-metrics-raw', exact: true, name: 'Raw Metrics', element: KongMetricsRaw },
  // { path: '/dashboard', exact: true, name: 'Dashboard', element: Dashboard },
];

export default routes;