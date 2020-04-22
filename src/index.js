import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import burgerReducer from "./redux/reducer/burgerReducer";
const loggerMiddleware = (store) => {
  return (next) => {
    return (action) => {
      console.log("MyLoggerMiddleWare: Dispatching:", action);
      console.log("MyLoggerMiddleWare: State Before", store.getState());
      const result = next(action);
      console.log("MyLoggerMiddleWare: State After", store.getState());
      return result;
    };
  };
};
const store = createStore(burgerReducer, applyMiddleware(loggerMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
