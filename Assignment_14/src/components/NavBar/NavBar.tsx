import React from 'react';
import styled from 'styled-components';
import NavBarProps from './NavBar.types';
import { MyDropdownComponent } from '../Dropdown';
import { MyLabelComponent } from '../Label';

const Container = styled.div<{ backgroundcolor: string; disabled?: boolean }>`
  display: flex;
  justify-content: space-between; /* Updated to space between */
  align-items: center;
  background-color: ${(props) => props.backgroundcolor || 'black'};
  padding: 10px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  height: 60px;
  position: relative;
  z-index: 100;
`;

const HamburgerMenu = styled.div`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;

const NavBarComponent: React.FC<NavBarProps> = ({ backgroundcolor = 'black', disabled = false }) => {
  return (
    <Container backgroundcolor={backgroundcolor} disabled={disabled}>
      <MyLabelComponent htmlFor="navbarLabel" text="Tyson La" disabled={disabled} fontSize='55px'/>
      <HamburgerMenu aria-label="Toggle menu">
        <MyDropdownComponent backgroundColor="transparent" boxShadow="none" disabled={disabled} />
      </HamburgerMenu>
    </Container>
  );
};

export default NavBarComponent;
