// Button.types.ts
import React from 'react';

// Assuming Button.types.ts looks something like this
export default interface MyButtonProps {
  children?: React.ReactNode; // Making children optional if it was not already
  onClick?: () => void;
  disabled?: boolean;
  

}

export default interface StyleProps {
  backgroundcolor?: string;
  boxShadow?: string;
  color?: string;
  style?: React.CSSProperties;
}