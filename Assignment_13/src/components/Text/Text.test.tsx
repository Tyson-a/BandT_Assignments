import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextComponent from './Text'; // Adjust the import path as needed

describe('TextComponent', () => {
  it('renders with default styling', () => {
    const testText = 'Test Text';
    render(<TextComponent text={testText} />);
    const textElement = screen.getByText(testText);

    // Check if it renders the text content correctly
    expect(textElement).toBeInTheDocument();

    // Optionally, verify default styles
    // Note: Direct style checks might depend on how your styled-components are set up with jest
    expect(textElement).toHaveStyle('font-weight: normal');
    expect(textElement).toHaveStyle('color: inherit');
    expect(textElement).toHaveStyle('background-color: transparent');
    expect(textElement).toHaveStyle('font-size: inherit');
  });

  it('applies disabled styling', () => {
    const testText = 'Disabled Text';
    render(<TextComponent text={testText} disabled />);
    const textElement = screen.getByText(testText);

    // Check if disabled styles are applied
    expect(textElement).toHaveStyle('color: gray');
    expect(textElement).toHaveStyle('background-color: transparent');
  });

  // Add more tests here as needed for other props like `fontFamily`, `color`, etc.
});
