import React, { CSSProperties } from 'react';
import { LabelProps } from './Label.types.ts';

const LabelComponent: React.FC<LabelProps> = ({ htmlFor, text, bold, fontFamily, disabled, backgroundColor, fontSize }) => {
  const labelStyle: CSSProperties = {
    fontWeight: bold ? 'bold' : 'normal',
    fontFamily: fontFamily || '',
    color: disabled ? 'gray' : '',
    backgroundColor: disabled ? 'transparent' : backgroundColor || '',
    fontSize: fontSize || 'inherit', // Set a default value or adjust as needed
  };

  return <label htmlFor={htmlFor} style={labelStyle}>{text}</label>;
};

export default LabelComponent;
