import React from "react";

const AboutPage = () => {
  return (
    <main className="main">
      <div className="aboutPage-container">
        <div className="aboutPage-container__vision">
          <div>
            <h3>NUESTRA VISION</h3>
          </div>
          <div>
            <p>
              Tras la pandemia mundial del Coronavirus y en una época en la que
              prevalece el consumo en las grandes superficies, los pequeños
              comercios se han visto golpeados duramente y a duras penas
              remontan el vuelo. Tangerine Market, bautizado como “el Amazon de
              los negocios locales”, surge con la idea de apoyar a las tiendas
              de barrio, las de toda la vida. A través de nuestro Marketplace,
              los negocios locales, tendrán una mayor visibilidad y les
              permitirá competir desde lo próximo con grandes multinacionales de
              ventas en internet.
            </p>
          </div>
        </div>
        <div className="aboutPage-container__team">
          <div>
            <h3>NUESTRO EQUIPO</h3>
          </div>
          <div>
            <p>
              El equipo de Tangerine Market surgió de la unión de 5 estudiantes
              de un bootcamp de desarrollo web que querían contribuir con sus
              nuevos conocimientos a que los comercios locales pudieran competir
              con las grandes superficies en las plataformas digitales.
            </p>
          </div>
        </div>
        <div className="aboutPage-container__gallery">
          <div className="aboutPage-container__image">
            <img
              src="https://res.cloudinary.com/dt6hko68q/image/upload/v1662980363/varios/MicrosoftTeams-image_23_xuabfh.jpg"
              alt="Foto Tineo"
            />
          </div>
          <div className="aboutPage-container__image">
            <img
              src="https://res.cloudinary.com/dt6hko68q/image/upload/v1662976879/varios/MicrosoftTeams-image_18_mo0meg.jpg"
              alt="Foto Jose"
            />
          </div>
          <div className="aboutPage-container__image">
            <img
              src="https://res.cloudinary.com/dt6hko68q/image/upload/v1662976879/varios/MicrosoftTeams-image_17_rxsgpr.jpg"
              alt="Foto Lourdes"
            />
          </div>
          <div className="aboutPage-container__image">
            <img
              src="https://res.cloudinary.com/dt6hko68q/image/upload/v1662980363/varios/MicrosoftTeams-image_21_kv1lrh.jpg"
              alt="Foto Victor"
            />
          </div>
          <div className="aboutPage-container__image">
            <img
              src="https://res.cloudinary.com/dt6hko68q/image/upload/v1662980363/varios/MicrosoftTeams-image_22_eqkj5c.jpg"
              alt="Foto Rafa"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;


