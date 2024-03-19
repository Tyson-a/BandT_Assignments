import React, { useState} from 'react';
import styled from 'styled-components';
import RadioButtonProps from './RadioButton.types';



const StyledRadioButtonWrapper = styled.div<RadioButtonProps>`
  display: flex;
  margin-bottom: 10px;
  background-color: ${(props) => props.backgroundColor || 'tranlucent'};
  padding: 10px;
  border-radius: 5px;
`;

const StyledLabel = styled.label`
  margin-right: 10px;
`;

const StyledInput = styled.input<{ circleSize: string }>`
  width: ${(props) => props.circleSize};
  height: ${(props) => props.circleSize};
`;

const RadioButton: React.FC<RadioButtonProps> = ({ options = [], onChange, disabled = false, backgroundColor = 'tranlucent', circleSize = '20px' }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <StyledRadioButtonWrapper backgroundColor={backgroundColor}>
      {options?.map((option, index) => (
        <StyledLabel key={index}>
          <StyledInput
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
            disabled={disabled}
            circleSize={circleSize}
          />
        </StyledLabel>
      ))}
    </StyledRadioButtonWrapper>
  );
};

export default RadioButton;
