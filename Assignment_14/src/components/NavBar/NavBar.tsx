import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBarProps from './NavBar.types';
import { MyDropdownComponent } from '../Dropdown';
import { MyLabelComponent } from '../Label';

const Container = styled.div<{ backgroundcolor: string; disabled?: boolean; visible: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.backgroundcolor || 'black'};
  padding: 10px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  transition: top 0.3s;
  z-index: 100;
  top: ${(props) => (props.visible ? '0' : '-100px')};

  @media (max-width: 768px) {
    top: 0 !important; // Always visible and fixed at the top
  }
`;

const HamburgerMenu = styled.div`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 1.5em;

  @media (max-width: 768px) {
    font-size: 2.5em;  // Increase font size for better visibility on smaller screens
    padding: 20px;  // Increase padding for a larger touch area
  }
`;

const NavBarComponent: React.FC<NavBarProps> = ({ backgroundcolor = 'black', disabled = false }) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {  // Only enable scroll visibility toggle on non-phone screens
        const currentScrollY = window.scrollY;
        setVisible(currentScrollY > lastScrollY || currentScrollY === 0);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);  // Ensure functionality on screen resize

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Container backgroundcolor={backgroundcolor} disabled={disabled} visible={visible}>
      <MyLabelComponent color='white' htmlFor="navbarLabel" text="Tyson La" disabled={disabled} fontSize='55px'/>
      <HamburgerMenu aria-label="Toggle menu">
        <MyDropdownComponent backgroundColor="transparent" boxShadow="none" disabled={disabled} size="large" />
      </HamburgerMenu>
    </Container>
  );
};

export default NavBarComponent;
