import React, { useState } from 'react';
import styled from 'styled-components';
import  { MyButtonComponent } from '../Button';
import  HeroImageProps  from './HeroImage.types';
import { MyRadioButtonComponent } from '../RadioButton';
import { MyLabelComponent } from '../Label';
import { Link } from 'react-scroll';


const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const HeroImageContainer = styled.div`
  position: relative;
  width: 100%; // Ensures the container spans the full width
  padding-bottom: 56.25%; // For 16:9 aspect ratio; adjust percentage based on your aspect ratio
  color: white;
`;

const CardContent = styled.div`
  position: absolute;
  top: 50%;
  left: 0; /* Position at the left side */
  transform: translate(0, -50%);
  padding: 40px; /* Increase padding to make it bigger */
  color: white;
  z-index: 2;
`;

const CardImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 0;
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioButtonsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const HeroImage: React.FC<HeroImageProps> = ({ disabled }) => {
  const [selectedPicture, setSelectedPicture] = useState('Banff');

  const handlePictureChange = (selectedOption: string) => {
    setSelectedPicture(selectedOption);
  };

  const pictureOptions = ['Banff', 'Jasper', 'Herbert'];

  return (
    <HeroImageContainer>
      <CardImage src={`/${selectedPicture}.jpg`} alt={selectedPicture} />
      <CardContent>
        <ContentWrap>
          <MyLabelComponent color='white' htmlFor="greeting" text="Hi, I'm Tyson" disabled={disabled} fontSize='50px' />
          <MyLabelComponent color='white' htmlFor="websites" text="I make websites" disabled={disabled} fontSize='25px'/>
          <ButtonContainer>
            <Link to="my-projects" smooth={true} duration={500}>
              <MyButtonComponent backgroundcolor="black" boxShadow="0px 7px 2px black, 0px 8px 5px #000" disabled={disabled}>
                <MyLabelComponent color='white' text="Projects" disabled={disabled} />
              </MyButtonComponent>
            </Link>
            <Link to="contact-me" smooth={true} duration={500}>
              <MyButtonComponent backgroundcolor="black" boxShadow="0px 7px 2px black, 0px 8px 5px #000" disabled={disabled}>
                <MyLabelComponent color='white' text="Contact Me" disabled={disabled} />
              </MyButtonComponent>
            </Link>
          </ButtonContainer>
        </ContentWrap>        
      </CardContent>
      <RadioButtonsContainer>
        <MyRadioButtonComponent
          options={pictureOptions}
          onChange={handlePictureChange}
          disabled={disabled}
          circlesize='30px'
        />
      </RadioButtonsContainer>
    </HeroImageContainer>
  );
};

export default HeroImage;