import React from 'react'
import { render } from '@testing-library/react'; 
import UserProfile from './UserProfile.js';
 import '@testing-library/jest-dom'

describe('UserProfile', () => {
  it('It should render the text that we expect', () => {
    const { getByText } = render(
      <UserProfile travelReason="leisure"/>
    );

    expect(getByText("leisure")).toBeInTheDocument();
  })
})
