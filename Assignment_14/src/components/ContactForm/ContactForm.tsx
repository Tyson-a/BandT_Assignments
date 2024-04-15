import React, { useState } from 'react';
import styled from 'styled-components';

// Assuming these imported components will accept the same props as regular inputs.
import { MyBudgetInputComponent } from './BudgetInput/index.ts';
import { MyEmailInputComponent } from './EmailInput/index.ts';
import { MyTextInputComponent } from './TextInput/index.ts';
import { MyNameInputComponent } from './NameInput/index.ts';
import  { MyButtonComponent } from '../Button'
import MyLabelComponent from '../Label/Label.tsx'; // Assuming Text is for paragraphs

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #FFFFFF;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

const FormSection = styled.div`
  flex: 1;
  padding: 2rem;
`;

// TextSection uses a column flex layout to align items to the start
const TextSection = styled.div`
  padding: 20px 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  text-align: left;
  width: 500px; // Set a fixed width
  height: 300px; // Set a fixed height, or remove if you want it to expand vertically
  
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
`;


const inputStyle = {
  color: 'black', // Ensure text is black
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#ffffff', // Assuming white background
  color: '#000000',           // Assuming black text
  padding: '10px 15px',       // Example padding
  border: '1px solid #000000', // Example border
  borderRadius: '5px',        // Example border radius
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)', // Example box shadow
  cursor: 'pointer',          // Cursor to pointer
  fontWeight: 'normal',       // Normal font weight
  fontSize: '1rem',           // Example font size
  outline: 'none',            // No outline
  transition: 'background-color 0.3s, box-shadow 0.3s', // Transition for smooth effect
  userSelect: 'none',         // Disables text selection
};
const ButtonWrapper = styled.div`
  text-align: left; // Aligns the button to the left
`;
// Contact form component
const ContactForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [budget, setBudget] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  const handleSubmit = () => {
    console.log('Form Submitted:', { name, email, budget, message });
  };

  return (
    <Container id="contact-me">
      <ContentWrapper>
      <TextSection> 
      <MyLabelComponent
          text="Get in touch" 
          color='black'
          fontSize='45px'
          />

          <MyLabelComponent 
            text="Let's get in contact. Leave your information and I will get back to you as soon as I can." 
            color='black'
            fontSize='45px'
            
          />
        </TextSection>
        <FormSection>
          <StyledForm>
            <MyNameInputComponent style={{...inputStyle, width: '50%' }} initialName={name} onNameChange={setName} placeholder="Name" />
            <MyEmailInputComponent style={{...inputStyle, width: '50%' }} initialEmail={email} onEmailChange={setEmail} placeholder="Email Address" />
            <MyBudgetInputComponent style={{...inputStyle, width: '50%' }} initialBudget={budget} onBudgetChange={setBudget} placeholder="Budget (optional)" />
            <MyTextInputComponent style={{...inputStyle, height: '150px' }} initialText={message} onTextChange={setMessage} placeholder="Describe the project..." />
            <ButtonWrapper>
            <MyButtonComponent 
            onClick={handleSubmit}
            style={buttonStyle}
             // Apply the style object here
          >
            Send
          </MyButtonComponent >
          </ButtonWrapper>
          </StyledForm>
        </FormSection>
      </ContentWrapper>
    </Container>
  );
};

export default ContactForm;