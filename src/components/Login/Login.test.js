import React from 'react'
import  { render, fireEvent } from '@testing-library/react'; 
import Login from './Login.js';
 import '@testing-library/jest-dom'

describe('Login', () => {
  it('should render a login form to the page', () => {
    const mockLogin = jest.fn();
    const { getByPlaceholderText } = render(<Login />)

    expect(getByPlaceholderText('name')).toBeInTheDocument();
    expect(getByPlaceholderText('email')).toBeInTheDocument();
  })

  it('should invoke the handleClick method on submission', () => {
    const login = jest.fn();
    const { getByText, getByPlaceholderText } = render(<Login
      login={login}
    />)

    fireEvent.change(getByPlaceholderText(/name/i), { target: { value: 'name' } })
    fireEvent.change(getByPlaceholderText(/email/i), { target: { value: 'email' } })
    fireEvent.click(getByText("Log in"));

    expect(login).toHaveBeenCalled()
  })
})
