import React from 'react';

function Footer({ image }) {
    return (
        <footer>
            <div className='fsect'>
                <img src='/logoText.png' alt="Logotipo de PersonaPlus" className="pplogo" />
                <p>Give yourself a PLUS</p>
            </div>
            <div className='fsect'>
                <img src='/zakahacecosas.png' alt="Logo de ZakaHaceCosas" className="zlogo" />
                <p>Hecho por <a href='https://github.com/ZakaHaceCosas' rel="noopener noreferrer">@ZakaHaceCosas</a>.<br />
                    <b>Más de ZakaHaceCosas:</b></p>
                <ul>
                    <li><a href="https://youtube.com/@ZakaHaceCosas" target="_blank" rel="noopener noreferrer">Canal de YouTube</a></li>
                    <li><a href="https://youtube.com/@ZakaProfe" target="_blank" rel="noopener noreferrer">ZakaProfe</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
