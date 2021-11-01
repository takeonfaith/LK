import React from "react";
import { HashRouter } from "react-router-dom";
import { ModalProvider } from "../features/modal";
import Router from "./routes/Router";

const App = () => {
  return (
    <ModalProvider>
      <HashRouter basename="/">
        <Router />
      </HashRouter>
    </ModalProvider>
  );
};

export default App;
