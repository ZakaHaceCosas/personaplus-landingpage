import React from "react";
import "../css/App.css";
import Hero from "../components/Hero";
import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation();

    return (
        <main>
            <Hero />
            <section>
                <div className="textDiv">
                    <h1 style={{ fontSize: "52px" }}>{t("appInfo.whatIs")}</h1>
                    <h2 style={{ fontWeight: 400 }}>
                        {t("appInfo.whatIsDescription")}
                    </h2>
                </div>
                {/* <div className="imagediv">
                    <img src="/mockup1.png" alt="Decorative." />
                </div> */}
            </section>
            {/* THESE REMAIN HIDDEN UNTIL WE ACTUALLY GOT SOMETHING TO SHOW <section>
                <div className="textDiv">
                    <h1 style={{ fontSize: "52px" }}>{t("howtouse")}</h1>
                    <h3 style={{ fontWeight: 400 }}>{t("howtouseblock")}</h3>
                </div>
                <div className="imagediv">
                    <img src="/mockup2.png" alt="Decorative." />
                    <p
                        style={{
                            maxWidth: "50vw",
                            wordWrap: "break-word",
                            textAlign: "center",
                            fontSize: "xx-small",
                            opacity: 0.5,
                        }}
                    >
                        {t("mockups")}
                    </p>
                </div>
            </section>
            <section id="privacy">
                <div className="imagediv">
                    <img
                        style={{ height: "60%" }}
                        src={`/${t("differentimg")}.png`}
                        alt="Decorative."
                    />
                </div>
                <div className="textDiv">
                    <h1>{t("different")}</h1>
                    <p>{t("differentblock")}</p>
                    <a
                        href="https://github.com/ZakaHaceCosas/personaplus"
                        className="btn btnBlau"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("community.githubRepo")}
                    </a>
                </div>
            </section> */}
            <div className="rowWithStuff" id="socials">
                <h1>{t("giveYourselfAPlus")}</h1>
                <p
                    style={{
                        maxWidth: "50vw",
                        textWrap: "wrap",
                        textAlign: "center",
                    }}
                >
                    {t("downloads.downloadNow")}
                </p>
                <div className="stuffactualrow">
                    <a
                        className="btn btnGran"
                        href="https://github.com/ZakaHaceCosas/personaplus/releases/latest"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("downloads.downloadButton")}
                    </a>
                </div>
                <p
                    style={{
                        maxWidth: "40vw",
                        textWrap: "wrap",
                        textAlign: "center",
                        fontSize: "xx-small",
                        opacity: 0.5,
                    }}
                >
                    {t("downloads.downloadDisclaimer")}
                </p>
            </div>
        </main>
    );
}

export default Home;
