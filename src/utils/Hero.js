import React from 'react';

function Hero() {
    return (
        <section id="hero" className="bg-emerald-100 flex h-screen w-screen flex-row items-center justify-around">
            <img src="./hero.png"></img>
            <h1 className="font-mono text-white text-lg">Dale un<br></br><span className="font-bold text-9xl text-green-400">PLUS</span><br></br>a tu persona</h1>
        </section>
    )
}

export default Hero;