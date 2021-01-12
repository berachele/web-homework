import React, { Fragment } from 'react'
import { PieChart } from 'react-minimal-pie-chart';


export function Home () {
  return (
    <Fragment>
      <h2>Credit Info</h2>
      <div style={{display: 'flex', alignItems: 'center', alignContent: 'center'}}>
        <div style={{width: '5%', height: '20px', background: '#169F6E', margin: '1%', borderRadius: '5%'}}></div>
        <p>Available</p>
        <div style={{width: '5%', height: '20px', background: 'black', margin: '0 1%', borderRadius: '5%'}}></div
        ><p>Spent</p>
      </div>
      <PieChart
        style={{ width: '25%' }}
        data={[
          {
          color: "#169F6E",
          title: "Available",
          value: 30,
          },
          {
          color: "black",
          title: "Spent",
          value: 15,
          },
        ]}
        label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
        labelPosition={80}
        labelStyle={{ fontSize: '50%', fontWeight: 'bold'  }}
        lengthAngle={360}
        lineWidth={40} 
        paddingAngle={40}
        radius={50} 
        rounded
        startAngle={85}
        viewBoxSize={[100, 100]}
      />
    </Fragment>
  )
}
