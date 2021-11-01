import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import GlobalStyles from "./global-styles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
