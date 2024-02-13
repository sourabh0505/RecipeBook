import React from 'react'
import './favourites.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromFavourite } from './cartSlice'

function Favourites() {

    const items = useSelector((state) => state.favourite.favourites)

    const dispatch = useDispatch();

     return (
    <div className='favouritesContainer'>
        <h1>Let's check your favourite recipes</h1>
        <div className="favouriteCardsContainer">
          {items.map((data) => (
            <div key={data.id} className="favouriteCard">
              <div className="favouriteImage">
                <img src={data.image} alt="food image" />
              </div>

              <div className="favouriteInfo">
                <h3>{data.name}</h3>
                <p>Price: {data.cost} ruppees</p>
                <p>Time: {data.timeToPrepare} minutes</p>
              </div>

              <div className="showRecipeBtn">
                <button><Link to={`/recipeCard/${data.id}`}>Check Recipe</Link></button>
                <button className='removeFromFav' onClick={() => dispatch(removeFromFavourite(data.id))}>Remove</button>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Favourites