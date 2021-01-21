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
  
})
