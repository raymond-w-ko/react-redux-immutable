"use strict";

import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";

import store from "./store";
import App from "./components/App";

// entry point
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
