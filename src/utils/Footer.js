import React from 'react';

function Footer({ image }) {
    return (
        <footer>
            <div className='fsect'>
                <h1 className="jeth">PersonaPlus</h1>
                <img src='/favicon.svg' alt="Logotipo de PersonaPlus" className="pplogo" />
                <p>Dale un PLUS a tu Persona</p>
            </div>
            <div className='fsect'>
                <img src='/Z.LogoFull.White.svg' alt="Logo de ZakaHaceCosas" className="zlogo" />
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
