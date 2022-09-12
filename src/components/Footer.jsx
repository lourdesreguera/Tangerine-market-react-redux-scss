
import React from 'react'
import { Link } from 'react-router-dom'




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

        <div className='footer-container__item'>
            <div>
                <h4>TANGERINE MARKET</h4>
            </div>
            <div className='footer-container__item-enlaces'>
                <a href="#">Sobre Nosotros</a>
                {/* <a href="#">Condiciones de Compra</a> */}
                <Link to="/conditions" className="">Términos y Condiciones</Link>
            </div>

        </div>
        <div className="footer-container__item-enlaces">
          <a href="#">Sobre Nosotros</a>
          <a href="#">Condiciones de Compra</a>
        </div>
      </div>
      <div className="footer-container__item">
        <h4>SECCIONES DESTACADAS</h4>
        <div className="footer-container__item-enlaces">
          <a href="#">Alimentación</a>
          <a href="#">Cosmética</a>
          <a href="#">Floristeria</a>
          <a href="#">Farmacia</a>
        </div>
      </div>
      <div className="footer-container__item">
        <h4>CONTACTO</h4>

        <p>Dirección: Calle Upgrade Hub</p>
        <p>Teléfono: 987 654 321</p>
      </div>
    </footer>
  );
};

export default Footer;
