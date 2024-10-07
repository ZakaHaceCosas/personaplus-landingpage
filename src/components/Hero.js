import React from "react";
import { useTranslation } from "react-i18next";

function Hero() {
    const { t } = useTranslation();

    return (
        <div id="hero">
            <h1>
                {t("giveYourselfA")}
                <br />
                <span>PLUS</span>
            </h1>
            <img
                loading="lazy"
                src="https://raw.githubusercontent.com/ZakaHaceCosas/personaplus-landingpage/main/static/mockup_main.webp"
                type="image/webp"
                alt="PersonaPlus Brand Mockup, showing one Android device with PersonaPlus' main page open."
            />
        </div>
    );
}

export default React.memo(Hero);
