// Button.types.ts
import React from 'react';

export default interface MyButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  backgroundColor?: string;
  boxShadow?: string;
}