import React from 'react'

const KongHttpStatus = React.lazy(() => import('../../components/molecules/KongHttpStatus'))
const KongBandwidth = React.lazy(() => import('../../components/molecules/KongBandwidth'))
const KongLatency = React.lazy(() => import('../../components/molecules/KongLatency'))

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
  kong_latency: [ // title
    { 
      metricName: "kong_latency_count", 
      element: KongLatency,
    },
  ]
}