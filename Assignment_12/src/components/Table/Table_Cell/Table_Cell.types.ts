import React from 'react';

export interface TableCellProps {
    children?: React.ReactNode;
    disabled?: boolean;
    stars?: number;
    starsHTML?: number;
    starsCSS?: number;
  }