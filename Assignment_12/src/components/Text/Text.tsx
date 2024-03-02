import React, { CSSProperties } from 'react';
import { TextProps } from './Text.types.ts';

const TextComponent: React.FC<TextProps> = ({ text, fontFamily = '', style = {}, bold = false, color, disabled = false, backgroundColor,fontSize, ...rest }) => {
  const textStyle: CSSProperties = {
    fontFamily: fontFamily,
    fontWeight: bold ? 'bold' : 'normal',
    color: disabled ? 'gray' : color || style.color,
    backgroundColor: disabled ? 'transparent' : backgroundColor || style.backgroundColor, // Set to transparent by default
    ...style,
    fontSize: fontSize || 'inherit', // Set a default value or adjust as needed
  };

  return <span style={textStyle} {...rest}>{text}</span>;
};

export default TextComponent;