import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter basename="/protofilo">
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/projects/:id" element={<ProjectDetails />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
