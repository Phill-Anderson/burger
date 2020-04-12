import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
const BuildControls = (props) => (
  <div className={css.BuildControls}>
    <BuildControl ortsNemeh={props.ortsNemeh} ortsHasah={props.ortsHasah} type="salad" orts="Салад" />
    <BuildControl
      ortsNemeh={props.ortsNemeh}
      ortsHasah={props.ortsHasah}
      type="bacon"
      orts="гахайн мах"
    />
    <BuildControl
      ortsNemeh={props.ortsNemeh}
      ortsHasah={props.ortsHasah}
      type="cheese"
      orts="бяслаг"
    />
    <BuildControl
      ortsNemeh={props.ortsNemeh}
      ortsHasah={props.ortsHasah}
      type="meat"
      orts="үхрийн мах"
    />
  </div>
);
export default BuildControls;
