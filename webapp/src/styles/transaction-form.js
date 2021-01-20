import { css } from '@emotion/core'

export const formStyles = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    margin-top: 1%;

    & > label {
        font-weight: bold;
        padding: 1% 0;
        font-size: larger;
    
        & > input {
            height: 20px;
            font-size: initial;
        }
    }

    & > .submit {
        height: 24px;
        font-size: medium;
        outline: none;
        background: #169f6e;
        color: #f2e9e4;
        border: 1px solid #117E58;
        box-shadow: 1px 1px grey;
        margin-left: 14%;

        :hover {
            background: #18B47D;
        }  
    }
`
