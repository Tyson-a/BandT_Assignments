import React from 'react';


// Define types for props
export default interface AboutMeProps {
  backgroundColor?: string,
  disabled?: boolean, 
  labelText: string;
  aboutText: string;
  starsHTML?: number;
  starsCSS?: number;
}