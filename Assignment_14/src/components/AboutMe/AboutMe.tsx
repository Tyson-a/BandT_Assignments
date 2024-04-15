import React from 'react';
import styled from 'styled-components';
import Table from '../Table/table.tsx'; // Make sure the path is correct
import Text from '../Text/Text.tsx'; // Assuming Text is for paragraphs
import Label from '../Label/Label.tsx'; // Assuming Label is for headings
import AboutMeProps from './AboutMe.types.ts'; // Make sure the path is correct

const AboutMeContainer = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: flex-start;
  padding: 24px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  font-family: 'Roboto', sans-serif;
  color: #333;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 40px;

  @media (max-width: 768px) {
    order: -1; // This will pull the label to the top in mobile view
    width: 100%; // Full width for mobile view
    text-align: center; // Center text for mobile view
  }
`;

const RightColumn = styled.div`
  flex: 2; 
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    order: -1; // This ensures the label comes above the text and table on mobile view.
  }
`;

/* Label (heading) styles */
const StyledLabel = styled(Label)`
  font-size: ${props => props.fontSize || '28px'};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: #000;
  margin-bottom: 16px; // Adjust if needed
  text-align: left; // Aligns text to the left within its column
`;


/* Text (paragraph) styles */
const StyledText = styled(Text)`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 24px; // Space before the skills table
  
  text-align: left; // Aligns text to the left within its column
`;

/* Table component's styles */
const StyledTable = styled(Table)`
  width: 100%; // Takes the full width of its parent column
  /* Other styles you need to apply to your table */
`;

const AboutMe: React.FC<AboutMeProps> = ({ labelText, aboutText, }) => {
  return (
    
    <AboutMeContainer id="about-me">
      <LeftColumn>
        <StyledLabel  fontSize="45px" text={labelText} />
      </LeftColumn>
      <RightColumn>
        <StyledText text={aboutText} />
        <StyledTable starsHTML={5} starsCSS={4} starsJS={3} starsAWS={4} starsRuby={3}   />
      </RightColumn>
    </AboutMeContainer>
  );
};

export default AboutMe;