import React from 'react';
import './App.css';
import Hero from './utils/Hero';

function Home() {
    return (
        <>
            <main>
                <Hero></Hero>
                <div className="stuffrow" id='lookatit'>
                    <h1>Take a look at it</h1>
                    <iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/p1K5YXo8CAE?controls=0" title="PersonaPlus trailer" frameborder="0" allow="autoplay; encrypted-media; gyroscope;" allowfullscreen="false" />
                </div>
                <section>
                    <img src="/hero.png" alt="Different elements, such as a 'Lets do it now!' button or a progress table, representing basic features from the app. Near those lays a heartbeat icon."/>
                    <div>
                        <h1>Give your health a PLUS</h1>
                        <p>
                            With routines, controls, guides, and many others, you got all you need to give your health more.
                        </p>
                    </div>
                </section>
                <section id='privacy'>
                    <img src="./privacy_hero.png" alt="Privacy Hero"/>
                    <div>
                        <h1>This one is different</h1>
                        <p>
                            PersonaPlus has NO ads at all, nor data selling / tracking of any kind. It is a piece of free, open source software.
                        </p>
                        <div className="btnArray">
                            <a href="https://github.com/ZakaHaceCosas/personaplus" className="btn btnBlau" target='_blank' rel='noopener noreferrer'>
                                See it on GitHub
                            </a>
                            <a href="https://github.com/ZakaHaceCosas/personaplus/blob/main/PRIVACY.md" className="btn btnBlau" target='_blank' rel='noopener noreferrer'>
                                Privacy manifest
                            </a>
                        </div>
                    </div>
                </section>
                <div className="stuffrow">
                    <h1>Give yourself a PLUS</h1>
                    <p style={{ maxWidth: "50vw", textWrap: "wrap", textAlign: "center" }}>PersonaPlus is a Work in progress, I am still developing it. You can watch our progress, contribute to our repo, or get in the Discord server to hang out.</p>
                    <div className="stuffactualrow">
                        <a className="btn btnRot" href="https://youtube.com/@ZakaHaceCosas" target="_blank" rel="noopener noreferrer">
                            See the progress on YouTube
                        </a>
                        <a className="btn btnBlau" href="https://github.com/ZakaHaceCosas/personaplus" target="_blank" rel="noopener noreferrer">
                            GitHub repository
                        </a>
                        <a className="btn btnGran" href="https://discord.gg/euVHrr46c6" target="_blank" rel="noopener noreferrer">
                            Discord server
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;
