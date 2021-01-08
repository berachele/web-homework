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

        props.onSubmit(formValues.id, formValues.amount, formValues.date, formValues.isOpen)
        //clearing form after submission
        setFormValues(props.initialFormValues)
    }

    return (
      <form onSubmit={onSubmit}>
          <label> Amount &nbsp;
            <input
              data-testid='amount'
              onChange={handleChange} 
              value={formValues.amount}
              name='amount'
              type='text'
            />
          </label>
          <br/>
          
          <label> Date &nbsp;
            <input
              data-testid='date'
              onChange={handleChange} 
              value={formValues.date}
              name='date'
              type='text'
            />
          </label>
          <br /><br />
  
          <input type='submit' data-testid='submit'/>
        </form>
    )
  }

  export default Form
  