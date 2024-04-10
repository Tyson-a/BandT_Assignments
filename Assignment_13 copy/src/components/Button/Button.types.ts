// Button.types.ts
import React from 'react';

// Assuming Button.types.ts looks something like this
export  interface MyButtonProps {
  children?: React.ReactNode; // Making children optional if it was not already
  onClick?: () => void;
  disabled?: boolean;
  // No need for backgroundColor and boxShadow here if they are passed via styleProps
}

export interface StyleProps {
  backgroundcolor?: string;
  boxShadow?: string;
}