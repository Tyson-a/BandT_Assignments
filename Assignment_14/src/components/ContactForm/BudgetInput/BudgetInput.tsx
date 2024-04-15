import React, { useState } from 'react';
import styled from 'styled-components';
import BudgetInputProps from './BudgetInput.types.ts';

// Adjust the styled component to apply the disabled state
const Input = styled.input<{ disabled?: boolean }>`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? '#f2f2f2' : 'white')};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const BudgetInputComponent: React.FC<BudgetInputProps> = ({
  initialBudget = 0,
  onBudgetChange,
  disabled = false, // Default to false if not provided
  style, // Importing style prop
}) => {
  const [budget, setBudget] = useState<number>(initialBudget);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBudget = parseFloat(event.target.value);
    if (newBudget >= 0) { // Check if the value is not negative
      setBudget(newBudget);
      if (onBudgetChange) {
        onBudgetChange(newBudget);
      }
    } else {
      setBudget(0); // Reset to zero if negative value is entered
      if (onBudgetChange) {
        onBudgetChange(0);
      }
    }
  };

  return (
    <Input
      type="number"
      value={budget.toString()}
      onChange={handleChange}
      placeholder="Enter your budget"
      disabled={disabled}
      style={style} // Pass style prop to Input component
      min="0" // Set the minimum value to 0
    />
  );
};

export default BudgetInputComponent;
