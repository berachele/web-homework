import React from 'react';
import ReactDOM from 'react-dom'
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer'

import { Transactions } from '../src/transactions';

afterEach(cleanup);

describe('Transactions page test suite', () => {
  it('renders "List of Transactions" message', () => {
    render(<Transactions />);
    expect(screen.getByText('List of Transactions')).toBeInTheDocument();
  });

  //this will also include Form snapshot because Form is imported in Transactions
  it('matches Transaction component snapshot', () => {
    const tree = renderer.create(<Transactions/>).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Form to enter and add transaction successfully works', () => {
    render(<Transactions/>);
    
  });

  it('Clicking Delete Icon successfully deletes that transaction', () => {

  });

  it('Clicking Edit Icon successfully open up edit form', () => {

  });

  it('Form to edit transaction successfully works', () => {

  });
});