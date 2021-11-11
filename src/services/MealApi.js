/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const endpoint = "https://themealdb.com/api/json/v1/1";

///////////////////// Get All Products /////////////////////
// returns an array of objects
//  each object has two fields
//      id: a unique identifier; string
//      product: name of the ingredient; string
export const getProducts = async () => {
    const path = `${endpoint}/list.php?i=list`;
    const response = await axios.get(path);
    return onGetProductsSuccess(response);
}

const onGetProductsSuccess = (response) => {
    let products = response.data.meals.map (createList);
    return products;
}

const createList = (ingredient) => {
    return {id: ingredient.idIngredient, product: ingredient.strIngredient}
}

///////////////////// Get Recipes ////////////////////
// input: array of ingredients
// returns an array of objects
//  each object has three fields
//      id: a unique identifier (string)
//      name: name of the recipe (string)
//      image: image of the meal (string)
// This method returns recipes that contain the first 
// ingredient in the list of ingredients.
// Future Work: return recipes that contain only 
// ingredients that are in the ingredients list
export const getRecipes = async (ingredients) => {
    let searchIngredient = ingredients[0];
    searchIngredient = getSearchString (searchIngredient);
    const path = `${endpoint}/filter.php?i=${searchIngredient}`;
    const data = await axios.get(path);
    return onGetRecipesSuccess(data);
}

const getSearchString = (ingredient)=> {
    ingredient = ingredient.replace(" ", "_");
    ingredient = ingredient.toLowerCase();
    return ingredient;
}

const onGetRecipesSuccess = (data) => {
    return data.data.meals.map (createRecipesList);
}

const createRecipesList = (recipe) => {
    return {id:recipe.idMeal, name: recipe.strMeal, image: recipe.strMealThumb}
}

///////////////////// Get Recipe Details /////////////////////
// returns details for one recipe
//  returns six fields
//      id: unique identifier of the recipe (string)
//      name: recipe's name (string)
//      ingredients: a list of ingredients
//          each ingredient is a string that includes the 
//          measurement (if any) and the ingredient name
//      instructions: cooking instructions (string)
//      image: an image of the meal
//      video: a video detailing how to cook the meal
export const getRecipe = async (recipeId) => {
    const path = `${endpoint}/lookup.php?i=${recipeId}`;
    try {
    const response = await axios.get(path);
    return onGetRecipeSuccess (response);
    }
    catch (error) {
        throw (error);
    }
}

const onGetRecipeSuccess = (response) => {
    let recipe = response.data.meals[0];
    recipe = formatRecipe (recipe);
    console.log (recipe);
}

const formatRecipe = (recipe) => {
    let ingredients = createListofIngredients (recipe);
    return {
        id: recipe.idMeal,
        name: recipe.strMeal,
        instructions: recipe.strInstructions,
        image: recipe.strMealThumb,
        video: recipe.strYoutube,
        ingredients: ingredients,
    }
}

const createListofIngredients = (r) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++)
    {
        const measure = `strMeasure${i}`;
        const ingredient = `strIngredient${i}`;
        let displayItem = formatIngredient (r[measure], r[ingredient]);
        if (displayItem)
            ingredients[ingredients.length] = displayItem;
    }
    return ingredients;
}

const formatIngredient = (measurement, ingredient) => {
    if (!ingredient || ingredient==="")
        return false;
    else 
    {
        if (!measurement || measurement === "" || measurement === " ")
            return `${ingredient}`;
        return `${measurement} ${ingredient}`;
    }
}

export default { getProducts, getRecipes, getRecipe };
