import React from 'react';
import './App.css';

function Home() {
    return (
        <>
            <nav>
                <h1 className="jeth">PersonaPlus</h1>
                <div className="as">
                    <a href="https://github.com/ZakaHaceCosas/personaplus/" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://youtube.com/@ZakaHaceCosas" target="_blank" rel="noopener noreferrer">
                        YouTube
                    </a>
                </div>
            </nav>
            <main>
                <section id="hero">
                <h1>
                    GIVE YOURSELF A<br></br><span>PLUS</span>
                </h1>
                <img src="/PERSONAPLUS_BRANDMOCKUP_1.png" alt="PersonaPlus Brand Mockup, showing two iPhone devices with the app, each one a different page." />
            </section>
            <section>
                <img src="/hero.png" alt="Different elements, such as a 'Lets do it now!' button or a progress table, representing basic features from the app. Near those lays a heartbeat icon."/>
                <div>
                    <h1>Give your health a PLUS</h1>
                    <p>
                        With routines, controls, guides, and many others, you got all you need to give your health more.
                    </p>
                </div>
            </section>
            <section>
                <img src="./privacy_hero.png" alt="Privacy Hero"/>
                <div>
                    <h1>This one is different</h1>
                    <p>
                        PersonaPlus has NO ads at all, nor data selling / tracking of any kind. It is a piece of free, open source software.
                    </p>
                    <a href="https://github.com/ZakaHaceCosas/personaplus" className="btn btnBlau" target='_blank' rel='noopener noreferrer'>
                        See it on GitHub
                    </a>
                </div>
            </section>
            <div className="stuffrow">
                <h1>Give yourself a PLUS</h1>
                <p>Work in progress. Coming <i>soon</i>.</p>
                <div className="stuffactualrow">
                    <a className="btn btnRot" href="https://youtube.com/@ZakaHaceCosas" target="_blank" rel="noopener noreferrer">
                        See the progress on YouTube
                    </a>
                    <a className="btn btnBlau" href="https://github.com/ZakaHaceCosas/personaplus" target="_blank" rel="noopener noreferrer">
                        GitHub repository
                    </a>
                </div>
            </div>
        </main>
        <footer>
            <div className='fsect'>
                <img src='/logoText.png' alt="Logotipo de PersonaPlus" className="pplogo" />
                <p>Give yourself a PLUS</p>
            </div>
            <div className='fsect'>
                <img src='/zakahacecosas.png' alt="Logo de ZakaHaceCosas" className="zlogo" />
                <p>Hecho por <a href='https://github.com/ZakaHaceCosas' rel="noopener noreferrer">@ZakaHaceCosas</a>.</p>
                <hr />
                <p><b>Más de ZakaHaceCosas:</b></p>
                <div className="stuffactualrow">
                    <a className="btn btnGran" href="https://youtube.com/@ZakaHaceCosas" target="_blank" rel="noopener noreferrer">
                        Canal de YouTube
                    </a>
                    <a className="btn btnGran" href="https://zakaprofeweb.vercel.app/" target="_blank" rel="noopener noreferrer">
                        ZakaProfe
                    </a>
                </div>
            </div>
        </footer>
    </>
  );
}

export default Home;
