import React, { useState } from 'react';
import styled from 'styled-components';
import RadioButtonProps from './RadioButton.types';

interface StyledInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  circlesize: string;
}

const StyledRadioButtonWrapper = styled.div<RadioButtonProps>`
  display: flex;
  margin-bottom: 10px;
  background-color: ${(props) => props.backgroundcolor || 'transparent'};
  padding: 10px;
  border-radius: 5px;
`;

const StyledLabel = styled.label`
  margin-right: 10px;
`;

const StyledInput = styled.input.attrs<StyledInputProps>(props => ({
  'aria-label': props['aria-label'], // Ensure accessibility by using aria-label
}))<StyledInputProps>`
  width: ${(props) => props.circlesize};
  height: ${(props) => props.circlesize};
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  options = [],
  onChange,
  disabled = false,
  backgroundcolor = 'transparent',
  circlesize = '20px'
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const value = event.target.value;
    setSelectedOption(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <StyledRadioButtonWrapper backgroundcolor={backgroundcolor}>
      {options.map((option, index) => (
        <StyledLabel key={index}>
          <StyledInput
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
            disabled={disabled}
            circlesize={circlesize}
            aria-label={option} // Helpful for screen readers
          />
          {/* Removed the text label */}
        </StyledLabel>
      ))}
    </StyledRadioButtonWrapper>
  );
};

export default RadioButton;
