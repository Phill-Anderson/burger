import React, { Component } from "react";

import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
  };
  ortsNemeh = (type) => {
    // console.log("==========>" + type);
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    this.setState({ ingredients: newIngredients });
  };
  ortsHasah = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;
      this.setState({ ingredients: newIngredients });
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
        <BuildControls disabledIngredients={disabledIngredients} ortsNemeh={this.ortsNemeh} ortsHasah={this.ortsHasah} />
      </div>
    );
  }
}

export default BurgerBuilder;
