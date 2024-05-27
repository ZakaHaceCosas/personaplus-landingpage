import React from 'react';
import './App.css';

function Features() {
    return (
        <>
            <main>
                <div className="stuffrow">
                    <h1>What makes PersonaPlus different?</h1>
                    <p style={{ maxWidth: "40vw", textWrap: "wrap", textAlign: "center" }}>And why should you go for IT and not for any other health app?</p>
                </div>
                <section>
                    <img src='https://personaplus.vercel.app/feat_objs.png' className='bentoimage' alt='Decoration' />
                    <div>
                        <h1 style={{ fontWeight: 400 }}><b>Create <span>objectives</span></b> that fit your needs</h1>
                    </div>
                </section>
                <section>
                    <img src='https://personaplus.vercel.app/feat_sess.png' className='bentoimage' alt='Decoration' />
                    <div>
                        <h1 style={{ fontWeight: 400 }}>Do <span>sessions</span>. <b>Get active.</b></h1>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Features;
