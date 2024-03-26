import React, { useState } from 'react';
import styled from 'styled-components';
import TextInputProps from './TextInput .types.ts'

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

const TextInputComponent: React.FC<TextInputProps> = ({
  initialText = '',
  onTextChange,
  disabled = false,
  placeholder = 'Enter text', // Default placeholder if not provided
}) => {
  const [text, setText] = useState(initialText);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setText(newText);
    if (onTextChange) {
      onTextChange(newText);
    }
  };

  return (
    <Input
      type="text"
      value={text}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default TextInputComponent;
