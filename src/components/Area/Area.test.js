import React from 'react'
import { render } from '@testing-library/react'; 
import Area from './Area.js';
 import '@testing-library/jest-dom'

describe('Area', () => {
  it('It should render the text that we expect', () => {
    const { getByText } = render(<Area
      area={{
        id: 590,
        name: "River North",
        shortname: 'RiNo',
        description: "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!"
      }}
    />);

    expect(getByText("RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!")).toBeInTheDocument();
    expect(getByText("River North")).toBeInTheDocument();
  })
})
