import React from 'react'
import './filterRecipes.css' 

function FilterRecipes() {

  return (<>
    <div className='filterRecipesContainer'>
      <h1>Filter Recipes</h1>

      <ul>
        <h2>Cuisines</h2>
        <li><a href="/">Indian</a></li>
        <li><a href="/">Chinese</a></li>
      </ul>
    </div>
  </>)
}

export default FilterRecipes