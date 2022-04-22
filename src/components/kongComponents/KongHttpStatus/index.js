import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import * as _ from 'lodash'
import { Card, CardBody, CardHeader, HttpStatus, HttpStatusItem } from '../../../components'
import { setHTTPStatusChartData } from '../../../helper'
import { httpStatusCodeData, chartProps } from '../../../assets'

ChartJS.register(ArcElement, Tooltip, Legend);

// const chartProps = {
//   width: 'inherit',
//   height: 'inherit'
// }

const KongHttpStatus = ({ values, title, description, metricType }) => { 

  let pieDatas = setHTTPStatusChartData(values, 'code', httpStatusCodeData.bgColors, chartProps.datasetsProps);

  return (
    <>
      {pieDatas && !_.isEmpty(pieDatas) &&
      <Card >
        <CardHeader className="CardHeader_BottomBorder">
          <div className="tooltip">
            {/* {(values && values.length > 0 && values[0].metricName) || ""} */}
            <span className="tooltiptext">{description}</span>
            {title} (type = {metricType})
          </div>
        </CardHeader>
        <CardBody style={{padding:'2em'}}>
          <div style={{padding: '0 1em 2em'}}>
            <Doughnut
              // redraw={true}
              data={pieDatas}
              // {...chartProps}
              options={chartProps.options}
            />
          </div>
          <HttpStatus>
            {values.map((value, index) => 
              <div key={index}>
                <HttpStatusItem value={value} />
              </div>
            )}
          </HttpStatus>
        </CardBody>
      </Card>
      }
    </>
  )
}

export default KongHttpStatus