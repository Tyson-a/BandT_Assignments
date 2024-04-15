import React from 'react';


export default interface TextInputProps {
  initialText?: string;
  onTextChange?: (text: string) => void;
  disabled?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
}
