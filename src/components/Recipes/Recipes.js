import React from "react";
import MealApi from "../../services/MealApi";
class Recipes extends React.Component {
    state = {
        products: [],
        recipes: [],
        recipe: '',
        searchCondition: ''
    }
    searchRef = React.createRef();
    componentDidMount = () => {
        MealApi.getProducts()
        .then(this.onGetProductsSuccess)
        .catch(this.onGetProductsError);
    }
    ////////// Products
    createProductsList = (p) => {
        return <option value={p.product}>{p.product}</option>
        // return <li key={p.id}>{p.product}</li>
    }
    onGetProductsSuccess = (products) => {
        const productsList = products.map (this.createProductsList);
        this.setState (
            {products: productsList}
        )
    }
    onGetProductsError = (e) => {
        console.log (e);
    }
    handleChange = e => {
        let selected = [e.target.value];
        this.setState (
            {selected: selected}
        )
        console.log ("selected: ", selected);
        MealApi.getRecipes (selected)
        .then (this.onGetRecipesSuccess)
        .catch (this.onGetRecipesError);
    }
    ////////// Recipes 
    mapRecipes = (r) => {
        return (
            <div className="col-sm my-2" key={r.id}>
              <div className="card col-sm" style={{width: "18rem", "borderRadius": "5%" }}>
                {/* <a href={props.image.mainUrl}> */}
                <img src={r.image} className="card-img-top img-responsive" alt="..." style={{"borderRadius": "5%" }} />
                <div className="card-body" style={{"textAlign":"center"}}>
                    <p>{r.name}</p>
                    <button type="button" className="btn btn-primary" id={r.id} onClick={this.onSelect}>Show Recipe</button>
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
    handleInput = event => {
        this.setState({ searchCondition: event.target.value });
    };
    onSearch = () => {
        // if I type in chicken,
        // in debugger, it shows chicken
        // but from console.log, there's a character
        // (whitespace?) at the end.
        // This search does not work because of that. 
        let searchCondition = this.state.searchCondition;
        searchCondition = searchCondition.trim();
        console.log ("searchCondigion:", searchCondition, "!")
        MealApi.getRecipes (searchCondition)
        .then (this.onGetRecipesSuccess)
        .catch (this.onGetRecipesError);
    }
//////////////////// one recipe details ////////////////////
    onSelect = (e) => {
        const recipeId = e.target.id;
        MealApi.getRecipe (recipeId)
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
                <div className="col d-flex justify-content-center">
                    <div className="row">
                    <div className="card" style={{width: "50rem", "borderRadius": "5%" }}>
                    <img src={r.image} className="card-img-top img-responsive mx-auto" alt="..." style={{width: "33rem", "borderRadius": "5%" }} />
                    <div className="card-body justify-content-center">
                        <h1 className="card-title">{r.name}</h1>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>
    </div>
            <div className="container">     
                <div className="row content">
                    <div className="col-sm-6">Ingredients<ul>{ingredients}</ul></div>
                    <div className="col-sm-6">{r.instructions}</div>
                </div>
            </div>
            <button type="button" className="btn btn-primary" id={r.id} onClick={this.onClick}>Go Back</button>
                            </div>
        )
    }
//////////////////// render ///////////////////
    render = () => {
        return (      
        <div>
            <select class="form-select" aria-label="Default select example" style={{width: "25rem" }} onChange={this.handleChange}>
            <option selected></option>
            {this.state.products}
            </select>
          <div className="container">
            <div className="row">
                {this.state.recipes? this.state.recipes : ''}
            
            </div>
          </div>
          <div className="container">
              <div className="row">
              <div>{this.state.recipe}</div>
              </div>
          </div>
          
        </div>
  )
    }
}
export default Recipes;

// import React from "react";
// import MealApi from "../../services/MealApi";
// class Recipes2 extends React.Component {
//     state = {
//         recipes: [],
//         recipe: '',
//         searchCondition: ''
//     }
//     searchRef = React.createRef();
//     componentDidMount = () => {
//         // Code to get fridge ingredients here
//         // JTG: search on one element - from search box
//         let fridgeProducts = ["Chicken Breasts", "Garlic"];
//         MealApi.getRecipes (fridgeProducts)
//         .then (this.onGetRecipesSuccess)
//         .catch (this.onGetRecipesError);
//     }
//     mapRecipes = (r) => {
//         return (
//             <div className="col-sm my-2" key={r.id}>
//               <div className="card col-sm" style={{width: "18rem", "borderRadius": "5%" }}>
//                 {/* <a href={props.image.mainUrl}> */}
//                 <img src={r.image} className="card-img-top img-responsive" alt="..." style={{"borderRadius": "5%" }} />
//                 <div className="card-body" style={{"textAlign":"center"}}>
//                     <p>{r.name}</p>
//                     <button type="button" className="btn btn-primary" id={r.id} onClick={this.onSelect}>Show Recipe</button>
//                 </div>
//               </div>
//             </div>            
//         )
//     }
//     onGetRecipesSuccess = (result) => {
//         let recipeCards = result.map (this.mapRecipes);
//         this.setState (
//             {recipes: recipeCards}
//         )
//     }
//     onGetRecipesError = (e) => {
//         console.log (e);
//     }
//     handleInput = event => {
//         this.setState({ searchCondition: event.target.value });
//     };
//     onSearch = () => {
//         // if I type in chicken,
//         // in debugger, it shows chicken
//         // but from console.log, there's a character
//         // (whitespace?) at the end.
//         // This search does not work because of that. 
//         let searchCondition = this.state.searchCondition;
//         searchCondition = searchCondition.trim();
//         console.log ("searchCondigion:", searchCondition, "!")
//         MealApi.getRecipes (searchCondition)
//         .then (this.onGetRecipesSuccess)
//         .catch (this.onGetRecipesError);
//     }
// //////////////////// one recipe details ////////////////////
//     onSelect = (e) => {
//         const recipeId = e.target.id;
//         MealApi.getRecipe (recipeId)
//         .then (this.onGetRecipeDetailsSuccess)
//         // .error (this.onGetRecipeDetailsError);
//     }
//     onGetRecipeDetailsSuccess = (response) => {
//         // let recipe = this.formatRecipe (response);
//         let recipeCard = this.formatCard (response);
//         this.setState (
//             {recipe: recipeCard}
//         )
//     }
//     mapIngredientInto_li = (i) => {
//         return <li key={i.key}>{i.ingredient}</li>
//     }
//     formatCard = (r) => {
//         let ingredients = r.ingredients.map (this.mapIngredientInto_li);
//         return (
//             <div>
//                 <div className="col d-flex justify-content-center">
//                     <div className="row">
//                     <div className="card" style={{width: "50rem", "borderRadius": "5%" }}>
//                     <img src={r.image} className="card-img-top img-responsive mx-auto" alt="..." style={{width: "33rem", "borderRadius": "5%" }} />
//                     <div className="card-body justify-content-center">
//                         <h1 className="card-title">{r.name}</h1>
//                         {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
//                         {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//                     </div>
//                 </div>
//             </div>
//     </div>
//             <div className="container">     
//                 <div className="row content">
//                     <div className="col-sm-6">Ingredients<ul>{ingredients}</ul></div>
//                     <div className="col-sm-6">{r.instructions}</div>
//                 </div>
//             </div>
//             <button type="button" className="btn btn-primary" id={r.id} onClick={this.onClick}>Go Back</button>
//                             </div>
//         )
//     }
// //////////////////// render ///////////////////
//     render = () => {
//         return (      
//         <div>
//             <div className="input-group my-2" style={{width: "25rem" }}>
//               <input type="search" onChange={this.handleInput} className="form-control rounded mr-2" placeholder="Enter ingredient" aria-label="Search"
//               aria-describedby="search-addon" />
//               <button type="button" className="btn btn-outline-primary mr-2" onClick={this.onSearch}>Search</button>
//             </div>
//           <div className="container">
//             <div className="row">
//             {this.state.recipes? this.state.recipes : ''}
//             </div>
//           </div>
//           <div className="container">
//               <div className="row">
//               <div>{this.state.recipe}</div>
//               </div>
//           </div>
          
//         </div>
//   )
//     }
// }
// export default Recipes2;