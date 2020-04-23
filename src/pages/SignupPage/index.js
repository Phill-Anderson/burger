import React, { Component } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";

class Signup extends Component {
  state = {
    email: "",
    password1: "",
    password2: "",
  };

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  changePassword1 = (event) => {
    this.setState({ password1: event.target.value });
  };
  changePassword2 = (event) => {
    this.setState({ password2: event.target.value });
  };
  signup = () => {
    alert("SignUp" + this.state.email + ":" + this.state.password1);
  };
  render() {
    return (
      <div className={css.Login}>
        <h1>Бүртгэлийн форм</h1>
        <div>Та өөрийн мэдээллээ оруулна уу</div>
        <input
          onChange={this.changeEmail}
          type="text"
          placeholder="Имэйл хаяг"
        />
        <input
          onChange={this.changePassword1}
          type="password"
          placeholder="Нууц үг"
        />
        <input
          onChange={this.changePassword2}
          type="password"
          placeholder="Нууц үгээ давтана уу"
        />
        <Button text="БҮРТГҮҮЛЭХ" btnType="Success" daragdsan={this.signup} />
      </div>
    );
  }
}
export default Signup;
