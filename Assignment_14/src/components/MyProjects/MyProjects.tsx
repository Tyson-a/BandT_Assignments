import React from 'react';
import styled from 'styled-components';
import Card from '../Card/Card'; // Adjust the import path as necessary
import { MyCardProps } from '../Card/Card.types';
import { MyLabelComponent } from '../Label';

const MyProjectsContainer = styled.div`
  background-color: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  font-family: 'Roboto', sans-serif;
  color: #333;
  width: 100%; 
`;


const ProjectsGrid = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap; // Prevents items from wrapping to the next line
gap: 16px;
justify-content: center;

`;

const projects: MyCardProps[] = [
  { src: 'MovieDBMS.jpeg', text: 'Project 1', color: 'blue' },
  { src: 'Rails.jpeg', text: 'Project 2', color: 'green' },
  { src: 'Java.jpeg', text: 'Project 2', color: 'green' },
  { src: 'PHP.jpeg', text: 'Project 2', color: 'green' },
  { src: 'React.jpeg', text: 'Project 2', color: 'green' },
  
];

const SectionTitle = styled(MyLabelComponent)`
  margin-left: 10px; // Align to the left edge of its container
  padding-left: 0px; // No padding on the left side
  font-family: 'Roboto', sans-serif;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 35px;
  padding-bottom:25px;
  
`;

const MyProjects: React.FC = () => {
  return (
    <MyProjectsContainer>
       <TitleContainer>
        <SectionTitle  fontSize='50px' text="My Projects" />
      </TitleContainer>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <Card
            key={index}
            staggered={index % 2 !== 0} // this will be true for odd-numbered cards (1, 3, 5, ...)
            {...project}
          />
        ))}
      </ProjectsGrid>
    </MyProjectsContainer>
  );
};

export default MyProjects;
