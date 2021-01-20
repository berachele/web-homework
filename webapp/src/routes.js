import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { layoutStyle, navStyle, contentStyle } from './styles/routes'
import { Home } from './home'
import { Transactions } from './transactions'


//dummy data to show transactions on Mount
const initialTransactions = [
  { id: uuid(), user: 'Hermoine', merchant: 'Flourish and Blotts', amount: '100', date: '12/20/2020', isOpen: false },
  { id: uuid(), user: 'Harry', merchant: 'Ollivander\'s Wand Shop', amount: '5', date: '01/05/2021', isOpen: false },
]

function AppRouter () {
  const [transactions, setTransactions] = useState(initialTransactions)


  return (
    <Router>
      <div css={layoutStyle}>
        <nav css={navStyle}>
          <ul >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/transactions'>Transactions</Link>
            </li>
          </ul>
        </nav>
        <div className='main-content' css={contentStyle}>
          <Route render={(props) => (<Home {...props} transactions={transactions} initialTransactions={initialTransactions} /> )} exact path='/' />
          <Route render={(props) => (<Transactions {...props} transactions={transactions} setTransactions={setTransactions} initialTransactions={initialTransactions} /> )} exact path='/transactions' />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter

