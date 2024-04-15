import React from 'react';


// Define types for props
export default interface TableProps {
  disabled?: boolean;
  children?: React.ReactNode;
  backgroundColor?: string;
  stars?: number;
  starsHTML?: number;
  starsCSS?: number;
  starsJS?: number;
  starsAWS?: number;
  starsRuby?: number;
}