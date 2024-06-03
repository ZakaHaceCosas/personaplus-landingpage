import React from "react";
import "./App.css";
import Hero from "./utils/Hero";
import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation();

    return (
        <>
            <main>
                <Hero></Hero>
                <div className="stuffrow" id="lookatit">
                    <h1>{t("lookatit")}</h1>
                    <iframe
                        width="800"
                        height="450"
                        src="https://www.youtube-nocookie.com/embed/p1K5YXo8CAE?controls=0"
                        title="PersonaPlus trailer"
                        allow="autoplay; encrypted-media; gyroscope;"
                        allowFullScreen={false}
                    />
                </div>
                <section>
                    <div>
                        <h1 style={{ fontSize: "52px" }}>
                            {t("whatis")}{" "}
                            <span style={{ color: "#32FF80" }}>
                                PersonaPlus
                            </span>
                            ?
                        </h1>
                        <h3 style={{ fontWeight: 400 }}>
                            {t("whatispptextblock")}
                        </h3>
                    </div>
                    <img src="/mockup1.png" alt="Decorative." />
                </section>
                <section>
                    <div>
                        <h1 style={{ fontSize: "52px" }}>{t("howtouse")}</h1>
                        <h3 style={{ fontWeight: 400 }}>
                            {t("howtouseblock")}
                        </h3>
                    </div>
                    <img src="/mockup2.png" alt="Decorative." />
                </section>
                <section id="privacy">
                    <img
                        style={{ height: "60%" }}
                        src={`/${t("differentimg")}.png`}
                        alt="Decorative."
                    />
                    <div>
                        <h1>{t("different")}</h1>
                        <p>{t("differentblock")}</p>
                        <div className="btnArray">
                            <a
                                href="https://github.com/ZakaHaceCosas/personaplus"
                                className="btn btnBlau"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                See it on GitHub
                            </a>
                            <a
                                href="/privacy"
                                className="btn btnBlau"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Privacy manifest
                            </a>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <h1 style={{ fontSize: "52px" }}>
                            {t("wheredownload")}
                        </h1>
                        <h3 style={{ fontWeight: 400 }}>
                            {t("wheredownloadblock")}{" "}
                            <a href="#socials">YouTube</a>
                            {t("wheredownloadblockconnector")}{" "}
                            <a href="#socials">Discord</a>
                            {t("wheredownloadblock2")}
                        </h3>
                    </div>
                </section>
                <div className="stuffrow" id="socials">
                    <h1>{t("gyap")}</h1>
                    <p
                        style={{
                            maxWidth: "50vw",
                            textWrap: "wrap",
                            textAlign: "center",
                        }}
                    >
                        {t("solodev")}
                    </p>
                    <div className="stuffactualrow">
                        <a
                            className="btn btnRot"
                            href="https://youtube.com/@ZakaHaceCosas"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t("seeonyt")}
                        </a>
                        <a
                            className="btn btnBlau"
                            href="https://github.com/ZakaHaceCosas/personaplus"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t("ghrepo")}
                        </a>
                        <a
                            className="btn btnGran"
                            href="https://discord.gg/euVHrr46c6"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t("disc")}
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;
