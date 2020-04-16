import React, { Component } from "react";
import css from "./style.module.css";

import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";

class App extends Component {
  state = {
    showSideBar: false,
  };

  // өмнөх утгаас нь хамааруулж state -ийг өөрчлөх тохиолдолд setState - ийн өөр хувилбарыг ашигладаг
  // энэ нь доорх хэлбэрээр бичигдэнэ. setState - ийг дуудахын өмнө нь state ямар байсан бэ гэдгийг react бидэнд prevState хувьсагчаар өгдөг
  // state - ийг буцаахдаа дандаа шинэ обьект буцаах байдлаар бичиж өгөх ёстойг санаарай
  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSideBar: !prevState.showSideBar };
    });
  };
  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar
          showSideBar={this.state.showSideBar}
          toggleSideBar={this.toggleSideBar}
        />
        <main className={css.Content}>
          <BurgerPage />
        </main>
      </div>
    );
  }
}

export default App;
