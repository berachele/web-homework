import React from 'react';
import { render, fireEvent, cleanup, getByText } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Transactions } from '../src/transactions';

describe('Transactions page test suite', () => {
  it('renders "List of Transactions" message', () => {
    const { getByText } = render(<Transactions />)
    const listTitle = getByText('List of Transactions')
    expect(listTitle).toBeInTheDocument()
  })

  //this will also watch Form because Form is imported in Transactions
  // it('matches Transaction component snapshot', () => {
  //   const tree = renderer.create(<Transactions />).toJSON()
  //   expect(tree).toMatchSnapshot()
  // })

  it('Testing if inputs on form are visible on add form', () => {
    const { getByLabelText } = render(<Transactions />)

    getByLabelText(/Amount/i)
    getByLabelText(/Date/i)
  })

  it('Form to enter and add transaction successfully works', async() => {
    const { getByTestId } = render(<Transactions />)
    //entering values
    const amountInput = getByTestId(/amount/i)
    const dateInput = getByTestId(/date/i)

    fireEvent.change(amountInput, { target: { value: '$45' } })
    fireEvent.change(dateInput, { target: { value: '11/25/2020' } })
    
    expect(amountInput.value).toBe('$45')
    expect(dateInput.value).toBe('11/25/2020')
    //submission
    fireEvent.click(getByTestId(/submit/i))

    const amountValue = await amountInput.value
    const dateValue = await dateInput.value

    expect(amountValue).toBe('')
    expect(dateValue).toBe('')
  })

  it('Clicking Edit Icon successfully open up edit form', async() => {
    render(<Transactions />)
    const editBtnNodeList = document.querySelectorAll('#edit')
    const firstTransaction = editBtnNodeList[0]
    const formsList = document.querySelectorAll('.form')
    const formListLength = formsList.length

    expect(formListLength).toBe(1)

    fireEvent.click(firstTransaction)

    const newFormsList = await document.querySelectorAll('.form')

    expect(newFormsList.length).toBe(2)
  })

  it('Form to edit transaction successfully works', async() => {
    const { getByDisplayValue } = render(<Transactions />)
    //editing values
    const amountInput = getByDisplayValue('$100')

    fireEvent.change(amountInput, { target: { value: '$45' } })
    
    const amountValue = await amountInput.value

    expect(amountValue).toBe('$45')
    
    //submission
    const submitButtons = document.querySelectorAll('.submit')
    const mySubmitButton = submitButtons[1]

    fireEvent.click(mySubmitButton)

    const updatedTransaction = await document.querySelector('.transaction').textContent

    expect(updatedTransaction).toBe('$45 spent on 12/20/2020')
  })
})

  it('Clicking Delete Icon successfully deletes that transaction', async() => {
    render(<Transactions />)
    const deleteBtnNodeList = document.querySelectorAll('#delete')
    const nodeListLength = deleteBtnNodeList.length
    const firstTransaction = deleteBtnNodeList[0]

    expect(nodeListLength).toBe(2)

    fireEvent.click(firstTransaction)

    const newNodeListLength = await document.querySelectorAll('.transaction').length
    
    expect(newNodeListLength).toBe(1)
  })
