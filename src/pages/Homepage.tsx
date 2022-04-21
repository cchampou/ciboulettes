import React from 'react';
import { FixedBackground } from '../components/homepage/FixedBackground';

function Homepage() {
  return (
    <>
      <FixedBackground />
      <h1 className="text-4xl">
        Goûter et s’éveiller aux pratiques écologiques qui font du bien
      </h1>
      <p>
        Les Ciboulettes, un éco-lieu d’expérimentation dédié aux pratiques
        écologiques qui font plaisir! Ici petits et grands cuisinent, bricolent,
        méditent, jardinent, partagent… pour prendre soin d’eux, des autres et
        de la planète
      </p>
    </>
  );
}

export default Homepage;
