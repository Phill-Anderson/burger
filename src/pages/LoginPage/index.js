import React, { Component } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  changePassword1 = (event) => {
    this.setState({ password1: event.target.value });
  };

  login = () => {
    alert("SignUp" + this.state.email + ":" + this.state.password1);
  };
  render() {
    return (
      <div className={css.Login}>
        <input
          onChange={this.changeEmail}
          type="text"
          placeholder="Имэйл хаяг"
        />
        <input
          onChange={this.changeEmail}
          type="password"
          placeholder="Нууц үг"
        />
        <Button text="Логин" btnType="Success" daragdsan={this.login} />
      </div>
    );
  }
}
export default Login;
