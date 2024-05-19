import React from "react";

function Footer() {
    return (
        <footer>
            <div className='fsect'>
                <img src='/logoText.png' alt="Logotipo de PersonaPlus" className="pplogo" />
                <p>Give yourself a PLUS</p>
            </div>
            <div className='fsect'>
                <img src='/zakahacecosas.png' alt="Logo de ZakaHaceCosas" className="zlogo" />
                <p>Made by <a href='https://github.com/ZakaHaceCosas' rel="noopener noreferrer">@ZakaHaceCosas</a>.</p>
            </div>
        </footer>
    )
}

export default Footer;