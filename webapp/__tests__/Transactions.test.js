import React from 'react';
import { render, screen } from '@testing-library/react';
import { Transactions } from '../src/transactions';

describe('Transactions page test suite', () => {
  it('renders "Content for /transactions route" message', () => {
    render(<Transactions />);
    expect(screen.getByText('Content for /transactions route')).toBeInTheDocument();
  });
});