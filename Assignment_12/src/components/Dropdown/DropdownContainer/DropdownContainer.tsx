// DropdownContainer.js
import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './DropdownContainer.types';

const Container = styled.div<DropdownProps>`
  position: relative;
  background-color: ${({ disabled, backgroundColor }) => (disabled ? '#aaa' : backgroundColor || 'gray')};
  color: black;
  width: 25px;
  height: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ boxShadow }) => boxShadow || '5px 2px 4px rgba(0, 0, 0, 0.75)'};
  border-radius: 50%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const DropdownContainer: React.FC<DropdownProps> = ({ children, disabled, backgroundColor, boxShadow }) => {
  return (
    <Container disabled={disabled} backgroundColor={backgroundColor} boxShadow={boxShadow}>
      {children}
    </Container>
  );
};

export default DropdownContainer;
