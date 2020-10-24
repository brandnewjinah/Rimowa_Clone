import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import "./styles/common.scss";
import { Provider } from "react-redux";
import store from "./store/store";
import GlobalStyle from "./components/globalStyle";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router />
  </Provider>,
  document.getElementById("root")
);
