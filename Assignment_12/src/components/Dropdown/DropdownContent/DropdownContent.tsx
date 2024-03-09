// DropdownContent.js
import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './DropdownContent.types';

const Content = styled.div<DropdownProps>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'}; /* Here, backgroundColor prop is used */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DropdownContent: React.FC<DropdownProps> = ({ backgroundColor, children, isVisible }) => {
  return <Content backgroundColor={backgroundColor} isVisible={isVisible}>{children}</Content>; {/* Pass backgroundColor prop */}
};

export default DropdownContent;
