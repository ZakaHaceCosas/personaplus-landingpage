import React from 'react';
import './App.css';
import Hero from './utils/Hero';

function Home() {
    return (
        <>
            <main>
                <Hero></Hero>
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
        </>
    );
}

export default Home;
