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
