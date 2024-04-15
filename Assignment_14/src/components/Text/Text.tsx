import React from 'react';
import styled from 'styled-components';
import TextProps from './Text.types';

// Here we just define the styles that are not supposed to be overridden by inline style
const StyledText = styled.span<Omit<TextProps, 'style'>>`
  font-family: ${(props) => props.fontFamily || 'inherit'};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  color: ${(props) => (props.disabled ? 'gray' : props.color || 'inherit')};
  background-color: ${(props) => (props.disabled ? 'transparent' : props.backgroundColor || 'transparent')};
  font-size: ${(props) => props.fontSize || 'inherit'};
  // Note: Do not apply color and background-color here if you want them to be overridden by inline style
`;

// Your Text component passes the style prop to the StyledText
const TextComponent: React.FC<TextProps> = ({ text, style, ...props }) => {
  return <StyledText style={style} {...props}>{text}</StyledText>;
};

export default TextComponent;
