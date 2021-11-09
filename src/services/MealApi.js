/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const endpoint = "https://themealdb.com/api/json/v1/1";

export const getIngredients = () => {
    const path = `${endpoint}/list.php?i=list`;
    return axios.get(path);
}

const getSearchString = (ingredient)=> {
    ingredient = ingredient.replace(" ", "_");
    ingredient = ingredient.toLowerCase();
    return ingredient;
}

export const getRecipes = (ingredients) => {
    let searchIngredient = ingredients[0];
    searchIngredient = getSearchString (searchIngredient);
    const path = `${endpoint}/filter.php?i=${searchIngredient}`;
    return axios.get(path);
}

const onGetRecipeSuccess = (data) => {
    console.log ("test the promise")
    return data;
}

// www.themealdb.com/api/json/v1/1/lookup.php?i=52772
export const getRecipe = (recipeId) => {
    const path = `${endpoint}/lookup.php?i=${recipeId}`;
    return axios.get(path)
    .then (onGetRecipeSuccess);
}

export default { getIngredients, getRecipes, getRecipe };
