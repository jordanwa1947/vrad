import React from 'react'
import { render } from '@testing-library/react'; 
import UserProfile from './UserProfile.js';
 import '@testing-library/jest-dom'

describe('UserProfile', () => {
  it('It should render the leisure message', () => {
    const { getByText } = render(
      <UserProfile travelReason="leisure"/>
    );

    expect(getByText("Ready to have some fun!?")).toBeInTheDocument();
  })

  it('It should render the business message', () => {
    const { getByText } = render(
      <UserProfile travelReason="business"/>
    );

    expect(getByText("Find the cheapest, quality rentals in Denver")).toBeInTheDocument();
  })

  it('It should render the other message', () => {
    const { getByText } = render(
      <UserProfile travelReason="other"/>
    );

    expect(getByText("Have a great trip!")).toBeInTheDocument();
  })
})
