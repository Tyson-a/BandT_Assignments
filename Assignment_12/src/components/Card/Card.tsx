// Card.tsx
import React from 'react';
import styled from 'styled-components';
import { MyCardProps, StyledCardProps } from './Card.types';

const StyledCard = styled.div<StyledCardProps>`
  position: relative;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.05)')};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')}; 
  }

  .cardText {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${({ disabled, backgroundColor }) =>
      disabled ? 'rgba(0, 0, 0, 0.5)' : backgroundColor || 'rgba(0, 0, 0, 0.85)'};
    color: ${({ color }) => color || '#fff'}; // Use the color prop here
    padding: 15px;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    overflow: auto;
  }

  &:hover .cardText {
    opacity: 1;
  }

  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? 'rgba(169, 169, 169, 0.7)' : backgroundColor || 'transparent'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Card: React.FC<MyCardProps> = ({ imageSrc, text, disabled, backgroundColor, color }) => {
  return (
    <StyledCard disabled={disabled} backgroundColor={backgroundColor} color={color}>
      <img src={imageSrc} alt="Card Image" />
      {!disabled && <div className="cardText">{text}</div>}
    </StyledCard>
  );
};

export default Card;

