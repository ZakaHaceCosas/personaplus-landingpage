import * as React from "react";
import "./css/App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
    const { t } = useTranslation();

    return (
        <Router>
            <Nav>
                <Link to="/home">{t("navigation.home")}</Link>
                <Link
                    to="https://github.com/ZakaHaceCosas/personaplus/blob/main/PRIVACY.md"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t("navigation.privacy")}
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
