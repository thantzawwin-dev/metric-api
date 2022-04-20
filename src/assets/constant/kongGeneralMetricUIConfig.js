import React from 'react'

const KongNginxHttpCurrentConnections = React.lazy(() => import('../../components/kongComponents/KongNginxHttpCurrentConnections'))

export default {
  kong_nginx_http_current_connections: [ // title
    { 
      metricName: "kong_nginx_http_current_connections", 
      element: KongNginxHttpCurrentConnections,
    },
  ]
}