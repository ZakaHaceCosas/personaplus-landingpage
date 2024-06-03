import React from "react";
import { useTranslation } from "react-i18next";

function Hero() {
    const { t } = useTranslation();

    return (
        <section id="hero">
            <h1>
                {t("giveyourselfa")}
                <br></br>
                <span>PLUS</span>
            </h1>
            <img
                src="/mainmockup.png"
                alt="PersonaPlus Brand Mockup, showing two iPhone devices with the app, each one a different page."
            />
        </section>
    );
}

export default Hero;
