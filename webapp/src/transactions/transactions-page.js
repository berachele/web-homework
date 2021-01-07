import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Form from './form'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
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
      <SimpleAccordian />
    </div>
  )
}

const accordianStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function SimpleAccordian(){
  const classes = accordianStyles()

  return (
    <>
    <Accordion>
      <AccordionSummary
        expandIcon={<EditIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Accordian 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        Hello there
        {/* <Form 
          handleChange={handleChange}
          formValues={formValues}
          handleSubmit={handleSubmit}
          // type={formTypeEdit}
        /> */}
      </AccordionDetails>
    </Accordion>
    </>
  )
}
