import { FixedBackground } from './components/FixedBackground';

function Homepage() {
  return (
    <>
      <FixedBackground />
      <div className="flex md:flex-row flex-col mt-10 items-center">
        <div className="flex-1 mx-10 text-center">
          <h1 className="text-4xl font-bold my-20 text-left">
            Ateliers pour petits et grands
            <br />
            Écologie
            <br />
            Plaisir
            <br />
            Gourmandise
            <br />
            Partage
          </h1>
        </div>
        <div className="flex-1 mx-10">
          <p className="text-justify">
            Les Ciboulettes, un éco-lieu d’expérimentation dédié aux pratiques
            écologiques qui font plaisir! Ici petits et grands cuisinent,
            bricolent, méditent, jardinent, partagent… pour prendre soin d’eux,
            des autres et de la planète
          </p>
        </div>
      </div>
    </>
  );
}

export default Homepage;
