import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./NavBar";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<NavBar />
		<div className="bg-amber-500 p-10" id="">heyya</div>
	</StrictMode>,
);
