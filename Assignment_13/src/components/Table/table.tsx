// Table.tsx
import React from 'react';
import TableHeader from './Table_Header/Table_Header.tsx';
import TableRow from './Table_Row/Table_Row.tsx';
import TableCell from './Table_Cell/Table_Cell.tsx';
import TableFooter from './Table_Footer/Table_Footer.tsx';
import TableProps from './Table.types.ts'
import styled, { css } from 'styled-components';

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  th, td {
    padding: 8px;
    margin: 0;
    border: 1px solid #ccc;
    text-align: left; 
  }

  tr, thead, tbody, tfoot {
    margin: 0;
  }

  thead th {
    background-color: #cec7c7; 
    color: #333; 
  }

  border-spacing: 0;
`;

const Table: React.FC<TableProps> = ({ disabled, backgroundColor,starsHTML = 0, starsCSS = 0 }) => {
  return (
    <StyledTable disabled={disabled} backgroundColor={backgroundColor}>
      <TableHeader>
        <th>Name</th>
        <th>Skill Level</th>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>HTML</TableCell>
          <TableCell stars={starsHTML} disabled={disabled} /> 
        </TableRow>
        <TableRow>
          <TableCell>CSS</TableCell>
          <TableCell stars={starsCSS} disabled={disabled} /> 
        </TableRow>
      </tbody>
      <TableFooter>Table Footer</TableFooter>
    </StyledTable>
  );
};

export default Table;