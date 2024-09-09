import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";
import "./utils/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

reportWebVitals(sendToVercelAnalytics);
