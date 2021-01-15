import { css } from '@emotion/core'

export const containerStyles = css`
    border: 2px solid #9a8c98;
    background: rgba(154, 140, 152, .6);
    border-radius: 1%;
    width: 50%;
    padding: 1%;


    & > h2 {
        margin: 0;
    }
//Enter a Transaction container
    & :nth-child(2) {
        width: 27%;
    }
//List of Transactions container
    & :nth-child(3) {
        margin-top: 4%;
    }
`
export const editBttn = css`
    :hover {
        color: #9A8C98;
    }
`

export const deleteBttn = css`
    color: #C4233D;

    :hover {
        color: #DA2F4B;
    }
`
