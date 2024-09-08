import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="brands">
                <div className="fsect">
                    <img
                        src="/logoText.png"
                        alt="Logotipo de PersonaPlus"
                        className="pplogo"
                    />
                    <p>"{t("gyap")}"</p>
                </div>
                <div className="fsect">
                    <img
                        src="/zakahacecosas.png"
                        alt="Logo de ZakaHaceCosas"
                        className="zlogo"
                    />
                    <p>
                        {t("madeby")}{" "}
                        <a
                            href="https://bento.me/ZakaHaceCosas"
                            rel="noopener noreferrer"
                        >
                            @ZakaHaceCosas
                        </a>
                        .
                    </p>
                </div>
            </div>
            <div className="social-icons">
                <a
                    href="https://www.youtube.com/playlist?list=PLdif1flfmG__g_a1QSmBNnSh_6pAeRizW"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://raw.githubusercontent.com/ZakaHaceCosas/personaplus-landingpage/main/static/svg/icons8-youtube.svg"
                        alt="YouTube button"
                    />
                </a>
                <a
                    href="https://discord.gg/euVHrr46c6"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://raw.githubusercontent.com/ZakaHaceCosas/personaplus-landingpage/main/static/svg/icons8-discord.svg"
                        alt="Discord button"
                    />
                </a>
                <a
                    href="https://github.com/ZakaHaceCosas/personaplus"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://raw.githubusercontent.com/ZakaHaceCosas/personaplus-landingpage/main/static/svg/icons8-github.svg"
                        alt="GitHub button"
                    />
                </a>
            </div>
            <p>
                {t("opensource")}
                <a
                    href="https://github.com/ZakaHaceCosas/personaplus-landingpage"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    ZakaHaceCosas/personaplus-landingpage
                </a>
            </p>
        </footer>
    );
}

export default Footer;
