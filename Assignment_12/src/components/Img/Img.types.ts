import React, { CSSProperties } from 'react';


export interface ImgTypes {
  Width: string;
  Height: string;
  style?: CSSProperties
  children?: React.ReactNode;
  quality?: number
  }