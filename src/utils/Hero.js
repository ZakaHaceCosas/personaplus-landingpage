import React from 'react';

function Hero() {
    return (
        <section id="hero" className="bg-emerald-300 flex h-screen w-screen flex-row items-center justify-around">
            <img src="./hero.png"></img>
            <h1 className="font-mono text-white text-lg">Dale un <span className="font-bold text-9xl text-emerald-200"></span> a tu persona</h1>
        </section>
    )
}

export default Hero;