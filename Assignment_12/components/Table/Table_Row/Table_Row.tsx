import React from 'react';
import styled from 'styled-components';
import TableRowProps from './Table_Row.types';

const StyledTr = styled.tr`
  border: 1px solid grey;
`;

// Optional: Define a styled component for a default or empty cell
const DefaultTd = styled.td`
  color: #999;
  text-align: center;
  border: 1px solid grey;
`;

export const TableRow: React.FC<TableRowProps> = ({ children }) => {
  // Check if children are provided, and render a default cell if not
  const content = React.Children.count(children) > 0 ? children : <DefaultTd>No content</DefaultTd>;
  
  return <StyledTr>{content}</StyledTr>;
};

export default TableRow;
