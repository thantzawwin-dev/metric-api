import { lazy } from 'react';

const Dashboard = lazy(() => import('./views/dashboard/Dashboard'))
const Dashboard2 = lazy(() => import('./views/dashboard/Dashboard2'))

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Dashboard },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/dashboard2', exact: true, name: 'Dashboard2', component: Dashboard2 },
];

export default routes;