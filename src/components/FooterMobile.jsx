import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FooterMobile = () => {
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  const [view3, setView3] = useState(false);

  const viewMore1 = () => {
    setView1(!view1);
  };

  const viewMore2 = () => {
    setView2(!view2);
  };

  const viewMore3 = () => {
    setView3(!view3);
  };

  return (
    <div className="footer-mobile">
      <div className="footer-container-mobile">
        <div className="footer-container-mobile__item">
          <div className="footer-mobile-enlaces">
            <div className="footer-mobile-enlaces__item">
              <div>
                <p>TANGERINE MARKET</p>
              </div>
              <div className="footer-mobile-enlaces__item">
                <img
                  src="./images/expand-more-black-24dp.png"
                  alt=""
                  onClick={viewMore1}
                />
              </div>
            </div>
            {view1 && (
              <div>
                <Link to="/about" className="stores__data stores__data--footer">
                  <p>Sobre Nosotros</p>
                </Link>
                <Link
                  to="/conditions"
                  className="stores__data stores__data--footer"
                >
                  <p>Términos y Condiciones</p>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="footer-container-mobile__item">
          <div className="footer-mobile-enlaces">
            <div className="footer-mobile-enlaces__item">
              <div>
                <p>COMERCIOS DESTACADOS</p>
              </div>
              <div className="footer-mobile-enlaces">
                <img
                  src="./images/expand-more-black-24dp.png"
                  alt=""
                  onClick={viewMore2}
                />
              </div>
            </div>
            {view2 && (
              <div>
                <Link
                  to="/stores/631c54b2bd07775b6fa99483"
                  className="stores__data stores__data--footer"
                >
                  <p>Floristería Capullos Florecidos</p>
                </Link>
                <Link
                  to="/stores/63208f2ec2f0e99b62a4fc88"
                  className="stores__data stores__data--footer"
                >
                  <p>Barbería Jonson's</p>
                </Link>
                <Link
                  to="/stores/631f33c83685a487612e019f"
                  className="stores__data stores__data--footer"
                >
                  <p>Pescadería Paula</p>
                </Link>
                <Link
                  to="/stores/631ee61a325a01f32a480065"
                  className="stores__data stores__data--footer"
                >
                  <p>Listo de Papeles</p>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="footer-container-mobile__item">
          <div className="footer-mobile-enlaces">
            <div className="footer-mobile-enlaces__item">
              <div>
                <p>CONTACTO</p>
              </div>
              <div className="footer-mobile-enlaces">
                <img
                  src="./images/expand-more-black-24dp.png"
                  alt=""
                  onClick={viewMore3}
                />
              </div>
            </div>
            {view3 && (
              <div>
                <p className="stores__data stores__data--footer">Upgrade Hub</p>
                <p className="stores__data stores__data--footer">987 654 321</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="footer-icons-mobile">
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
  );
};

export default FooterMobile;
