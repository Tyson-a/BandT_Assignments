import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LabelComponent from './Label';

test('renders with default styling', () => {
  render(<LabelComponent text="Default Label" />);
  const label = screen.getByText('Default Label');

  expect(label).toHaveStyle('fontWeight: normal');
  expect(label).toHaveStyle('color: black'); // Since default color is black
  expect(label).toHaveStyle('backgroundColor: transparent');
  expect(label).toHaveStyle('fontSize: inherit');
});


it('applies bold styling when bold prop is true', () => {
    render(<LabelComponent text="Bold Label" bold htmlFor="testInput" />);
    const label = screen.getByText('Bold Label');
    expect(label).toHaveStyle('fontWeight: bold');
  });
  
  it('applies custom font family when provided', () => {
    const customFont = 'Arial';
    render(<LabelComponent text="Custom Font Label" fontFamily={customFont} htmlFor="testInput" />);
    const label = screen.getByText('Custom Font Label');
    expect(label).toHaveStyle(`fontFamily: ${customFont}`);
  });
  
  it('adjusts styles when disabled', () => {
    render(<LabelComponent text="Disabled Label" disabled htmlFor="testInput" />);
    const label = screen.getByText('Disabled Label');
    expect(label).toHaveStyle('color: gray');
    expect(label).toHaveStyle('backgroundColor: transparent'); // Assuming this is the disabled state background
  });

  it('applies custom background color when provided', () => {
    const customBackgroundColor = '#FF0000';
    render(<LabelComponent text="Custom Background" backgroundColor={customBackgroundColor} htmlFor="testInput" />);
    const label = screen.getByText('Custom Background');
    expect(label).toHaveStyle(`backgroundColor: ${customBackgroundColor}`);
  });

  it('applies custom font size when provided', () => {
    const customFontSize = '20px';
    render(<LabelComponent text="Custom Font Size" fontSize={customFontSize} htmlFor="testInput" />);
    const label = screen.getByText('Custom Font Size');
    expect(label).toHaveStyle(`fontSize: ${customFontSize}`);
  });
  
  
  