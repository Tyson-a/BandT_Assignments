import React from 'react';
import styled from 'styled-components';
import  TextProps  from './Text.types.ts';

const StyledText = styled.span<TextProps>`
  font-family: ${(props) => props.fontFamily || 'inherit'};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  color: ${(props) => (props.disabled ? 'gray' : props.color || (props.style && props.style.color) || 'inherit')};
  background-color: ${(props) => (props.disabled ? 'transparent' : props.backgroundColor || (props.style && props.style.backgroundColor) || 'transparent')};
  font-size: ${(props) => props.fontSize || 'inherit'};
`;

const TextComponent: React.FC<TextProps> = ({ text, ...props }) => {
  return <StyledText {...props}>{text}</StyledText>;
};

export default TextComponent;
