import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Styles/font/Tungsten-Bold.ttf";
import "./Styles/font.css";
import { GlobalStyles } from "./Styles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <GlobalStyles />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
