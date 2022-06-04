import React from 'react';
import logo from '../../../assets/logo-rond.jpg';
import Link from './link/Link';
import {
  DesktopLinks,
  HeaderBurgerWrapper,
  HeaderLogoContainer,
  HeaderMainContainer,
} from './styles';

function Header() {
  return (
    <HeaderMainContainer>
      <DesktopLinks>
        <Link to="/teambuilding" label="Team-Buildings et Séminaires" />
        <Link to="/" label="Formations" />
        <Link to="/" label="L'association" />
      </DesktopLinks>
      <HeaderLogoContainer to="/">
        <img src={logo} alt="Logo Les Ciboulettes rond" />
      </HeaderLogoContainer>
      <HeaderBurgerWrapper>Menu</HeaderBurgerWrapper>
      <DesktopLinks style={{ justifyContent: 'flex-start' }}>
        <Link to="/" label="Bilan de compétences" />
        <Link to="/" label="Le Tiers-Lieu" />
        <Link to="/" label="Contact" />
      </DesktopLinks>
    </HeaderMainContainer>
  );
}

export default Header;
