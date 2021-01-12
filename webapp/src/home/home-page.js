import React, { Fragment } from 'react'
import { PieChart } from 'react-minimal-pie-chart';


export function Home () {
  return (
    <Fragment>
      <div>Ready, steady, go!</div>
      <PieChart
        style={{width: '25%'}}
        labelPosition={'10%'}
        data={[
          { title: 'One', value: 10, color: '#1B3FB0' },
          { title: 'Two', value: 15, color: '#FEC73A' },
          { title: 'Three', value: 20, color: '#1B915A' },
        ]}
      />
    </Fragment>
  )
}
