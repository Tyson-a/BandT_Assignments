import React, { useState, CSSProperties } from 'react';
import styled from 'styled-components';
import  TextInputProps  from './TextInput.types';  // Ensure that you have the correct path and file extension if necessary

// Define the styled textarea with disabled handling
const Textarea = styled.textarea<{ disabled?: boolean; style?: CSSProperties }>`
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
  style, // Included the style prop here
}) => {
  const [text, setText] = useState<string>(initialText);

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
      style={style} // Apply the style prop directly to the Textarea
    />
  );
};

export default TextInputComponent;
