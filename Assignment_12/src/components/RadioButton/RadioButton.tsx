import React, { useState } from 'react';
import { RadioButtonProps } from './RadioButton.types';

const RadioButton: React.FC<RadioButtonProps> = ({ options = [], onChange, disabled = false, backgroundColor = 'tranlucent', circleSize = '20px' }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <div style={{ display: 'flex', marginBottom: '10px', backgroundColor: backgroundColor, padding: '10px', borderRadius: '5px' }}>
      {options?.map((option, index) => (
        <label key={index} style={{ marginRight: '10px' }}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
            disabled={disabled}
            style={{ width: circleSize, height: circleSize }}
          />
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
