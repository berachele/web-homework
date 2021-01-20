import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Transactions } from '../src/transactions';

//dummy data to pass into props (useState's transactions and setTransactions)
let mockTransactions = [
  {
    id: "4ea33565-a98f-4151-846a-0a35d4da9a03",
    user: "Hermoine",
    merchant: "Flourish and Blotts",
    amount: "100",
    date: "12/20/2020",
    isOpen: false,
  },
  {
    id: "8cbfc4d1-b506-4755-b18e-1765ff29fe71",
    user: "Harry",
    merchant: "Ollivander's Wand Shop",
    amount: "5",
    date: "01/05/2021",
    isOpen: false,
  }
]

describe('Transactions page test suite', () => {
  it('renders "List of Transactions" message', () => {
    const { getByText } = render(<Transactions transactions={mockTransactions} setTransactions={() => {}}/>)
    const listTitle = getByText('List of Transactions')
    
    expect(listTitle).toBeInTheDocument()
  })

  // this will also watch Form because Form is imported in Transactions
  // it('matches Transaction component snapshot', () => {
  //   const tree = renderer.create(<Transactions transactions={mockTransactions} setTransactions={() => {}}/>).toJSON()

  //   expect(tree).toMatchSnapshot()
  // })

  it('Testing if inputs on form are visible on add form', () => {
    const { getByLabelText } = render(<Transactions transactions={mockTransactions} setTransactions={() => {}}/>)

    const userInput = getByLabelText(/User/i)
    const merchantInput = getByLabelText(/Merchant/i)
    const amountInput = getByLabelText(/Amount/i)
    const dateInput = getByLabelText(/Date/i)

    expect(userInput.value).toBe('')
    expect(merchantInput.value).toBe('')
    expect(amountInput.value).toBe('')
    expect(dateInput.value).toBe('')
  })

  it('Form to enter and add transaction successfully works', async() => {
    const { getByTestId } = render(<Transactions transactions={mockTransactions} setTransactions={() => {}}/>)
    //entering values
    const userInput = getByTestId(/user/i)
    const merchantInput = getByTestId(/merchant/i)
    const amountInput = getByTestId(/amount/i)
    const dateInput = getByTestId(/date/i)

    fireEvent.change(userInput, { target: { value: 'Ron' } })
    fireEvent.change(merchantInput, { target: { value: 'Weasley\'s Wizard Wheezes' } })
    fireEvent.change(amountInput, { target: { value: '15' } })
    fireEvent.change(dateInput, { target: { value: '07/31/2020' } })
    
    expect(userInput.value).toBe('Ron')
    expect(merchantInput.value).toBe('Weasley\'s Wizard Wheezes')
    expect(amountInput.value).toBe('15')
    expect(dateInput.value).toBe('07/31/2020')
    //submission
    fireEvent.click(getByTestId(/submit/i))

    const userValue = await userInput.value
    const merchantValue = await merchantInput.value
    const amountValue = await amountInput.value
    const dateValue = await dateInput.value

    expect(userValue).toBe('')
    expect(merchantValue).toBe('')
    expect(amountValue).toBe('')
    expect(dateValue).toBe('')
  })

  it('Clicking Edit Icon successfully opens up edit form', async() => {
    render(<Transactions transactions={mockTransactions} setTransactions={() => {}}/>)
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
    const { getByDisplayValue } = render(<Transactions transactions={mockTransactions} setTransactions={() => {}}/>)
    //editing values
    const amountInput = getByDisplayValue('100')

    fireEvent.change(amountInput, { target: { value: '45' } })
    
    const amountValue = await amountInput.value

    expect(amountValue).toBe('45')
    
    //submission
    const submitButtons = document.querySelectorAll('.submit')
    const mySubmitButton = submitButtons[1]

    fireEvent.click(mySubmitButton)

    const updatedTransaction = await document.querySelector('.transaction').textContent

    expect(updatedTransaction).toBe('Hermoine spent $45 at Flourish and Blotts on 12/20/2020')
  })
})

  it('Clicking Delete Icon successfully deletes that transaction', async() => {
    render(<Transactions transactions={mockTransactions} setTransactions={() => {}}/>)
    const deleteBtnNodeList = document.querySelectorAll('#delete')
    const nodeListLength = deleteBtnNodeList.length
    const firstTransaction = deleteBtnNodeList[0]

    expect(nodeListLength).toBe(2)

    fireEvent.click(firstTransaction)

    const newNodeListLength = await document.querySelectorAll('.transaction').length
    
    expect(newNodeListLength).toBe(1)
  })
