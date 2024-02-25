// Card.types.ts
import React from 'react';

export interface MyCardProps {
  imageSrc: string;
  text: string;
  color: string
  children: React.ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
}

export interface StyledCardProps {
  disabled?: boolean;
  backgroundColor?: string;
}
