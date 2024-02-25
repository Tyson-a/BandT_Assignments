// MyButton.tsx
import React from 'react';
import styled from 'styled-components';
import { MyButtonProps } from './Button.types';

const StyledButton = styled.button<{ disabled?: boolean; backgroundColor: string; boxShadow: string }>`
  background: ${({ backgroundColor }) => backgroundColor};
  color: #fff;
  border: none;
  padding: 1em;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.2s;
  border-radius: 5px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  letter-spacing: 1px;
  box-shadow: ${({ boxShadow }) => boxShadow};

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  }

  &:active {
    /* Apply the :active styles only when the button is not disabled */
    ${({ disabled }) =>
      disabled
        ? ''
        : `
          top: 4px;
          box-shadow: green 0px 3px 2px, #000 0px 3px 5px;
        `}
  }

  &.disabled {
    cursor: not-allowed;
  }
`;

const MyButton: React.FC<MyButtonProps> = ({
  children,
  onClick,
  disabled,
  backgroundColor = "#e74c3c", // Default value for backgroundColor
  boxShadow = "0px 7px 2px #c0392b, 0px 8px 5px #000" // Default value for boxShadow
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={disabled ? undefined : onClick} // Disable onClick when the button is disabled
      backgroundColor={backgroundColor}
      boxShadow={boxShadow}
      className={disabled ? 'disabled' : ''}
    >
      {children}
    </StyledButton>
  );
};

export default MyButton;