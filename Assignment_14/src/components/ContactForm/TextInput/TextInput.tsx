import React, { useState } from 'react';
import styled from 'styled-components';
import TextInputProps from './TextInput.types.ts';

// Use the modified styled component for textarea
const Textarea = styled.textarea<{ disabled?: boolean }>`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? '#f2f2f2' : 'white')};
  resize: vertical; // Allows vertical resizing of the textarea

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

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
    if (onTextChange) {
      onTextChange(newText);
    }
  };

  return (
    <Textarea
      value={text}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default TextInputComponent;
