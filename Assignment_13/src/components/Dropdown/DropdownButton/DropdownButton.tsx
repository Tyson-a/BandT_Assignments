// DropdownButton.js
import React from 'react';
import styled from 'styled-components';
import  DropdownButtonProps  from './DropdownButton.types';

const Button = styled.button<DropdownButtonProps>`
  background-color: transparent;
  border: none;
  color: ${({ disabled }) => (disabled ? '#888' : 'purple')};
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.75s ease-in-out;
  }

  &:hover {
    color: ${({ isVisible }) => (isVisible ? 'red' : 'green')};
  }
`;

const DropdownButton: React.FC<DropdownButtonProps> = ({ children, disabled, isVisible, onClick }) => {
  // Props specifically intended for the Button component
  const buttonProps = {
    disabled,
    'data-testid': "Dropdown",
    'aria-expanded': isVisible,
    onClick,

  };

  return (
    <Button {...buttonProps}>
      {children}
    </Button>
  );
};

export default DropdownButton;
