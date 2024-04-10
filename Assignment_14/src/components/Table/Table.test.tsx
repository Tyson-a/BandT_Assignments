import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './table'; // Adjust the import path as necessary

describe('Table component', () => {
  it('renders correctly in the default state', () => {
    render(<Table />);
    // Assuming your Table has a static set of skill levels or headers to check
    expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Skill Level')).toBeInTheDocument();  // Example: "Level" could be another header
    // You can add more checks here based on the static content of your Table in its default state
  });

  it('applies correct styles in the disabled state', () => {
    render(<Table disabled={true} />);
    const tableElement = screen.getByTestId('table'); // Assume you've added data-testid="table" to your table element
    expect(tableElement).toHaveStyle('opacity: 0.5');
    expect(tableElement).toHaveStyle('cursor: not-allowed');
  });

  it('supports custom background color', () => {
    const customBgColor = '#f0f0f0';
    render(<Table backgroundColor={customBgColor} />);
    const tableElement = screen.getByTestId('table'); // Assuming you have a data-testid="table"
    expect(tableElement).toHaveStyle(`background-color: ${customBgColor}`);
  });
});
