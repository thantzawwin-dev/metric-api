import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import * as _ from 'lodash'
import { Card, CardBody, CardHeader } from '../../../components'
import { setHTTPStatusChartData } from '../../../helper'
import { doughnutChartBackgroundColor } from '../../../assets'

ChartJS.register(ArcElement, Tooltip, Legend);

const chartProps = {
  height: "285px",
  width: "285px",
}

const KongHttpStatus = ({ values }) => { 

  let pieDatas = setHTTPStatusChartData(values, 'code', doughnutChartBackgroundColor.bgColors);

  return (
    <>
      {pieDatas && !_.isEmpty(pieDatas) &&
      <Card>
        <CardHeader>
          <div className="">{(values && values.length > 0 && values[0].metricName) || ""}</div>
        </CardHeader>
        <CardBody>
          <Doughnut
            // redraw={true}
            data={pieDatas}
            {...chartProps}
          />
        </CardBody>
      </Card>
      }
    </>
  )
}

export default KongHttpStatus