import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
//components
import Form from './form'
//materialui icons
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

//dummy data to show transactions on Mount
const initialTransactions = [
  { id: uuid(), user: 'Hermoine', merchant: 'Honey Duke\'s', amount: '$100', date: '12/20/2020', isOpen: false },
  { id: uuid(), user: 'Harry', merchant: 'Ollivander\'s Wand Shop', amount: '$5', date: '01/05/2021', isOpen: false },
]

const initialFormValues = {
  //id with uuid() only being used when you create a transaction
  id: uuid(),
  user: '',
  merchant: '',
  amount: '',
  date: '',
  isOpen: false
}

export function Transactions () {
  const [transactions, setTransactions] = useState(initialTransactions)
  const [formValues, setFormValues] = useState(initialFormValues)


  const createTransactionSubmission =  (id, user, merchant, amount, date ) => {
    const newTransaction = { id, user, merchant, amount, date }
    setTransactions([...transactions, newTransaction])
  }

  const editTransactionSubmission = ( id, user, merchant, amount, date ) => {
    //setting isOpen to false so form will close after submission
    const newTransaction = { id, user, merchant, amount, date, isOpen: false}

    let newTransactionIndex = transactions.findIndex((transaction) => {
      return transaction.id === id
    })

    let newArray = [...transactions]
    newArray[newTransactionIndex] = newTransaction
    setTransactions(newArray)
  }

  const deleteTransaction = (transaction) => {
    let transactionIndex = transactions.indexOf(transaction)
    transactions.splice(transactionIndex, 1)
    setTransactions([...transactions])
  }
  
  const openEditFrom = (transaction) => {
    let transactionIndex = transactions.indexOf(transaction)
    let newArray = [...transactions]
    newArray[transactionIndex].isOpen = true
    setTransactions(newArray)
  }

  return (
    <div>
      <Form
        onSubmit={createTransactionSubmission}
        formValues={formValues}
        initialFormValues={initialFormValues}
      />

      <h3>List of Transactions</h3>
      {
        transactions.map(transaction => 
        <>
          <div key={transaction.id} style={{ display: 'flex', alignItems: 'center' }}> 
            <p>{transaction.user} spent {transaction.amount} at {transaction.merchant} on {transaction.date}</p>
            <EditIcon onClick={()=>openEditFrom(transaction)}/> 
            <DeleteIcon onClick={()=>deleteTransaction(transaction)} style={{color: 'red'}}/> 
          </div> 
          {/* edit form will only open when transaction.isOpen is true */}
          { transaction.isOpen && 
          <Form
            onSubmit={editTransactionSubmission}
            formValues={{ 
              id: transaction.id, 
              amount: transaction.amount, 
              date: transaction.date, 
              user: transaction.user, 
              merchant: transaction.merchant, 
              isOpen: transaction.isOpen 
            }}
          />
          }
        </>)
      }
    </div>
  )
}
