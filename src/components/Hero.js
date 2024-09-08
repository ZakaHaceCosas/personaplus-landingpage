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
            <picture>
                <source
                    srcSet="https://raw.githubusercontent.com/ZakaHaceCosas/personaplus-landingpage/main/static/mockup_main.webp"
                    type="image/webp"
                />
                <img
                    src="https://raw.githubusercontent.com/ZakaHaceCosas/personaplus-landingpage/main/static/mockup_main.png"
                    alt="PersonaPlus Brand Mockup, showing one Android device with PersonaPlus' main page open."
                />
            </picture>
        </div>
    );
}

export default Hero;
