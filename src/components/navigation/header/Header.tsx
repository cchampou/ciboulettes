import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo-rond.jpg';
import Link from './link/Link';

function Header() {
  return (
    <div className="container mx-auto py-4 flex flex-row justify-center content-center">
      <Link to="/" label="Team-Buildings et Séminaires" />
      <Link to="/" label="Formations" />
      <Link to="/" label="L'association" />
      <img src={logo} alt="Logo Les Ciboulettes rond" className="rounded-full h-24" />
      <Link to="/" label="Bilan de compétences" />
      <Link to="/" label="Le Tiers-Lieu" />
      <Link to="/" label="Contact" />
    </div>
  );
}

export default Header;
