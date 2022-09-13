import React from "react";
import { useState } from "react";

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
                <p>Enlace 1</p>
                <p>Enlace2</p>
              </div>
            )}
          </div>
        </div>
        <div className="footer-container-mobile__item">
          <div className="footer-mobile-enlaces">
            <div className="footer-mobile-enlaces__item">
              <div>
                <p>SECCIONES</p>
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
                <p>Enlace 1</p>
                <p>Enlace2</p>
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
                <p>Enlace 1</p>
                <p>Enlace2</p>
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
