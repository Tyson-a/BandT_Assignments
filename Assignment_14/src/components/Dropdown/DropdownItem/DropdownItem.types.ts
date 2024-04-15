// Card.types.ts
import React from 'react';

export default interface DropdownItemProps {
  backgroundColor?: string;
  boxShadow?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  isVisible?: boolean;
  "data-testid"?: string;
  onClick?: () => void;  // Function type for click events
}