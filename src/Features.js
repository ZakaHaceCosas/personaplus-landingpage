import React from 'react';
import './App.css';

function Features() {
    return (
        <>
            <main>
                <div className="stuffrow">
                    <h1>What makes PersonaPlus different?</h1>
                    <p>And why should you go for IT and not for any other health app?</p>
                </div>
                <div className="bentocontainer">
                    <div className="bento">
                        <div className="bentoitem bibig">
                            <img src='https://personaplus.vercel.app/feat_objs.png' alt='Decoration' />
                            <h1 style={{ fontWeight: 400 }}><b>Create <span>objectives</span></b> that fit your needs</h1>
                        </div>
                        <div className="bentocol">
                            <div className="bentoitem bireg">
                                <h1 style={{ fontWeight: 400 }}>Do <span>sessions</span>. <b>Get active.</b></h1>
                            </div>
                            <div className="bentoitem bism">
                                <h1 style={{ fontWeight: 400 }}><b>Create <span>objectives</span></b> that fit your needs</h1>
                            </div>
                            <div className="bentoitem bism">
                                <h1 style={{ fontWeight: 400 }}><b>Get <span>advice</span></b>. Real advice.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Features;
