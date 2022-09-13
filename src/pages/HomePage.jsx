import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <main className="home-page">
            <div className="home-page__first-block">
                <h1>EXPLORA NUEVOS COMERCIOS</h1>
                <div>
                    <Link to="/stores">
                        <button className="button-homepage">BUSCA TU COMERCIO</button>
                    </Link>
                </div>
            </div>
            <div className="home-page__second-block">
                <div>
                    <h2>¿QUÉ NECESITAS HOY? </h2>
                </div>
                <div className="home-page__gallery">
                    <div className="gallery__item1">
                        <button className="button-gallery">ALIMENTACION</button>
                    </div>
                    <div className="gallery__item2">
                        <button className="button-gallery">FLORISTERIAS</button>
                    </div>
                    <div className="gallery__item3">
                        <button className="button-gallery">PAPELERIAS</button>
                    </div>
                    <div className="gallery__item4">
                        <button className="button-gallery">BELLEZA</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;
