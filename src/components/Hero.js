import React from "react";
import { useTranslation } from "react-i18next";

function Hero() {
    const { t } = useTranslation();

    return (
        <div id="hero">
            <h1>
                {t("giveyourselfa")}
                <br></br>
                <span>PLUS</span>
            </h1>
            <img
                src="https://raw.githubusercontent.com/ZakaHaceCosas/personaplus-landingpage/main/static/mockup_main.png"
                alt="PersonaPlus Brand Mockup, showing one Android device with PersonaPlus' main page open."
            />
        </div>
    );
}

export default Hero;
