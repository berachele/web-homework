function Form(props){
    console.log('formValues: ', props.formValues)
    console.log(props.formType, "Type")
    return (
      <form onSubmit={props.handleSubmit}>
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

  export default Form
  