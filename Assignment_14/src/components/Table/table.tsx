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

const Table: React.FC<TableProps> = ({ disabled, backgroundColor, starsHTML = 0, starsCSS = 0, starsJS = 0, starsAWS = 0, starsRuby = 0, ...rest }) => {
  return (
    <StyledTable disabled={disabled} {...rest} style={{ backgroundColor }} data-testid="table">
      <TableHeader>
        <tr>
          <th>Name</th>
          <th>Skill Level</th>
        </tr>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>HTML</TableCell>
          <TableCell isSkillCell stars={starsHTML} disabled={disabled} /> 
        </TableRow>
        <TableRow>
          <TableCell>CSS</TableCell>
          <TableCell isSkillCell stars={starsCSS} disabled={disabled} /> 
        </TableRow>
        <TableRow>
          <TableCell>JavaScript</TableCell>
          <TableCell isSkillCell stars={starsJS} disabled={disabled} /> 
        </TableRow>
        <TableRow>
          <TableCell>AWS</TableCell>
          <TableCell isSkillCell stars={starsAWS} disabled={disabled} /> 
        </TableRow>
        <TableRow>
          <TableCell>Ruby</TableCell>
          <TableCell isSkillCell stars={starsRuby} disabled={disabled} /> 
        </TableRow>
      </tbody>
      <TableFooter>
  <tr>
    <td colSpan={2}>More to come...</td>
  </tr>
</TableFooter>
    </StyledTable>
  );
};

export default Table;
