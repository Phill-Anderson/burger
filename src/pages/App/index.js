import React, { Component } from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrderPage";
import { Route, Switch } from "react-router-dom";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";
import LogOut from "../../components/Logout";
class App extends Component {
  state = {
    showSidebar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />

        <SideBar
          showSidebar={this.state.showSidebar}
          toggleSideBar={this.toggleSideBar}
        />

        <main className={css.Content}>
          {this.props.userId && <div>UserID: {this.props.userId}</div>}
          <Switch>
            <Route path="/signup" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/logout" component={LogOut} />
            <Route path="/orders" component={OrderPage} />
            <Route path="/ship" component={ShippingPage} />
            <Route path="/" component={BurgerPage} />
          </Switch>
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userId,
  };
};
export default connect(mapStateToProps)(App);
