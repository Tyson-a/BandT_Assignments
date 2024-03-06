// Card.types.ts
import React from 'react';

export interface MyCardProps extends StyledCardProps {
  src: string;
  text?: string;
  color?: string;
  children?: React.ReactNode;
}

export interface StyledCardProps {
  disabled?: boolean;
  backgroundColor?: string;
  alwaysShowText?: boolean;
}