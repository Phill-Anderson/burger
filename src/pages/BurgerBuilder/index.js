import React, { Component } from "react";

import Burger from "../../components/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 2,
      salad: 2,
      meat: 1,
    },
  };

  render() {
    return (
      <div>
        <Burger orts={this.state.ingredients} />
        <div>Орцны удирдлага</div>
      </div>
    );
  }
}

export default BurgerBuilder;
