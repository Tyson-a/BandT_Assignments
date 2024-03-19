import React from 'react';
import styled from 'styled-components';
import TableFooterProps from './Table_Footer.types';

const StyledTfoot = styled.tfoot`

`;

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <StyledTfoot>{children}</StyledTfoot>;
};

export default TableFooter;