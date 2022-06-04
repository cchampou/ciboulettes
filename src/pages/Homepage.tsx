import facade from '../assets/images/facade.png';
import { FixedBackground } from '../components/homepage/FixedBackground';

function Homepage() {
  return (
    <>
      <FixedBackground />
      <div className="flex md:flex-row flex-col mt-10 items-center">
        <div className="flex-1 mx-10 text-center">
          <img src={facade} alt="Les locaux des Ciboulettes" />
        </div>
        <div className="flex-1 mx-10">
          <h1 className="text-4xl font-bold my-20">
            Goûter et s’éveiller aux pratiques écologiques qui font du bien
          </h1>
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
