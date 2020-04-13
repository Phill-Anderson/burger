import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
const BuildControls = (props) => {
  const controls = {
    salad: "Салад",
    cheese: "Бяслаг",
    bacon: "Гахайн мах",
    meat: "Үхрийн мах"
  };
  return (
    <div className={css.BuildControls}>
      <p>БУРГЕРИЙН ҮНЭ: <strong>{props.price}</strong></p>

      {Object.keys(controls).map(el => (
        <BuildControl
          key={el}
          ortsNemeh={props.ortsNemeh}
          ortsHasah={props.ortsHasah}
          disabled={props.disabledIngredients}
          type={el}
          orts={controls[el]} />
      ))}
    </div>
  )
}
export default BuildControls;
