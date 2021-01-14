import React, { Fragment } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import { creditInfoStyles, chartKeyStyles, greenKeyBox, blackKeyBox, pieChartStyles } from '../styles/home-page'

export function Home () {
  return (
    <Fragment>
      <h1>Dashboard</h1>
      <div css={creditInfoStyles}>
        <h2>Credit Info</h2>
        <div css={chartKeyStyles}>
          <div css={ greenKeyBox }></div>
          <p>Available</p>
          <div css={blackKeyBox}></div
          ><p>Spent</p>
        </div>
        <PieChart
          css={pieChartStyles}
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
      </div>
    </Fragment>
  )
}
