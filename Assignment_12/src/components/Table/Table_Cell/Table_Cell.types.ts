import React from 'react';

export default interface TableCellProps {
    children?: React.ReactNode;
    disabled?: boolean;
    stars?: number;
    starsHTML?: number;
    starsCSS?: number;
    backgroundColor?: string;
  }