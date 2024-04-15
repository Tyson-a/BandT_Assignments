import React from 'react';
import styled from 'styled-components';
import MyButtonProps from './Button.types';
import StyleProps  from './Button.types';

const StyledButton = styled.button<Omit<MyButtonProps, 'backgroundColor' | 'boxShadow' | 'color'> & StyleProps & { type?: 'button' | 'submit' | 'reset' }>`
  background: ${({ backgroundcolor }) => backgroundcolor || '#e74c3c'};
  color: ${({ color }) => color || '#fff'}; // Default color is white if not specified
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

const MyButton: React.FC<MyButtonProps & StyleProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
  disabled = false,
  backgroundcolor,
  boxShadow,
  color,
  type, // Include the type prop
  style,
  ...rest
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      backgroundcolor={backgroundcolor}
      boxShadow={boxShadow}
      color={color}
      type={type} // Set the button type ('button', 'submit', 'reset')
      style={style}
      {...rest}
      className={`${disabled ? 'disabled' : ''} ${rest.className || ''}`}
    >
      {children}
    </StyledButton>
  );
};

export default MyButton;
