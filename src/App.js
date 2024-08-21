import * as React from "react";
import "./App.css";
import Home from "./Home";
import Nav from "./utils/Nav";
import Footer from "./utils/Footer";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
    const { t } = useTranslation();

    return (
        <Router>
            <Nav>
                <Link to="/home">{t("home")}</Link>
                <Link
                    to="https://github.com/ZakaHaceCosas/personaplus/blob/main/PRIVACY.md"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t("privacy")}
                </Link>
            </Nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
            </Routes>
            <Footer />
            <Analytics />
            <SpeedInsights />
        </Router>
    );
}

export default App;
