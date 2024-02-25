import React, { CSSProperties } from 'react';


export interface LabelProps {
  htmlFor: string;
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