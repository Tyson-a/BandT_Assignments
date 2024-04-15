import React, { useState } from 'react';
import styled from 'styled-components';
import NameInputProps from './NameInput.types.ts';

// Use the modified styled component for textarea
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

const NameInputComponent: React.FC<NameInputProps> = ({
  initialName = '',
  onNameChange,
  disabled = false,
  placeholder = 'Enter name',
  style, // Importing style prop
}) => {
  const [name, setName] = useState(initialName);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName);
    if (onNameChange) {
      onNameChange(newName);
    }
  };

  return (
    <Input
      type="text"
      value={name}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
      style={style} // Pass style prop to Input component
    />
  );
};

export default NameInputComponent;
