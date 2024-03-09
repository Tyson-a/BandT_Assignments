import { ReactNode } from 'react';

export interface DropdownButtonProps {
  children: ReactNode; 
  disabled?: boolean; 
  isVisible?: boolean; 
  onClick: () => void; 
  backgroundColor?: string
}