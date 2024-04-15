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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: left;
  }
`;

const FooterIcons = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 12px; // Spacing between icons, adjust as needed
  }

  @media (max-width: 768px) {
    margin-top: 1rem; // Adds space between the text and icons
    gap: 16px;
    justify-content: space-around;
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
        <a href="mailto:bob.rice@example.com" target="_blank" rel="noopener noreferrer">
          <Img src="email.png" alt="Email" />
        </a>
        <a href="https://www.instagram.com/Tyson_la03" target="_blank" rel="noopener noreferrer">
          <Img src="instagram.png" alt="Instagram" />
        </a>
        <a href="https://github.com/Tyson-a" target="_blank" rel="noopener noreferrer">
          <Img src="github.png" alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/tyson-la-33b64b1b8/" target="_blank" rel="noopener noreferrer">
          <Img src="linkedin.png" alt="LinkedIn" />
        </a>
      </FooterIcons>
    </FooterContainer>
  );
};

export default MyFooter;