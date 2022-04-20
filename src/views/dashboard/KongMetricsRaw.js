import React, { useState } from 'react'
import { Card, ToggleSwitch } from '../../components'

const KongMetricsRaw = ({ raw, metrics }) => {
  
  const [isJson, setIsJson] = useState(false);
  
  return (
    <div className="">
      <div style={{flexDirection: 'column'}}>
        <div>
          <ToggleSwitch label={"JSON Format"} onChange={(v)=>setIsJson(v)} />
        </div>
        <br/>
        <Card>
          <code className="kong_raw" >
            {isJson ? JSON.stringify(metrics, undefined, 5) : raw}
          </code>
        </Card>
      </div>
    </div>
  )
}

export default KongMetricsRaw