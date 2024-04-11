// Card.types.ts
import React from 'react';

export interface MyCardProps extends StyledCardProps {
  src: string;
  text?: string;
  color?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export interface StyledCardProps {
  disabled?: boolean;
  backgroundcolor?: string;
  alwaysShowText?: boolean;
  ishovered?: boolean;
  staggered?: boolean;
}