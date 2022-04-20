import React from 'react'

const KongHttpStatus = React.lazy(() => import('../../components/kongComponents/KongHttpStatus'))
const KongBandwidth = React.lazy(() => import('../../components/kongComponents/KongBandwidth'))
// const KongLatency = React.lazy(() => import('../../components/kongComponents/KongLatency'))

export default {
  kong_http_status: [ // title
    { 
      metricName: "kong_http_status", 
      element: KongHttpStatus,
    },
  ],
  kong_bandwidth: [ // title
    { 
      metricName: "kong_bandwidth", 
      element: KongBandwidth,
    },
  ],
  // kong_nginx_http_current_connections: [ // title
  //   { 
  //     metricName: "kong_nginx_http_current_connections", 
  //     element: KongNginxHttpCurrentConnectionItems,
  //   },
  // ]
}