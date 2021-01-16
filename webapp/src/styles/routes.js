import { css } from '@emotion/core'

export const layoutStyle = css`
    box-sizing: border box;
    margin:0;
    padding:0;
    max-width:100%;
    height: 100vh;
    background: #F2E9E4;
`

export const navStyle = css`
  grid-row: 1;
  background-color: #22223B;
  padding: 2%;
  border-radius: 1%;
  font-size: larger;

  & > ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
      background: #22223b;
      
      & > li > a {
        color: #F2E9E4;
        text-decoration: none;
        font-weight: bold;

        :hover {
          color: #9A8C98;
        }
      }
  }
  
  & > ul > li:not(:first-child) {
    margin-left: 16px;
  }

`

export const contentStyle = css`
  grid-row: 2;
  padding: 0 2%;
`
