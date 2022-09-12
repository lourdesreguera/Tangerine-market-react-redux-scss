import React from "react";

const HomePage = () => {
    return (
        <main className="home-page">
            <div className="home-page__container">
                <h1>EXPLORA NUEVOS COMERCIOS</h1>
            </div>

            <div className="bloque">
                <div>
                    <h2>¿QUÉ NECESITAS HOY? </h2>
                </div>
                <div className="home-page__gallery">
                <div className="gallery__item">
                    <img src="./images/alimentacion.jpg" alt="Alimentación" />
                </div>
                <div className="gallery__item">
                    <img src="./images/floristerias.jpg" alt="" />
                </div>
                <div className="gallery__item">
                    <img src="./images/papeleria.jpg" alt="" />
                </div>
                <div className="gallery__item">
                    <img src="./images/peluqueria.jpg" alt="" />
                </div>
            </div>






            </div>
            
        </main>
    );
};

export default HomePage;
