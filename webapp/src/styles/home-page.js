import { css } from '@emotion/core'

export const creditInfoStyles = css`
    border: 2px solid #9a8c98;
    background: rgba(154, 140, 152, .6);
    border-radius: 1%;
    width: 50%;
    padding: 1%;
    
    
    & > h2 {
        margin: 0;
    }
`

export const chartKeyStyles = css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    width: 23%;
    margin-left: 79%;
`

export const greenKeyBox = css`
    width: 35%;
    height: 20px;
    background: #169F6E;
    margin: 0 5% 0 0;
    border-radius: 5%;
`

export const blackKeyBox = css`
    width: 35%;
    height: 20px;
    background: black;
    margin: 0 5% 0 0;
    borderRadius: 5%;
`

export const pieChartStyles = css`
    width: 50%;
    margin-left: 21%;
    margin-top: -14%;
`