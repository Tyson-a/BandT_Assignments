// Card.types.ts
import React from 'react';

export default interface DropdownItemProps {
  backgroundColor?: string;
  boxShadow?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  isVisible?: boolean;
  initialVisibility?: boolean;
}