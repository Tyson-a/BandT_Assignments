// DropdownContent.js
import React from 'react';
import styled from 'styled-components';
import  DropdownContentProps from './DropdownContent.types';

const Content = styled.div<DropdownContentProps>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: ${({ isPositionedAbsolutely }) => (isPositionedAbsolutely ? 'absolute' : 'static')};
  top: ${({ isPositionedAbsolutely }) => (isPositionedAbsolutely ? 'calc(100% + 5px)' : 'unset')};
  right: ${({ isPositionedAbsolutely }) => (isPositionedAbsolutely ? '0' : 'unset')};
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DropdownContent: React.FC<DropdownContentProps> = ({
  backgroundColor,
  children,
  isVisible,
  isPositionedAbsolutely = true, // Set default to true here
}) => {
  return (
    <Content
      backgroundColor={backgroundColor}
      isVisible={isVisible}
      isPositionedAbsolutely={isPositionedAbsolutely}
    >
      {children}
    </Content>
  );
};

export default DropdownContent;
