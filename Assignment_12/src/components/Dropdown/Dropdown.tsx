// Dropdown.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import DropdownContainer from './DropdownContainer/DropdownContainer';
import DropdownButton from './DropdownButton/DropdownButton';
import DropdownContent from './DropdownContent/DropdownContent';
import DropdownItem from './DropdownItem/DropdownItem';
import DropdownItemProps  from './Dropdown.types';

const Dropdown: React.FC<DropdownItemProps> = ({ disabled, backgroundColor, boxShadow, initialVisibility }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (initialVisibility !== undefined) {
      setIsVisible(initialVisibility);
    }
  }, [initialVisibility]); // React to changes in initialVisibility

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  return (
    <DropdownContainer disabled={disabled} backgroundColor={backgroundColor} boxShadow={boxShadow}>
      <DropdownButton disabled={disabled} onClick={toggleDropdown} isVisible={isVisible}>
        <FontAwesomeIcon icon={isVisible ? faTimes : faBars} />
      </DropdownButton>
      <DropdownContent isVisible={isVisible}>
        <DropdownItem>About Me</DropdownItem>
        <DropdownItem>Skills</DropdownItem>
        <DropdownItem>Portfolio</DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
