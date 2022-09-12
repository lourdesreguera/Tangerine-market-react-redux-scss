import React from "react";

const FooterMobile = () => {
  return (
    <div className="footer-mobile">
      <div className="footer-container-mobile">
        <div className="footer-container-mobile__item">
          <div className="footer-mobile-enlaces">
            <div className="footer-mobile-enlaces__item">
              <p>TANGERINE MARKET</p>
            </div>
            <div className="footer-mobile-enlaces__item">
              <img src="./images/expand-more-black-24dp.png" alt="" />
            </div>
          </div>
        </div>
        <div className="footer-container-mobile__item">
          <div className="footer-mobile-enlaces">
            <div className="footer-mobile-enlaces__item">
              <p>SECCIONES</p>
            </div>
            <div className="footer-mobile-enlaces">
              <img src="./images/expand-more-black-24dp.png" alt="" />
            </div>
          </div>
        </div>
        <div className="footer-container-mobile__item">
          <div className="footer-mobile-enlaces">
            <div className="footer-mobile-enlaces__item">
              <p>CONTACTO</p>
            </div>
            <div className="footer-mobile-enlaces">
              <img src="./images/expand-more-black-24dp.png" alt="" />
            </div>
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
