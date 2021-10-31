import React from "react";
import { HashRouter } from "react-router-dom";

import Router from "./routes/Router";
import { ModalProvider } from "../features/modal";

import "./index.css";
import "./styles/vars.css";

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
