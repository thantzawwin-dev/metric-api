import React from 'react'

const KongNginxHttpCurrentConnections = React.lazy(() => 
  import('../../components/kongComponents/KongNginxHttpCurrentConnections')
  // Promise.all([
  //   import('../../components/kongComponents/KongNginxHttpCurrentConnections'),
  //   new Promise(resolve => setTimeout(resolve, 5000))
  // ])
  // .then(([moduleExports]) => moduleExports)
)

export default {
  kong_nginx_http_current_connections: [ // title
    { 
      metricName: "kong_nginx_http_current_connections", 
      element: KongNginxHttpCurrentConnections,
    },
  ]
}