import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
//components
import Form from './form'
//materialui icons
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
//styles
import { containerStyles, h2Styles, transactionBlock, transactionStyles, editBttn, deleteBttn } from '../styles/transactions-page'


const initialFormValues = {
  //id with uuid() only being used when you create a transaction
  id: uuid(),
  user: '',
  merchant: '',
  amount: '',
  date: '',
  isOpen: false
}

export function Transactions ({transactions, setTransactions}) {
  const [formValues, setFormValues] = useState(initialFormValues)


  const createTransactionSubmission =  ( id, user, merchant, amount, date ) => {
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
      <h1>Transactions</h1>
      <div css={containerStyles}>
        <h2>Enter a Transaction</h2>
        <Form
          onSubmit={createTransactionSubmission}
          formValues={formValues}
          initialFormValues={initialFormValues}
        />
      </div>
      <div css={containerStyles}>
        <h2 css={h2Styles}>List of Transactions</h2>
        {
          transactions.map(transaction => 
          <div id='transaction-block' css={transactionBlock}>
            <div key={transaction.id} css={transactionStyles}> 
              <p className='transaction'>{transaction.user} spent ${transaction.amount} at {transaction.merchant} on {transaction.date}</p>
              <EditIcon id='edit' onClick={()=>openEditFrom(transaction)} css={editBttn}/> 
              <DeleteIcon id='delete' onClick={()=>deleteTransaction(transaction)} css={deleteBttn}/> 
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
          </div>)
        }
      </div>
    </div>
  )
}
