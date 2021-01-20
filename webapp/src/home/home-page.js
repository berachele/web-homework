import React, { Fragment } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import { creditInfoStyles, chartKeyStyles, greenKeyBox, blackKeyBox, pieChartStyles } from '../styles/home-page'

export function Home ({transactions}) {
  const budget = 1000
  let totalSpent = 0
  var dollarsToCents = require('dollars-to-cents')
//using dollarsToCents so piechart is accurate with the dolalr amounts (with decimals, not just whole numbers)
  let changeAmountsToCents = transactions.map(transaction => dollarsToCents(transaction.amount))
//changing amount input from a string to an integer
  let stringToIntArray = changeAmountsToCents.map(amount => parseInt(amount))
//changing integers back to dollar amounts
  let convertBackToDollars = stringToIntArray.map(amount => amount / 100)
//getting total Spent
  let getTotalSpent = convertBackToDollars.forEach(amount => totalSpent += amount)

  return (
    <Fragment>
      <h1>Dashboard</h1>
      <div css={creditInfoStyles}>
        <h2>Credit Info</h2>
        <div css={chartKeyStyles}>
          <div css={greenKeyBox}></div>
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
            value: (budget-totalSpent),
            },
            {
            color: "black",
            title: "Spent",
            value: (totalSpent),
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
