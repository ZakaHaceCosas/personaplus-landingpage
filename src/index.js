import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";
import "./utils/i18n";

const container = document.getElementById("root");

if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<App />);

    reportWebVitals(sendToVercelAnalytics);
} else {
    console.error("No root");
}
