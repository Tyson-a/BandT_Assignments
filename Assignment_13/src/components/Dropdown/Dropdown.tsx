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
  const [isVisible, setIsVisible] = useState(initialVisibility || false);


  useEffect(() => {
    if (initialVisibility !== undefined) {
      setIsVisible(initialVisibility);
    }
  }, [initialVisibility]); // React to changes in initialVisibility

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  return (
    <DropdownContainer disabled={disabled} backgroundcolor={backgroundColor} boxShadow={boxShadow}>
      <DropdownButton data-testid="Dropdown" disabled={disabled} onClick={toggleDropdown} isVisible={isVisible}>
        <FontAwesomeIcon icon={isVisible ? faTimes : faBars} />
      </DropdownButton>
      {isVisible && ( // Render dropdown content only if isVisible is true
        <DropdownContent isVisible={isVisible}>
          <DropdownItem data-testid="DropdownItem">About Me</DropdownItem>
          <DropdownItem >Skills</DropdownItem>
          <DropdownItem >Portfolio</DropdownItem>
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
