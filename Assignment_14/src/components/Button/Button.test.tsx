import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyButton from './Button'; // Adjust the import path to where your Button component is located
import { sum } from './Button.lib'; // Adjust the import path to where your sum function is located

// Test for your utility function
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// Tests for the MyButton component
describe('MyButton Component', () => {
  // Test default rendering
  test('renders with default text', () => {
    render(<MyButton onClick={() => {}}>Default Text</MyButton>);
    expect(screen.getByRole('button', { name: 'Default Text' })).toBeInTheDocument();
  });

  // Test click event
  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<MyButton onClick={handleClick}>Click Me</MyButton>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test disabled state
  test('is disabled when disabled prop is true', () => {
    render(<MyButton onClick={() => {}} disabled>Disabled Button</MyButton>);
    expect(screen.getByRole('button', { name: 'Disabled Button' })).toBeDisabled();
  });

  // Assuming your MyButton component accepts a backgroundColor prop for testing custom style application
  test('applies custom background color style', () => {
    const backgroundColor = '#123456';
    render(<MyButton onClick={() => {}} backgroundcolor={backgroundColor}>Colored Button</MyButton>);
    const buttonElement = screen.getByRole('button', { name: 'Colored Button' });
    expect(buttonElement).toHaveStyle(`background-color: ${backgroundColor}`);
  });
});
