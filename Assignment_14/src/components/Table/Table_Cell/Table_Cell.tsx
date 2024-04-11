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

// Modify the TableCellProps type to include isSkillCell if not already present
interface EnhancedTableCellProps extends TableCellProps {
  isSkillCell?: boolean;
}

const TableCell: React.FC<EnhancedTableCellProps> = ({
  children,
  disabled,
  stars = 0,
  isSkillCell = false, // This prop determines if the cell is for skills
}) => {
  // Only calculate displayStars if it's a skill cell
  const displayStars = isSkillCell && !disabled ? stars : 0;

  return (
    <StyledTd disabled={disabled}>
      {children}
      {isSkillCell && // Only display stars if it's a skill cell
        Array.from({ length: 5 }, (_, i) => (
          <StarIcon
            key={i}
            icon={faStar}
            style={{ opacity: i < displayStars ? 1 : 0.3 }} // Full opacity for 'filled' stars, reduced for 'empty' stars
          />
        ))}
    </StyledTd>
  );
};

export default TableCell;
