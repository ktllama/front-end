import React from "react";
import MealApi from "../../services/MealApi";

class Recipe extends React.Component {
    state = {
        recipe: ''
    };

    recipes = [];

    componentDidMount = () => {
    // Note: functionality for find recipe button is clicked
        MealApi.getRecipe ('52780')
        .then (this.onGetRecipeDetailsSuccess)
        // .error (this.onGetRecipeDetailsError);
    }

    onGetRecipeDetailsSuccess = (response) => {
        // let recipe = this.formatRecipe (response);
        let recipeCard = this.formatCard (response);
        this.setState (
            {recipe: recipeCard}
        )
    }

    mapIngredientInto_li = (i) => {
        return <li key={i.key}>{i.ingredient}</li>
    }

    formatCard = (r) => {
        let ingredients = r.ingredients.map (this.mapIngredientInto_li);
        return (
            <div>
                <div className="col d-flex justify-content-center text-secondary ">
                    <div className="row m-3 m-sm-5">
                    <div className="card p-4 bg-light" style={{"borderRadius": "5%" }}>
                    <img src={r.image} className="card-img-top img-responsive mx-auto recipe" alt="..." style={{width: "33rem", "borderRadius": "5%" }} />
                    <div className="card-body recipeName m-4 justify-content-center">
                        <h1 className="card-title">{r.name}</h1>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>
    </div>
            <div className="container mt-n4">     
                <div className="row content justify-content-center m-3 m-sm-4">

                    <div className="col-sm-4 card text-secondary m-4 p-3 white" style={{"borderRadius": "5%" }}>
                    <h1 className="head p-2 text-center card-title">Ingredients</h1>
                        <div className="card-body text-light ingredients">
                            <p className="card-text p-4">{ingredients}</p>
                        </div>
                    </div>

                    <div className="col-sm-6 card text-secondary m-4 p-3" style={{"borderRadius": "5%" }}>
                    <h1 className="card-title">Instructions</h1>
                        <div className="card-body align-self-center mt-2 cardbody text-light">
                            <p className="card-text p-4 align-self-center text-big">{r.instructions}</p>
                        </div>
                    </div>


                </div>
            </div>
    </div>
        )
    }

    onGetRecipeDetailsError = (e) => {
        console.log (e);
    }

    render = () => {
        return (
            <div>{this.state.recipe}</div>
        )
    }
}

export default Recipe;