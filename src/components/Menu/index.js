import React, { Fragment } from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = (props) => (
  <div>
    <ul className={css.Menu}>
      <MenuItem exact link="/">
        ШИНЭ ЗАХИАЛГА
      </MenuItem>
      <MenuItem link="/orders">ЗАХИАЛГАНУУД</MenuItem>
      {props.userId ? (
        <MenuItem link="/logout">ГАРАХ</MenuItem>
      ) : (
        // нэг container-т оруулахын тулд ашигладаг
        <Fragment>
          <MenuItem link="/login">НЭВТРЭХ</MenuItem>
          <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem>
        </Fragment>
      )}
    </ul>
  </div>
);
const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userId,
  };
};
export default connect(mapStateToProps)(Menu);
