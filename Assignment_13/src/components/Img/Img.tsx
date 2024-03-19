import React from 'react';
import styled from 'styled-components';
import ImgProps from './Img.types';


// Styled container to apply background color and grayscale filter
const ImageContainer = styled.div<{ backgroundColor: string; disabled: boolean }>`
  background-color: ${(props) => props.backgroundColor};
  display: inline-block; // Ensures the background size matches the img size
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'none')};
`;

// Optionally, you could create a styled img for more specific styling needs
const StyledImg = styled.img<{ quality: number }>`
  image-rendering: ${(props) => (props.quality >= 75 ? 'auto' : 'pixelated')};
`;

const Img: React.FC<ImgProps> = ({
  src,
  alt = '',
  width,
  height,
  quality = 100,
  backgroundColor = 'transparent',
  disabled = false,
}) => {
  return (
    <ImageContainer backgroundColor={backgroundColor} disabled={disabled}>
      <StyledImg src={src} alt={alt} width={width} height={height} quality={quality} />
    </ImageContainer>
  );
};

export default Img;
