// DropdownItem.js
import React from 'react';
import styled from 'styled-components';
import DropdownItemProps from './DropdownItem.types';

const Item = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const DropdownItem: React.FC<DropdownItemProps> = ({ children }) => {
  return <Item data-testid="DropdownItem">{children}</Item>;
};

export default DropdownItem;
