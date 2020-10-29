import React from 'react';
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../utils/context'
import { v4 as uuidv4 } from 'uuid'

function RecipeDetails() {

    const { id } = useParams();
    const { recipes } = useGlobalContext();

    return (
        <div>
            {recipes.map((r) => {
                if (r.id === id) {
                    return (
                        <div className="details__container" key={uuidv4()}>
                            <h2 className="details__title">{r.id}</h2>
                            <img className="details__image" src={r.image} alt={r.image} />
                            <div className="details__info">
                                <h3 className="details__info_item">{r.calories.toFixed(0)} Ccal</h3>
                                <h3 className="details__info_item">Total Time {r.totalTime === 0 ? 'N/A' : r.totalTime} min</h3>
                                <h3 className="details__info_item">Total Weight: {r.totalWeight.toFixed(0)} g</h3>
                                <h3 className="details__info_item">Yield: {r.yield}</h3>
                            </div>
                            <h3 className="details__subtitle">Ingredients</h3>
                            <ul className="details__ingredients">
                                {r.ingredients.map(ingr => (
                                    <li className="details__ingredient" key={uuidv4()}>{ingr.text}</li>
                                ))}
                            </ul>
                            <div className="details__nav">
                                <a className="details__link" href={r.url} target="_blank" rel="noopener noreferrer">Click here for directions &#8594;</a>
                                <Link to="/recipe" className="details__button-back button">Go Back</Link>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    );
}

export default RecipeDetails;