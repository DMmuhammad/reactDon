import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = 0;
const reducer = (state = initialState, action) => {
  if (action.type === "PLUS") {
    return state + 1;
  }
  if (action.type === "MINUS") {
    if (state > 0) {
      return state - 1;
    }
  }
  if (action.type === "REFRESH") {
    return (state = 0);
  }
  return state;
};
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
