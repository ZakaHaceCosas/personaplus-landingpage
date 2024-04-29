import React from 'react';

function Footer({ image }) {
    return (
        <footer>
            <div className='fsect'>
                <h1 class="jeth">PersonaPlus</h1>
                <img src='/favicon.svg' alt="Logotipo de PersonaPlus" class="pplogo"></img>
                <p>Dale un PLUS a tu Persona</p>
            </div>
            <div className='fsect'>
                <img src='/Z.LogoFull.White.svg' alt="Logo de ZakaHaceCosas" class="zlogo"></img>
                <p>Hecho por <a href='https://github.com/ZakaHaceCosas'>@ZakaHaceCosas</a>.<br><b>Más de ZakaHaceCosas:</b></p>
                <ul>
                    <li><a href="https://youtube.com/@ZakaHaceCosas" target="_blank">Canal de YouTube</a></li>
                    <li><a href="https://youtube.com/@ZakaProfe" target="_blank">ZakaProfe</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
