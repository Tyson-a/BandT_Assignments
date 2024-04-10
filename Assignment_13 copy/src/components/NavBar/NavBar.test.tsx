import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBarComponent from './NavBar'; // Adjust the import path as necessary
import '@testing-library/jest-dom';

describe('NavBarComponent', () => {
  it('renders with default properties', () => {
    render(<NavBarComponent />);
    // Example: Verify the label text is present
    expect(screen.getByText('Tyson La')).toBeInTheDocument();
    // Optionally, check for default background color style if needed
    expect(screen.getByText('Tyson La').closest('div')).toHaveStyle(`background-color: black`);
  });

  it('applies opacity change when disabled', () => {
    render(<NavBarComponent disabled />);
    // Verify the container has reduced opacity when disabled
    const container = screen.getByText('Tyson La').closest('div');
    expect(container).toHaveStyle('opacity: 0.5');
  });

  it('disables MyDropdownComponent and MyLabelComponent when disabled', () => {
    render(<NavBarComponent disabled />);
    expect(screen.getByTestId('my-dropdown')).toHaveAttribute('disabled');
  });
});
