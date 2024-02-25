import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const DropdownContainer = styled.div<DropdownProps>`
  position: relative;
  background-color: ${({ disabled, backgroundColor }) => (disabled ? '#aaa' : backgroundColor || 'gray')};
  color: black;
  width: 25px;
  height: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ boxShadow }) => boxShadow || '5px 2px 4px rgba(0, 0, 0, 0.75)'}; /* Use the boxShadow prop */
  border-radius: 50%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const DropdownButton = styled.button<DropdownProps>`
  background-color: transparent;
  border: none;
  color: ${({ disabled }) => (disabled ? '#888' : 'white')};
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

const DropdownContent = styled.div<DropdownProps>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ disabled, backgroundColor, boxShadow }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  return (
    <DropdownContainer disabled={disabled} backgroundColor={backgroundColor} boxShadow={boxShadow}>
      <DropdownButton disabled={disabled} onClick={toggleDropdown} isVisible={isVisible}>
        <FontAwesomeIcon icon={isVisible ? faTimes : faBars} />
      </DropdownButton>
      <DropdownContent isVisible={isVisible}>
        <DropdownItem>About Me</DropdownItem>
        <DropdownItem>Skills</DropdownItem>
        <DropdownItem>Portfolio</DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
