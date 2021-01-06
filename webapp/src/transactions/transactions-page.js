import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const initialTransactions = [
  { id: uuid(), amount: '$100', date: '12/20/2020'},
  { id: uuid(), amount: '$5', date: '01/05/2021'},
]

export function Transactions () {
  const [transactions, setTransactions] = useState(initialTransactions)
  const [formValues, setFormValues] = useState({
    amount: '',
    date: '',
})

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
    console.log('changing to:', event.target.value)
  }

  const formSubmit = event => {
    event.preventDefault()

    const newTransaction = {
      id: uuid(),
      amount: formValues.amount,
      date: formValues.date
    }

    setTransactions([...transactions, newTransaction])
  }

  const editTransaction = () => {
    console.log('Clicked EDIT!!')
  }
  
  const deleteTransaction = () => {
    console.log('Clicked DELETE!!')
  }

  return (
    <div>
      <Form
        handleChange={handleChange}
        formValues={formValues}
        formSubmit={formSubmit}
      />
      <h3>List of Transactions</h3>
      {
        transactions.map(transaction => 
        <>
          <div key={transaction.id} style={{ display: 'flex', alignItems: 'center' }}> 
            <p>{transaction.amount} spent on {transaction.date}</p>
            <EditIcon onClick={editTransaction}/> 
            <DeleteIcon onClick={deleteTransaction} style={{color: 'red'}}/> 
          </div> 
        </>)
      }
    </div>
  )
}

function Form(props){
  return (
    <form onSubmit={props.formSubmit}>
        <label> Amount &nbsp;
          <input
            onChange={props.handleChange} 
            value={props.formValues.amount}
            name='amount'
            type='text'
          />
        </label>
        <br/>
        
        <label> Date &nbsp;
          <input
            onChange={props.handleChange} 
            value={props.formValues.date}
            name='date'
            type='text'
          />
        </label>
        <br /><br />

        <input type='submit' />
      </form>
  )
}
