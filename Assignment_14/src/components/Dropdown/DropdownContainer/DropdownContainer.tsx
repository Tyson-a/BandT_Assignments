// DropdownContainer.js
import React from 'react';
import styled from 'styled-components';
import  DropdownContainerProps  from './DropdownContainer.types';

const Container = styled.div<DropdownContainerProps>`
  position: relative;
  background-color: ${({ disabled, backgroundcolor }) => (disabled ? '#aaa' : backgroundcolor || 'gray')};
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

const DropdownContainer: React.FC<DropdownContainerProps> = ({
  children,
  disabled,
  backgroundcolor,
  boxShadow, // Keep boxShadow here
  ...rest // Filter out boxShadow from rest of the props
}) => {
  return (
    <Container data-testid="my-dropdown" disabled={disabled} backgroundcolor={backgroundcolor} {...rest}>
      {children}
    </Container>
  );
};
export default DropdownContainer;
