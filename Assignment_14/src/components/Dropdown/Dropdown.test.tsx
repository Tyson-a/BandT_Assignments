import React from 'react';
import { render, screen, } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Dropdown from './Dropdown'; // Adjust the import path to your Dropdown component

test('Dropdown is initially closed with a bars icon', () => {
    render(<Dropdown />);
    expect(screen.getByTestId('Dropdown')).toBeInTheDocument();
    expect(screen.queryByText('About Me')).not.toBeInTheDocument(); // Ensure dropdown items are not visible
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
  });
  
  test('Dropdown opens and closes upon clicking the toggle button', async () => {
    render(<Dropdown />);
    const toggleButton = screen.getByTestId('Dropdown');
    await userEvent.click(toggleButton);
  
    // Check if the dropdown is open now
    expect(screen.queryByText('About Me')).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
  
    // Click again to close
    await userEvent.click(toggleButton);
  
    // After clicking to close, check that 'About Me' is not in the document.
    expect(screen.queryByText('About Me')).not.toBeInTheDocument();
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });
  
  
  test('Dropdown does not open when disabled', async () => {
    render(<Dropdown disabled={true} />);
    const toggleButton = screen.getByTestId('Dropdown');
    expect(toggleButton).toHaveStyle('cursor: not-allowed');
  
    await userEvent.click(toggleButton);
    
expect(screen.queryByText('About Me')).not.toBeInTheDocument();

  });
  