import React, { CSSProperties } from 'react';
import { LabelProps } from './Label.types.ts';

const LabelComponent: React.FC<LabelProps> = ({ htmlFor, text, bold, fontFamily, disabled, backgroundColor }) => {
  const labelStyle: CSSProperties = {
    fontWeight: bold ? 'bold' : 'normal',
    fontFamily: fontFamily || '', // you can set a default value or remove it based on your requirements
    color: disabled ? 'gray' : '', // set color when disabled if needed
    backgroundColor: disabled ? 'transparent' : backgroundColor || '', // set background color when disabled or use the provided value
  };

  return <label htmlFor={htmlFor} style={labelStyle}>{text}</label>;
};

export default LabelComponent;