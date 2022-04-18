import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo-rond.jpg';

function Header() {
  return (
    <div className="container mx-auto py-4 flex flex-row justify-center content-center">
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/">Entreprises et collectivités</NavLink>
      <NavLink to="/">Particuliers</NavLink>
      <img src={logo} alt="Logo Les Ciboulettes rond" className="rounded-full h-24" />
      <NavLink to="/">L&apos;association</NavLink>
      <NavLink to="/">Qui sommes-nous ?</NavLink>
      <NavLink to="/">Contact</NavLink>
    </div>
  );
}

export default Header;
