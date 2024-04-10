import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './RadioButton'; // Adjust the import path as necessary

describe('RadioButton Component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  it('renders with default properties', () => {
    render(<RadioButton options={options} />);
    // Check all options are rendered
    options.forEach(option => {
      expect(screen.getByLabelText(option)).toBeInTheDocument();
    });
  });

  it('has no option selected by default', () => {
    render(<RadioButton options={options} />);
    options.forEach(option => {
      expect(screen.getByLabelText(option)).not.toBeChecked();
    });
  });

  it('calls onChange with the selected option', () => {
    const handleChange = jest.fn();
    render(<RadioButton options={options} onChange={handleChange} />);

    const optionToSelect = screen.getByLabelText('Option 2');
    fireEvent.click(optionToSelect);

    expect(handleChange).toHaveBeenCalledWith('Option 2');
    expect(optionToSelect).toBeChecked();
  });

  it('does not allow selection when disabled', () => {
    const handleChange = jest.fn();
    render(<RadioButton options={['Option 1']} onChange={handleChange} disabled />);
    const optionToSelect = screen.getByLabelText('Option 1');
    fireEvent.click(optionToSelect);
    expect(handleChange).not.toHaveBeenCalled();
  });
  
  // This is a bonus test to check for custom styles like `circlesize` if your setup allows style testing
  it('applies custom circle size', () => {
    const circlesize = '30px';
    const { container } = render(<RadioButton options={options} circlesize={circlesize} />);
    const input = container.querySelector('input'); // Assuming there's only one for simplicity
    // Note: This approach to testing styles might not always work in JSDOM
    expect(input).toHaveStyle(`width: ${circlesize}`);
    expect(input).toHaveStyle(`height: ${circlesize}`);
  });
});
