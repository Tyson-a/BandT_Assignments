// TableHeader.tsx
import React from 'react';
import styled from 'styled-components';
import TableHeaderProps from './Table_Header.types';

const StyledThead = styled.thead`
`;

export const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <StyledThead>{children}</StyledThead>;
};

export default TableHeader;
