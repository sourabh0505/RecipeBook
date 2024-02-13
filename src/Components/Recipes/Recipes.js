import React from 'react';
import './recipes.css';
import FilterRecipes from '../FilterRecipes/FilterRecipes';
import data from './recipes.json';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addToFavourite } from '../Favourites/cartSlice';



function Recipes() {

  const dispatch = useDispatch();

  return (
    <div className="recipesContainer">
      <div className="filterRecipesDiv">
        <FilterRecipes />
      </div>

      <div className="recipesDiv">

        <div className="cuisineHeading">
          <h1>Let's Try</h1>
        </div>

        <div className="recipeCardsContainer">
          {data.map((favItems) => (
            <div key={favItems.id} className="recipeCard">
              <div className="recipeImage">
                <img src={favItems.image} alt="food image" />
              </div>

              <div className="recipeInfo">
                <h3>{favItems.name}</h3>
                <p>Price: {favItems.cost} ruppees</p>
                <p>Time: {favItems.timeToPrepare} minutes</p>
              </div>

              <div className="showRecipeBtn">
                <button><Link to={`/recipeCard/${favItems.id}`}>Check Recipe</Link></button>
                <button onClick={() => dispatch(addToFavourite(favItems))} className="recipeFavouriteBtn"><Link>Favourite</Link></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recipes;
