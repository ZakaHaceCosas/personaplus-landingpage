import React from "react";
import { useTranslation } from "react-i18next";

function GetSvgIcon(icon) {
    if (icon === "youtube") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="40px"
                height="40px"
            >
                <path
                    fill="#FFFFFF"
                    d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"
                />
            </svg>
        );
    } else if (icon === "discord") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="40px"
                height="40px"
            >
                <path
                    fill="#FFFFFF"
                    d="M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"
                />
            </svg>
        );
    } else if (icon === "github") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40px"
                height="40px"
            >
                <path
                    fill="#FFFFFF"
                    d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"
                />
            </svg>
        );
    }
}

function SocialIcons() {
    return (
        <div className="social-icons">
            <a
                href="https://www.youtube.com/playlist?list=PLdif1flfmG__g_a1QSmBNnSh_6pAeRizW"
                target="_blank"
                rel="noopener noreferrer"
            >
                {GetSvgIcon("youtube")}
            </a>
            <a
                href="https://discord.gg/euVHrr46c6"
                target="_blank"
                rel="noopener noreferrer"
            >
                {GetSvgIcon("discord")}
            </a>
            <a
                href="https://github.com/ZakaHaceCosas/personaplus"
                target="_blank"
                rel="noopener noreferrer"
            >
                {GetSvgIcon("github")}
            </a>
        </div>
    );
}

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="brands">
                <div className="footerSection">
                    <img src="/logoText.png" alt="PersonaPlus logo" />
                    <p>"{t("giveYourselfAPlus")}"</p>
                </div>
                <div className="footerSection">
                    <img src="/zakahacecosas.png" alt="ZakaHaceCosas logo" />
                    <p>
                        {t("siteInfo.madeBy")}{" "}
                        <a
                            href="https://zakahacecosas.github.io"
                            rel="noopener noreferrer"
                        >
                            @ZakaHaceCosas
                        </a>
                        .
                    </p>
                </div>
            </div>
            <div className="footerStuff">
                <SocialIcons />
                <p>
                    {t("siteInfo.openSource")}{" "}
                    <a
                        href="https://github.com/ZakaHaceCosas/personaplus-landingpage"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        ZakaHaceCosas/personaplus-landingpage
                    </a>
                </p>
            </div>
        </footer>
    );
}
