import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Render login page', () => {
    const { getByText, getByPlaceholderText } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
    );

    fireEvent.change(getByPlaceholderText(/name/i), { target: { value: 'name' } })
    fireEvent.change(getByPlaceholderText(/email/i), { target: { value: 'email' } })
    fireEvent.click(getByText("Log in"));

    expect(getByText("— vacation rentals around denver.")).toBeInTheDocument();
  });
})
