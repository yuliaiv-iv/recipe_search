import React, { useState } from 'react';
import { images } from '../utils/data';

function Home() {

    let [index, setIndex] = useState(0);

    const handleNextClick = () => {
        let nextIndex = ++index;
        setIndex(nextIndex);
    }

    const handlePrevClick = () => {
        let prevIndex = --index;
        setIndex(prevIndex);
    }

    const handleNextButton = index === images.length - 1;
    const handlePrevButton = index === 0;

    return (
        <div className="home">
            <h1 className="home__title"
            >
                Quick search for a recipe out of thousands options
            </h1>
            <div className="home__conteiner">
                <button
                    className={`home__button home__button_prev ${handlePrevButton ? 'home__button_disabled' : ''}`}
                    onClick={handlePrevClick} disabled={handlePrevButton}
                >
                </button>
                <div className="home__info">
                    <img
                        className="home__image"
                        src={images[index].image} alt={images[index].title}
                    />
                    <h2 className="home__info-title">
                        {images[index].title}
                    </h2>
                </div>
                <button
                    className={`home__button home__button_next ${handleNextButton ? 'home__button_disabled' : ''}`}
                    onClick={handleNextClick} disabled={handleNextButton}
                >
                </button>
            </div>
        </div>
    )
}

export default Home;