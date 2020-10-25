import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import "./styles/common.scss";
import GlobalStyle from "./components/globalStyle";

import { Provider } from "react-redux";
import createStore from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = createStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <Router />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
