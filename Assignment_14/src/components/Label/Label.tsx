import React, { CSSProperties } from 'react';
import LabelProps from './Label.types';

const LabelComponent: React.FC<LabelProps> = ({
  htmlFor,
  text,
  bold = false,
  fontFamily = 'Arial', // default font if not provided
  disabled = false,
  backgroundColor = 'transparent',
  fontSize = 'inherit', // default size if not provided
  color = 'black' // default text color if not provided
}) => {
  const labelStyle: CSSProperties = {
    fontWeight: bold ? 'bold' : 'normal',
    fontFamily,
    color: disabled ? 'gray' : color, // ensure color is controlled by prop
    backgroundColor: disabled ? 'transparent' : backgroundColor,
    fontSize
  };

  return <label htmlFor={htmlFor} style={labelStyle}>{text}</label>;
};

export default LabelComponent;
