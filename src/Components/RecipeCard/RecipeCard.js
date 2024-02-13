import React, { useState, useEffect } from 'react';
import './recipeCard.css';
import recipes from '../Recipes/recipes.json';
import { useParams } from 'react-router-dom';

function RecipeCard() {
    const { id } = useParams();
    const numberId = parseInt(id, 10);
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const selectedRecipe = recipes.find((recipe) => recipe.id === numberId);
        setRecipe(selectedRecipe);
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className='recipeCardContainer'>
            <div key={recipe.id} className="recipeCardImage">
                <img src={recipe.image2} alt="recipeCard Image" />
            </div>

            <div className="recipeDescription">
                <div className="recipeInfo">
                <h1>Recipe: {recipe.name}</h1>
                
                <div className="recipetimeandcostInfo">
                <h3>Time to prepare: {recipe.timeToPrepare} Min.</h3>
                <h3>Total Cost: Rs.{recipe.cost}</h3>
                </div>
                </div>

                <p><span>Ingredients to use:</span> {recipe.Ingredients}</p>
                <p><span>Directions:</span> {recipe.Directions}</p>
            </div>
        </div>
    );
}

export default RecipeCard;
