import { createSlice } from "@reduxjs/toolkit";
import recipeData from '../Recipes/recipes.json';

const initialState = {
    favourites: [], 
    favouriteItems: recipeData
}

export const cartSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
      addToFavourite: (state,action) => {
        let find = state.favourites.findIndex((favouriteItems) => favouriteItems.id === action.payload.id)
        if(find >= 0){
          state.favourites.push[find] += 1;
        }else{
          state.favourites.push(action.payload)
        }
      },

      removeFromFavourite: (state, action) => {
        state.favourites = state.favourites.filter((favouriteItems) => favouriteItems.id !== action.payload)
      }
    },
  });

  export const { addToFavourite, removeFromFavourite } = cartSlice.actions;
  
  export default cartSlice.reducer;