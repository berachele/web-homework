import React, { Fragment, useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import { creditInfoStyles, chartKeyStyles, greenKeyBox, blackKeyBox, pieChartStyles } from '../styles/home-page'
import { formStyles } from '../styles/transaction-form'

export function Home ({transactions}) {
  //for budget form
  const [budget, setBudget] = useState(1000)

  //For setting values on PieChart data
  let totalSpent = 0
  var dollarsToCents = require('dollars-to-cents')

  //using dollarsToCents so piechart is accurate with the dolalr amounts (with decimals, not just whole numbers)
  let changeAmountsToCents = transactions.map(transaction => dollarsToCents(transaction.amount))

  let stringToIntArray = changeAmountsToCents.map(amount => parseInt(amount))

  let convertBackToDollars = stringToIntArray.map(amount => amount / 100)

  let getTotalSpent = convertBackToDollars.forEach(amount => totalSpent += amount)

  return (
    <Fragment>
      <h1>Dashboard</h1>
      <div css={creditInfoStyles}>
        <h2>Credit Info</h2>
        <form css={formStyles}>
          <label>
            Monthly Budget: &nbsp;$
            <input 
              onChange={event => setBudget(event.target.value)} 
              value={budget} 
              name='budget'
              type='number' 
            />
          </label>
        </form>
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
