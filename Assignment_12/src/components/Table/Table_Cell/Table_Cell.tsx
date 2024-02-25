// Table_Cell.tsx
import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { TableCellProps } from './Table_Cell.types';

const StyledTd = styled.td<{ disabled?: boolean }>`
  padding: 8px;

  ${({ disabled }) =>
    disabled &&
    css`
      color: #999;
      cursor: not-allowed;
    `}
`;

const StarIcon = styled(FontAwesomeIcon)`
  color: purple; // Adjust the color of the stars as needed
`;

const TableCell: React.FC<TableCellProps> = ({ children, disabled, stars = 0}) => {
  return (
    <StyledTd disabled={disabled}>
      {children}
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          icon={i < stars ? faStar : ['far', 'star']}
        />
      ))}
    </StyledTd>
  );
};

export default TableCell;