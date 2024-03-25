import React from 'react';

export default interface RadioButtonProps {
    options?: string[];
    onChange?: (selectedOption: string) => void;
    disabled?: boolean;
    backgroundcolor?: string;
    children?: React.ReactNode;
    circlesize?: string;
  }

