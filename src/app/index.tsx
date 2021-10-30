import React from "react";
import "./index.css";
import "./styles/vars.css";
import { HashRouter } from "react-router-dom";
import Router from "./routes/Router";
const App = () => {
  return (
    <HashRouter basename="/">
      <Router />
    </HashRouter>
  );
};

export default App;
