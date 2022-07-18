import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render, screen, fireEvent } from '@testing-library/react';

import App from '../App';

let container;
const e = new CustomEvent('evt');

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("loads the Landing Page ", () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });
    
  const button = container.querySelector('h1');
  expect(button.textContent).toBe("Welcome to the Code For Fun @J2GT!");
});

it("Should render dashboard",  () => {
    let comp;
    render(<App />);

    comp = screen.getByTestId(/^btnLanding/i);
    expect(comp).toBeInTheDocument();
    fireEvent.click(comp);
    
    comp = screen.getByText(/List the latest blocks and details of each block./);
    expect(comp).toBeInTheDocument();

  });