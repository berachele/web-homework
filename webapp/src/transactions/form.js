import React, { useState } from 'react'

function Form(props){
    const [formValues, setFormValues] = useState(props.formValues)

    const handleChange = event => {
        setFormValues({
          ...formValues,
          [event.target.name]: event.target.value
        })
      }

    const onSubmit = event => {
        //stops the rerendering after adding transaction
        event.preventDefault()

        props.onSubmit(formValues.id, formValues.user, formValues.merchant, formValues.amount, formValues.date, formValues.isOpen)
        //clearing form after submission
        setFormValues(props.initialFormValues)
    }

    return (
      <form onSubmit={onSubmit}>
          <label> User: &nbsp;
            <input
              onChange={handleChange} 
              value={formValues.user}
              name='user'
              type='text'
            />
          </label>
          <br/>

          <label> Merchant: &nbsp;
            <input
              onChange={handleChange} 
              value={formValues.merchant}
              name='merchant'
              type='text'
            />
          </label>
          <br/>

          <label> Amount: &nbsp;$
            <input
              onChange={handleChange} 
              value={formValues.amount}
              name='amount'
              type='text'
            />
          </label>
          <br/>
          
          <label> Date: &nbsp;
            <input
              onChange={handleChange} 
              value={formValues.date}
              name='date'
              type='text'
              placeholder='MM/DD/YYYY'
            />
          </label>
          <br /><br />
  
          <input type='submit' />
        </form>
    )
  }

  export default Form
  