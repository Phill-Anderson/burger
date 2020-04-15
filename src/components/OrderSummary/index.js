import React from "react";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны сонгосон орцууд: </p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredientNames[el]}: {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>Захиалгын дүн:{props.price}₮</p>
      <p>Цаашаа үргэжлүүлэх үү?</p>
    </div>
  );
};
export default OrderSummary;
