import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Card, CardBody, HttpCurrentConnectionItem, HttpCurrentConnection } from '../../../components'

ChartJS.register(ArcElement, Tooltip, Legend);

const KongNginxHttpCurrentConnections = ({ values, ...rest }) => { 
  
  return (
    <HttpCurrentConnection>
      {values.map((value, index) => 
        <Card key={index} style={{ backgroundColor: '#EEECFE'}}>
          <CardBody>
            <HttpCurrentConnectionItem value={value} {...rest}></HttpCurrentConnectionItem>
          </CardBody>
        </Card>
      )}
    </HttpCurrentConnection>
  )
}

export default KongNginxHttpCurrentConnections