import { ReactNode } from 'react';

export default interface DropdownButtonProps {
  children: ReactNode; 
  disabled?: boolean; 
  isVisible?: boolean; 
  onClick: () => void; 
  backgroundColor?: string
}