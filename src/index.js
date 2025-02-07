import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// const initialState = [
//   {
//     id: 1,
//     text: "React",
//     complited: false,
//   },
//   {
//     id: 2,
//     text: "JavaScript",
//     complited: false,
//   },
// ];

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "DELETE":
//       return state.filter((item) => item.id !== action.payload);
//     case "ADD":
//       return [...state, action.payload];

//     default:
//       return state;
//   }
// };
// const store = createStore(reducer);
