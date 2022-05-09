import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should convert "fifty four" to 54', () => {
    render(<App />);
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'fifty four' } });
    expect(screen.getByTestId('output').innerHTML.trim()).toBe('Output: 54');
  });

  it('Should convert "two thousand and forty five" to 2045', () => {
    render(<App />);
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'two thousand and forty five' } });
    expect(screen.getByTestId('output').innerHTML.trim()).toBe('Output: 2045');
  });

  it('Should convert "three million one hundred thousand and ninety" to 3100090', () => {
    render(<App />);
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'three million one hundred thousand and ninety' } });
    expect(screen.getByTestId('output').innerHTML.trim()).toBe('Output: 3100090');
  });

  it('Should show incorrect for "asdasd"', () => {
    render(<App />);
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'asdasd' } });
    expect(screen.getByTestId('output').innerHTML.trim()).toBe('Output: incorrect');
  });

  it('Should show incorrect for "one one"', () => {
    render(<App />);
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'one one' } });
    expect(screen.getByTestId('output').innerHTML.trim()).toBe('Output: incorrect');
  });
});
