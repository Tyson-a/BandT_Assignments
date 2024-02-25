import React, { CSSProperties } from 'react';


export interface TextProps {
  text: string;
  fontFamily?: string;
  style?: CSSProperties;
  as?: keyof JSX.IntrinsicElements; 
  bold?: boolean;
  color?: string;
  disabled? : boolean;
  backgroundColor?: string;
  children?: React.ReactNode;
}