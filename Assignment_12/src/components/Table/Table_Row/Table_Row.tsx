import React from 'react';
import styled from 'styled-components';
import TableRowProps from './Table_Row.types';

const StyledTr = styled.tr`
 border: 1px solid grey;
`;

export const TableRow: React.FC<TableRowProps> = ({ children}) => {
  return <StyledTr>{children}</StyledTr>;
};

export default TableRow;
