import React from 'react';

export interface RadioButtonProps {
    options?: string[];
    onChange: (selectedOption: string) => void;
    disabled?: boolean;
    backgroundColor?: string;
    children?: React.ReactNode;
    circleSize: string;
  }