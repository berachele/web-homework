import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Transactions } from '../src/transactions';
//for mock data and useState for test props
import { renderHook } from '@testing-library/react-hooks'
import useMockTransactions from './useMockTransactions'


describe('Transactions page test suite', () => {
  
  it('renders "List of Transactions" message', () => {
    const { result } = renderHook(() => useMockTransactions())
    
    const { getByText } = render(<Transactions transactions={result.current.mockTransactions} setTransactions={result.current.setMockTransactions}/>)
    const listTitle = getByText('List of Transactions')
    
    expect(listTitle).toBeInTheDocument()
  })
  
  // // this will also watch Form because Form is imported in Transactions
  it('matches Transaction component snapshot', () => {
    const { result } = renderHook(() => useMockTransactions())
    
    const tree = renderer.create(<Transactions transactions={result.current.mockTransactions} setTransactions={result.current.setMockTransactions}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  

  it('Testing if inputs on form are visible on add form', () => {
    const { result } = renderHook(() => useMockTransactions())

    const { getByLabelText } = render(<Transactions transactions={result.current.mockTransactions} setTransactions={result.current.setMockTransactions}/>)

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
    const { result } = renderHook(() => useMockTransactions())

    const { getByTestId } = render(<Transactions transactions={result.current.mockTransactions} setTransactions={result.current.setMockTransactions}/>)
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
    const { result } = renderHook(() => useMockTransactions())

    render(<Transactions transactions={result.current.mockTransactions} setTransactions={result.current.setMockTransactions}/>)
    console.log('ENTERING CLICK EDIT TEST')

    const editBtnNodeList = document.querySelectorAll('#edit')
    const firstTransaction = editBtnNodeList[0]
    const formsList = document.querySelectorAll('.form')
    const formsListLength = formsList.length

    console.log({formsList})

    expect(formsListLength).toBe(1)

    fireEvent.click(firstTransaction)

    const newFormsList = await document.querySelectorAll('.form')
    console.log({newFormsList})

    await expect(newFormsList.length).toBe(2)

  })

  it('Form to edit transaction successfully works', async() => {
    const { result } = renderHook(() => useMockTransactions())
    console.log('ENTERING EDIT FORM WORKS TEST')

    const { getByDisplayValue } = render(<Transactions 
      transactions={result.current.mockTransactions} 
      setTransactions={result.current.setMockTransactions} 
    />)

    //testing
    const formsList = document.querySelectorAll('.form')
    console.log({formsList})

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
  
  it('Clicking Delete Icon successfully deletes that transaction', async() => {
    const { result } = renderHook(() => useMockTransactions())
    console.log('ENTERING DELETE TEST')
    
    render(<Transactions transactions={result.current.mockTransactions} setTransactions={result.current.setMockTransactions}/>)
    const deleteBtnNodeList = document.querySelectorAll('#delete')
    const nodeListLength = deleteBtnNodeList.length
    const firstTransaction = deleteBtnNodeList[0]
    
    expect(nodeListLength).toBe(2)
    
    fireEvent.click(firstTransaction)
    
    const newNodeListLength = await document.querySelectorAll('.transaction').length
    
    expect(newNodeListLength).toBe(1)
  })
  
})
