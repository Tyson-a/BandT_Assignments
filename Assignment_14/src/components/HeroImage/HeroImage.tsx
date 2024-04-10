import React, { useState } from 'react';
import styled from 'styled-components';
import  { MyButtonComponent } from '../Button';
import  HeroImageProps  from './HeroImage.types';
import { MyRadioButtonComponent } from '../RadioButton';
import { MyLabelComponent } from '../Label';
import { MyNavBarComponent } from '../NavBar';

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const HeroImageContainer = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
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
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
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
  padding: 20px; /* Increase padding to make it bigger */
`;

const HeroImage: React.FC<HeroImageProps> = ({ disabled, backgroundcolor }) => {
  const [selectedPicture, setSelectedPicture] = useState('Banff');

  const handlePictureChange = (selectedOption: string) => {
    setSelectedPicture(selectedOption);
  };

  const pictureOptions = ['Banff', 'Jasper', 'Herbert'];

  return (
    <HeroImageContainer>
      <MyNavBarComponent backgroundcolor={backgroundcolor} disabled={disabled} >
      </MyNavBarComponent>
      <CardImage src={`src/components/HeroImage/${selectedPicture}.jpg`} alt={selectedPicture} />
      <CardContent>
        <ContentWrap>
          <MyLabelComponent htmlFor="greeting" text="Hi, I'm Tyson" disabled={disabled} fontSize='50px' />
          <MyLabelComponent htmlFor="websites" text="I make websites" disabled={disabled}  fontSize='25px'/>
          <ButtonContainer>
            <MyButtonComponent
              onClick={() => console.log("Button clicked")}
              backgroundcolor="black"
              boxShadow="0px 7px 2px black, 0px 8px 5px #000"
              disabled={disabled}
            >
              <MyLabelComponent htmlFor="projectsButton" text="Projects" disabled={disabled} />
            </MyButtonComponent>
            <MyButtonComponent
              onClick={() => console.log("Button clicked")}
              backgroundcolor="black"
              boxShadow="0px 7px 2px black, 0px 8px 5px #000"
              disabled={disabled}
            >
              <MyLabelComponent htmlFor="contactButton" text="Contact Me" disabled={disabled} />
            </MyButtonComponent>
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
