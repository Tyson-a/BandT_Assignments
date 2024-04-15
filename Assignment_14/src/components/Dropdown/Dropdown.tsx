// Dropdown.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import DropdownContainer from './DropdownContainer/DropdownContainer';
import DropdownButton from './DropdownButton/DropdownButton';
import DropdownContent from './DropdownContent/DropdownContent';
import DropdownItem from './DropdownItem/DropdownItem';
import DropdownProps  from './Dropdown.types';
import { Link } from 'react-scroll';


const Dropdown: React.FC<DropdownProps> = ({ disabled, backgroundColor, boxShadow, initialVisibility }) => {
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
    <DropdownContainer data-testid="my-dropdown" disabled={disabled} backgroundcolor={backgroundColor} boxShadow={boxShadow}>
      <DropdownButton data-testid="Dropdown" disabled={disabled} onClick={toggleDropdown} isVisible={isVisible}>
        <FontAwesomeIcon icon={isVisible ? faTimes : faBars} />
      </DropdownButton>
      {isVisible && (
        <DropdownContent isVisible={isVisible}>
          <DropdownItem>
            <Link to="about-me" smooth={true} duration={500} onClick={toggleDropdown} className="dropdown-item">About Me</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="my-projects" smooth={true} duration={500} onClick={toggleDropdown} className="dropdown-item">My Projects</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="contact-me" smooth={true} duration={500} onClick={toggleDropdown} className="dropdown-item">Contact Me</Link>
          </DropdownItem>
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
