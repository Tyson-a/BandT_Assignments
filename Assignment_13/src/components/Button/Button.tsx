import React from 'react';
import styled from 'styled-components';
import { MyButtonProps, StyleProps } from './Button.types';

// Adjust StyledButton to use direct style props instead of nesting them under styleProps
const StyledButton = styled.button<Omit<MyButtonProps, 'backgroundColor' | 'boxShadow'> & StyleProps>`
  background: ${({ backgroundcolor }) => backgroundcolor || '#e74c3c'};
  color: #fff;
  border: none;
  padding: 1em;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.2s;
  border-radius: 5px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  letter-spacing: 1px;
  box-shadow: ${({ boxShadow }) => boxShadow || '2px 3px 6px #c0392b, -1px -2px 4px #000'};
  
  &:hover {
    opacity: 0.8;
  }
  
  &:active {
    ${({ disabled, boxShadow }) =>
      disabled ? '' : `top: 2px; box-shadow: ${boxShadow || 'none'};`}
  }
  
  &.disabled {
    cursor: not-allowed;
  }
`;


// MyButton component now takes MyButtonProps and StyleProps directly without nesting
const MyButton: React.FC<MyButtonProps & StyleProps> = ({
  children,
  onClick,
  disabled = false,
  backgroundcolor, // Default values are now handled within StyledButton
  boxShadow
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      backgroundcolor={backgroundcolor}
      boxShadow={boxShadow}
      className={disabled ? 'disabled' : ''}
    >
      {children}
    </StyledButton>
  );
};

export default MyButton;
