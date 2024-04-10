import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import TableCellProps from './Table_Cell.types';

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

const TableCell: React.FC<TableCellProps> = ({ children, disabled, stars = 0 }) => {
  // Determine the number of stars to display based on the disabled state
  const displayStars = disabled ? 0 : stars; // For example, this line sets stars to 0 if disabled

  return (
    <StyledTd disabled={disabled}>
      {children}
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          icon={faStar} // Removed conditional logic for 'far' since the original implementation might not work without importing the correct library or adjusting the icon import.
          style={{ opacity: i < displayStars ? 1 : 0.3 }} // Conditional styling for filled vs. unfilled stars
        />
      ))}
    </StyledTd>
  );
};

export default TableCell;
