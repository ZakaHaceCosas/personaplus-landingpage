import React from 'react';

function Footer({ image }) {
    return (
        <footer>
            <div className='fsect'>
                <img src='/favicon.svg' alt="Logotipo de PersonaPlus" class="pplogo"></img>
                <p>Dale un PLUS a tu Persona</p>
            </div>
            <div className='fsect'>
                <h3 class="jeth">PersonaPlus</h3>
                <p>Hecho por <a href='https://github.com/ZakaHaceCosas'>@ZakaHaceCosas</a></p>
                <img src='/Z.LogoFull.White.svg' alt="Logo de ZakaHaceCosas" class="zlogo"></img>
            </div>
        </footer>
    )
}

export default Footer;
