import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-container__item">
        <h4>CONECTA CON NOSOTROS</h4>
        <div className="footer-container__item__images">
          <img
            className="icon icon--footer"
            src="./images/facebook1.png"
            alt="Facebook"
          />
          <img
            className="icon icon--footer"
            src="./images/instagram1.png"
            alt="Instagram"
          />
          <img
            className="icon icon--footer"
            src="./images/twitter1.png"
            alt="Twitter"
          />
        </div>
      </div>

      <div className="footer-container__item">
        <h4>TANGERINE MARKET</h4>
        <div className="footer-container__item-enlaces">
          <Link to="/about" className="stores__data stores__data--footer">
            Sobre Nosotros
          </Link>
          <Link to="/conditions" className="stores__data stores__data--footer">
            Términos y Condiciones
          </Link>
        </div>
      </div>

      <div className="footer-container__item">
        <h4>COMERCIOS DESTACADOS</h4>
        <div className="footer-container__item-enlaces">
          <Link
            to="/stores/631c54b2bd07775b6fa99483"
            className="stores__data stores__data--footer"
          >
            Floristería Capullos Florecidos
          </Link>
          <Link
            to="/stores/63208f2ec2f0e99b62a4fc88"
            className="stores__data stores__data--footer"
          >
            Barbería Jonson's
          </Link>
          <Link
            to="/stores/631f33c83685a487612e019f"
            className="stores__data stores__data--footer"
          >
            Pescadería Paula
          </Link>
          <Link
            to="/stores/631ee61a325a01f32a480065"
            className="stores__data stores__data--footer"
          >
            Listo de Papeles
          </Link>
        </div>
      </div>

      <div className="footer-container__item">
        <h4>CONTACTO</h4>

        <p className="stores__data stores__data--footer">Calle Upgrade Hub</p>
        <a className="stores__data stores__data--footer" href="tel:987654321">
          Teléfono: 987 654 321
        </a>
      </div>
    </footer>
  );
};

export default Footer;
