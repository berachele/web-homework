import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { layoutStyle, navStyle, contentStyle } from './styles/routes'
import { Home } from './home'
import { Transactions } from './transactions'

function AppRouter () {
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
          <Route component={Home} exact path='/' />
          <Route component={Transactions} exact path='/transactions' />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter

