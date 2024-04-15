import React from 'react';
import styled from 'styled-components';
import { MyLabelComponent } from '../Label';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterIcons = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 12px; // Spacing between icons, adjust as needed
  }
`;

const Img = styled.img`
  width: 24px; // Adjust width as needed
  height: auto; // Adjust height as needed
`;

const MyFooter: React.FC = () => {
  return (
    <FooterContainer>
      <MyLabelComponent color='white' fontSize='45px' text="Tyson La"></MyLabelComponent> 
      <FooterIcons>
        <Img src="email.png" alt="Email" />
        <Img src="instagram.png" alt="Instgram" />
        <Img src="github.png" alt="Github" />
        <Img src="linkedin.png" alt="LinkedIn" />
      </FooterIcons>
    </FooterContainer>
  );
};

export default MyFooter;
