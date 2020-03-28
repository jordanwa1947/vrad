import React from 'react'
import { render } from '@testing-library/react'; 
import Header from './Header.js';
 import '@testing-library/jest-dom'

describe('Header', () => {
  it('It should render the text that we expect', () => {
    const { getByText } = render(<Header name="Jordan" />);

    expect(getByText("— vacation rentals around denver.")).toBeInTheDocument();
    expect(getByText("Welcome, Jordan! vrad.")).toBeInTheDocument();
  })
})
