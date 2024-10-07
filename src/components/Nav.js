import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";

export default function Nav({ children }) {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav>
            <h1 className="brandFont" id="bigLogo">
                PersonaPlus
            </h1>
            <img src="/logo256.png" id="smallLogo" alt="PersonaPlus logo" />
            <div className="navLinks">
                {children}
                <div className="dropdown">
                    <Button
                        customStyle="ACE"
                        isDropdown={true}
                        action={toggleDropdown}
                        text={t("navigation.language")}
                    />
                    {dropdownOpen && (
                        <div className="dropdown-content">
                            <a
                                onClick={() => changeLanguage("en")}
                                href="/"
                                rel="noopener noreferrer"
                            >
                                English
                            </a>
                            <a
                                onClick={() => changeLanguage("es")}
                                href="/"
                                rel="noopener noreferrer"
                            >
                                Español
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
