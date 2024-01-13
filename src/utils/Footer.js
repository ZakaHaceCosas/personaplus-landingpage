import React from 'react';

function Footer({ image }) {
    return (
        <footer>
            <div className='fsect' style={{ width: '30%' }}>
                <img src='/favicon.svg' alt="Logotipo de PersonaPlus"></img>
                <p>Dale un PLUS a tu Persona</p>
            </div>
            <div className='fsect' style={{ width: '30%' }}>
                <h3>PersonaPlus</h3>
                <p>Hecho por <a href='https://github.com/ZakaHaceCosas'>@ZakaHaceCosas</a></p>
                <img src='/Z.LogoFull.White.svg' alt="Logo de ZakaHaceCosas"></img>
            </div>
        </footer>
    )
}

export default Footer;
