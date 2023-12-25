import React from 'react';

function Footer({ image }) {
    return (
        <footer>
            <section className='fsect'>
                <img src='/favicon.svg'></img>
                <p>Dale un PLUS a tu Persona</p>
            </section>
            <section className='fsect'>
                <h3>PersonaPlus</h3>
                <p>Hecho por <a href='https://github.com/ZakaHaceCosas'>@ZakaHaceCosas</a></p>
                <img src='/Z.LogoFull.White.svg'></img>
            </section>
        </footer>
    )
}

export default Footer;