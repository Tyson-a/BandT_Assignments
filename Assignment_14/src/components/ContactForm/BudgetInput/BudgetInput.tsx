import React, { useState } from 'react';
import styled from 'styled-components';
import BudgetInputProps from './BudgetInput.types.ts'; // Assuming you have defined props here



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
}) => {
  const [budget, setBudget] = useState(initialBudget);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBudget = parseFloat(event.target.value) || 0; 
    setBudget(newBudget);
    if (onBudgetChange) {
      onBudgetChange(newBudget);
    }
  };

  return (
    <Input
      type="number"
      value={budget.toString()}
      onChange={handleChange}
      placeholder="Enter your budget"
      disabled={disabled} 
    />
  );
};

export default BudgetInputComponent;
