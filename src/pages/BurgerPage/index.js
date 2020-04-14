import React, { Component } from "react";

import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
const INGREDIENT_PRICES = {
  salad: 150,
  cheese: 250,
  bacon: 800,
  meat: 1500
};
class BurgerPage extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    purchasing: false,
    totalPrice: 1000
  };
  ortsNemeh = (type) => {
    // console.log("==========>" + type);
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ purchasing: true, totalPrice: newPrice, ingredients: newIngredients });
  };
  ortsHasah = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({ purchasing: newPrice > 1000, totalPrice: newPrice, ingredients: newIngredients });
    }
  };
  render() {
    const disabledIngredients = { ...this.state.ingredients };
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
      console.log(key + "==>" + disabledIngredients[key]);
    }
    return (
      <div>
        <Burger orts={this.state.ingredients} />
        <BuildControls disabledButton={!this.state.purchasing} price={this.state.totalPrice} disabledIngredients={disabledIngredients} ortsNemeh={this.ortsNemeh} ortsHasah={this.ortsHasah} />
      </div>
    );
  }
}

export default BurgerPage;
