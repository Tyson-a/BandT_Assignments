import React, { useState } from 'react';
import styled from 'styled-components';
import MyButton from '../Button';
import { MyDropdownComponent } from '../Dropdown';
import { HeroImageProps } from './HeroImage.types';
import { MyRadioButtonComponent } from '../RadioButton';
import { MyLabelComponent } from '../Label';

const HeroImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  color: white;
`;

const NavBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const CardContent = styled.div`
  position: absolute;
  padding: 20px;
  z-index: 2;
  width: 100%;
`;

const BurgerMenu = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(70%);
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin-bottom: 10px;
`;


const RadioButtonsContainer = styled.div`
  position: relative;
`;


const HeroImage: React.FC<HeroImageProps> = ({ disabled, backgroundColor }) => {
  const [selectedPicture, setSelectedPicture] = useState('Banff');

  const handlePictureChange = (selectedOption: string) => {
    setSelectedPicture(selectedOption);
  };

  const pictureOptions = ['Banff', 'Jasper', 'Yoho'];

  return (
    <HeroImageContainer>
      <NavBar style={{ backgroundColor }}>
        <MyLabelComponent htmlFor="tysonName" text="Tyson La" disabled={disabled} />
        <BurgerMenu aria-label="Toggle menu">
          <MyDropdownComponent backgroundColor="transparent" boxShadow="none" disabled={disabled} />
        </BurgerMenu>
      </NavBar>
      <CardContent>
        <ContentWrap>
          <MyLabelComponent htmlFor="greeting" text="Hi, I'm Tyson" disabled={disabled} />
          <MyLabelComponent htmlFor="websites" text="I make websites" disabled={disabled} />
          <RadioButtonsContainer>
            <MyRadioButtonComponent
              options={pictureOptions}
              onChange={handlePictureChange}
              disabled={disabled}
            />
          </RadioButtonsContainer>
          <div>
            <ButtonContainer>
              <MyButton
                onClick={() => console.log("Button clicked")}
                backgroundColor="black"
                boxShadow="0px 7px 2px black, 0px 8px 5px #000"
                disabled={disabled}
              >
                <MyLabelComponent htmlFor="projectsButton" text="Projects" disabled={disabled} />
              </MyButton>

              <MyButton
                onClick={() => console.log("Button clicked")}
                backgroundColor="black"
                boxShadow="0px 7px 2px black, 0px 8px 5px #000"
                disabled={disabled}
              >
                <MyLabelComponent htmlFor="contactButton" text="Contact Me" disabled={disabled} />
              </MyButton>
            </ButtonContainer>
          </div>
        </ContentWrap>
      </CardContent>
      <CardImage src={`src/components/HeroImage/${selectedPicture}.jpg`} alt={selectedPicture} />
    </HeroImageContainer>
  );
};

export default HeroImage;