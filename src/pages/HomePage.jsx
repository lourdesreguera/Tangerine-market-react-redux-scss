import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="home-page">
      <div className="home-page__first-block">
        <h1 className="home-page__heading">EXPLORA NUEVOS COMERCIOS</h1>
        <div>
          <Link to="/stores">
            <button className="btn-homepage">BUSCA TU COMERCIO</button>
          </Link>
        </div>
      </div>
      <div className="home-page__second-block">
        <div>
          <h2 className="home-page__heading home-page__heading--sub">
            COMERCIOS DESTACADOS
          </h2>
          <Link to="/stores/"></Link>
        </div>
        <div className="home-page__gallery">
          <div className="home-page__card">
            <div className="home-page__imgStore">
              <Link
                to="/stores/631c54b2bd07775b6fa99483"
                className="homepage-link"
              >
                <img
                  src="./images/capullos.png"
                  alt="Floristería Capullos Florecidos"
                />
              </Link>
            </div>
            <Link
              to="/stores/631c54b2bd07775b6fa99483"
              className="homepage-link"
            >
              <p>Floristería Capullos Florecidos</p>
            </Link>
          </div>
          <div className="home-page__card">
            <div className="home-page__imgStore">
              <Link
                to="/stores/63208f2ec2f0e99b62a4fc88"
                className="homepage-link"
              >
                <img src="./images/barber.jpg" alt="Barbería Jonson's" />
              </Link>
            </div>
            <Link
              to="/stores/63208f2ec2f0e99b62a4fc88"
              className="homepage-link"
            >
              <p>Barbería Jonson's</p>
            </Link>
          </div>
          <div className="home-page__card">
            <div className="home-page__imgStore">
              <Link
                to="/stores/631ee61a325a01f32a480065"
                className="homepage-link"
              >
                <img
                  src="./images/papeleria.png"
                  alt="Papelería Listo de Papeles"
                />
              </Link>
            </div>
            <Link
              to="/stores/631ee61a325a01f32a480065"
              className="homepage-link"
            >
              <p>Papelería Listo de Papeles</p>
            </Link>
          </div>
          <div className="home-page__card">
            <div className="home-page__imgStore">
              <Link
                to="/stores/631f33c83685a487612e019f"
                className="homepage-link"
              >
                <img src="./images/pescaderia.jpg" alt="Pescadería Paula" />
              </Link>
            </div>
            <Link
              to="/stores/631f33c83685a487612e019f"
              className="homepage-link"
            >
              <p>Pescadería Paula</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
