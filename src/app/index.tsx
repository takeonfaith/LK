import React from "react";
import { HashRouter } from "react-router-dom";
import { ModalProvider } from "../features/modal";
import SettingsProvider from "../shared/lib/contexts/settings-context";
import Router from "./routes/Router";

const App = () => {
  return (
    <ModalProvider>
      <SettingsProvider>
        <HashRouter basename="/">
          <Router />
        </HashRouter>
      </SettingsProvider>
    </ModalProvider>
  );
};

export default App;
