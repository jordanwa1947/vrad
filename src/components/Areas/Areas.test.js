import React from 'react'
import { render, waitForElement } from '@testing-library/react'; 
import Areas from './Areas.js';
 import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

describe('Areas', () => {
  it('It should render the text that we expect', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Areas />
      </BrowserRouter>);

    await waitForElement(() => getByText("RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!"))

    expect(getByText("RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!")).toBeInTheDocument();
    expect(getByText("River North")).toBeInTheDocument();
  })
})
