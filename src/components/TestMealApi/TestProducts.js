import React from "react";
import MealApi from "../../services/MealApi";

class TestProducts extends React.Component 
{
    state = {
        products: []
    }

    componentDidMount = () => {
        MealApi.getProducts()
        .then(this.onGetProductsSuccess)
        .catch(this.onGetProductsError);
    }

    createProductsList = (p) => {
        return <li key={p.id}>{p.product}</li>
    }

    onGetProductsSuccess = (products) => {
        const productsList = products.map (this.createProductsList);
        this.setState (
            {products: productsList}
        )
    }

    onGetProductsError = (e) => {
        // display error message
    }

    render = () => {
        return <ul>{this.state.products}</ul>
    }
}

export default TestProducts;