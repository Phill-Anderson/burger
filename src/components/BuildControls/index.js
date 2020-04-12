import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
const BuildControls = (props) => (
  <div className={css.BuildControls}>
    <BuildControl ortsNemeh={props.ortsNemeh} ortsHasah={props.ortsHasah} disabled={props.disabledIngredients} type="salad" orts="Салад" />
    <BuildControl
      ortsNemeh={props.ortsNemeh}
      ortsHasah={props.ortsHasah}
      disabled={props.disabledIngredients}
      type="bacon"
      orts="гахайн мах"
    />
    <BuildControl
      ortsNemeh={props.ortsNemeh}
      ortsHasah={props.ortsHasah}
      disabled={props.disabledIngredients}
      type="cheese"
      orts="бяслаг"
    />
    <BuildControl
      ortsNemeh={props.ortsNemeh}
      ortsHasah={props.ortsHasah}
      disabled={props.disabledIngredients}
      type="meat"
      orts="үхрийн мах"
    />
  </div>
);
export default BuildControls;
