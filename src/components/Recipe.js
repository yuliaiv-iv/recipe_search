import React from 'react';
import { Link } from 'react-router-dom'

function Recipe({ image, id, calories }) {

  return (
    <li className="recipe__card" key={id}>
      <h2 className="recipe__name">{id}</h2>
      <img className="recipe__image" src={image} alt="" />
      <h3 className="recipe__calories">{calories.toFixed(0)} Ccal</h3>
      <Link to={`/recipe/${id}`} className="recipe__ingredients button">
        Ingredients and More
      </Link>
    </li>
  )
}

export default Recipe;