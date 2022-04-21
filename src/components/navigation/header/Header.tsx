import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo-rond.jpg';

function Header() {
  return (
    <div className="container mx-auto py-4 flex flex-row justify-center content-center">
      <NavLink to="/">Team-Buildings et Séminaires</NavLink>
      <NavLink to="/">Formations</NavLink>
      <NavLink to="/">L&apos;association</NavLink>
      <img src={logo} alt="Logo Les Ciboulettes rond" className="rounded-full h-24" />
      <NavLink to="/">Bilan de compétences</NavLink>
      <NavLink to="/">Le Tiers-Lieu</NavLink>
      <NavLink to="/">Contact</NavLink>
    </div>
  );
}

export default Header;
