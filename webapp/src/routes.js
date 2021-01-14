import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { css } from '@emotion/core'
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

const layoutStyle = css`
    box-sizing: border box;
    margin:0;
    padding:0;
    max-width:100%;
`

const navStyle = css`
  grid-row: 1;
  background-color: grey;
  padding: 2%;

  & > ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
  }
  
  & > ul > li:not(:first-child) {
    margin-left: 16px;
  }
`

const contentStyle = css`
  grid-row: 2;
`
