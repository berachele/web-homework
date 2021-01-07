import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Form from './form'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const initialTransactions = [
  { id: uuid(), amount: '$100', date: '12/20/2020'},
  { id: uuid(), amount: '$5', date: '01/05/2021'},
]

const initialFormValue = {
  amount: '',
  date: '',
}

export function Transactions () {
  const [transactions, setTransactions] = useState(initialTransactions)
  const [formValues, setFormValues] = useState(initialFormValue)

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    const newTransaction = {
      id: uuid(),
      amount: formValues.amount,
      date: formValues.date
    }
    setTransactions([...transactions, newTransaction])
    setFormValues(initialFormValue)
  }

  const editTransaction = (transaction) => {
    console.log('Clicked EDIT!!')

    console.log({transaction})
  }
  
  const deleteTransaction = (transaction) => {
    let findIndex = transactions.indexOf(transaction)
    transactions.splice(findIndex, 1)
    setTransactions([...transactions])
  }

  return (
    <div>
      <Form
        handleChange={handleChange}
        formValues={formValues}
        handleSubmit={handleSubmit}

      />
      <h3>List of Transactions</h3>
      {
        transactions.map(transaction => 
        <>
          <div key={transaction.id} style={{ display: 'flex', alignItems: 'center' }}> 
            <p>{transaction.amount} spent on {transaction.date}</p>
            <EditIcon onClick={()=>editTransaction(transaction)}/> 
            <DeleteIcon onClick={()=>deleteTransaction(transaction)} style={{color: 'red'}}/> 
          </div> 
        </>)
      }
    </div>
  )
}
