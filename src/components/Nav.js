import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Nav({ children }) {
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
            <h1 className="brandFont" id="logobig">
                PersonaPlus
            </h1>
            <img src="/logo256.png" id="logosmall" alt="PersonaPlus logo" />
            <div className="navLinks">
                {children}
                <div className="dropdown">
                    <button
                        className="button btnBlau dropbtn"
                        onClick={toggleDropdown}
                    >
                        {t("lang")}
                    </button>
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

export default Nav;
