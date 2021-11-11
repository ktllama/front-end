import React from "react";
import MealApi from "../../services/MealApi";

class TestRecipes extends React.Component {
    state = {
        recipes: []
    }

    componentDidMount = () => {
        // Code to get fridge ingredients here

        // JTG: search on one element - from search box
        let fridgeProducts = ["Chicken Breasts", "Garlic"];
        MealApi.getRecipes (fridgeProducts)
        .then (this.onGetRecipesSuccess)
        .catch (this.onGetRecipesError);
    }

    // JTG:
    onSelect = (e) => {
        const recipeId = e.target.id;
        console.log (recipeId);
    }

    mapRecipes = (r) => {
        return (
            <div>
                <div className="row m-3 m-sm-5">
                    <div className="col d-flex justify-content-center text-secondary ">
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
                                <p className="card-text p-4">should have ingredients in {}</p>
                            </div>
                        </div>

                        <div className="col-sm-6 card text-secondary m-4 p-3" style={{"borderRadius": "5%" }}>
                            <h1 className="card-title">Instructions</h1>
                            <div className="card-body align-self-center mt-2 cardbody text-light">
                                <p className="card-text p-4 align-self-center">{r.instructions}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    onGetRecipesSuccess = (result) => {
        let recipeCards = result.map (this.mapRecipes);
        this.setState (
            {recipes: recipeCards}
        )
    }

    onGetRecipesError = (e) => {
        console.log (e);
    }
    
    render = () => {
        return (      
        <div>
            <div className="input-group my-2" style={{width: "25rem" }}>
              <input type="search" ref={input => this._searchCondition = input} className="form-control rounded mr-2" placeholder="Enter ingredient" aria-label="Search"
              aria-describedby="search-addon" />
              <button type="button" className="btn btn-outline-primary mr-2" onClick={this.onSearch}>Search</button>
            </div>
          <div className="container">
            <div className="row">
            {this.state.recipes? this.state.recipes : ''}
            </div>
          </div>
        </div>
  )
    }
}

export default TestRecipes;