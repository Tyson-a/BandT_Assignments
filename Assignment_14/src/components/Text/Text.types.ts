import React, { CSSProperties } from 'react';



export default interface TextProps {
  text?: string;
  fontFamily?: string;
  bold?: boolean;
  color?: string;
  disabled?: boolean;
  backgroundColor?: string;
  fontSize?: string;
  style?: CSSProperties;
}