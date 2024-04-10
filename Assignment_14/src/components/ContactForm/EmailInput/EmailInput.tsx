import React, { useState } from 'react';
import styled from 'styled-components';
import EmailInputProps from './EmailInput.types.ts'


// Assuming the props are defined inline for this example

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

const EmailInputComponent: React.FC<EmailInputProps> = ({
  initialEmail = '',
  onEmailChange,
  disabled = false,
}) => {
  const [email, setEmail] = useState(initialEmail);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (onEmailChange) {
      onEmailChange(newEmail);
    }
  };

  return (
    <Input
      type="email"
      value={email}
      onChange={handleChange}
      placeholder="Enter your email"
      disabled={disabled}
    />
  );
};

export default EmailInputComponent;
