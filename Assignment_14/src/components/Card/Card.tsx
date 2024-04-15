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
  &:nth-child(odd) {
    margin-bottom: 325px; // This will push the odd cards down
  }
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
  background-color: ${({ backgroundcolor, disabled }) =>
    disabled ? 'rgba(169, 169, 169, 0.7)' : backgroundcolor || 'transparent'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  transform: ${({ staggered }) => staggered ? 'translateY(100%)' : 'none'};

  &:hover {
    // Include the staggered transform if staggered is true, and apply scale if not disabled
    transform: ${({ staggered, disabled }) => 
      `${staggered ? 'translateY(100%)' : ''} ${!disabled ? 'scale(1.05)' : ''}`};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    border-radius: 10px;
    filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')}; 
  }

  .cardText {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${({ backgroundcolor }) => backgroundcolor || 'rgba(0, 0, 0, 0.85)'};
    color: ${({ color }) => color || '#fff'};
    padding: 15px;
    text-align: center;
    opacity: ${({ alwaysShowText }) => (alwaysShowText ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
    overflow: auto;
  }

  &:hover .cardText {
    opacity: 1;
  }
  
`;

const Card: React.FC<MyCardProps & StyledCardProps> = ({ src, text, disabled, backgroundcolor, color, alwaysShowText, ...props }) => {
  return (
    <StyledCard {...props}
      disabled={disabled} 
      backgroundcolor={backgroundcolor} 
      color={color} 
      alwaysShowText={alwaysShowText}
    >
      <img src={src} alt="Card Image" />
      <div className="cardText">{text}</div>
    </StyledCard>
  );
};

export default Card;
