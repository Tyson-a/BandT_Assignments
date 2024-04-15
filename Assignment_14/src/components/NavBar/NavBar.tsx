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
  position: fixed; /* Make nav bar fixed */
  top: 0;
  width: 100%;
  transition: top 0.3s; /* Smooth transition for moving nav bar */
  z-index: 100;
  top: ${(props) => (props.visible ? '0' : '-100px')}; /* Hide or show based on visibility */
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
`;

const NavBarComponent: React.FC<NavBarProps> = ({ backgroundcolor = 'black', disabled = false }) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY > lastScrollY || currentScrollY === 0); // Show on scroll down or at the top of the page
      setLastScrollY(currentScrollY); // Update the last scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Container backgroundcolor={backgroundcolor} disabled={disabled} visible={visible}>
      <MyLabelComponent color='white' htmlFor="navbarLabel" text="Tyson La" disabled={disabled} fontSize='55px'/>
      <HamburgerMenu aria-label="Toggle menu">
        <MyDropdownComponent backgroundColor="transparent" boxShadow="none" disabled={disabled} />
      </HamburgerMenu>
    </Container>
  );
};

export default NavBarComponent;
