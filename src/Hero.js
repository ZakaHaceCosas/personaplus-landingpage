import React from 'react';

function Hero({ image }) {
    return (
        <section id="hero" className="bg-emerald-100 flex h-screen flex-row items-center justify-around">
            <img src={image} className="h-auto object-scale-down w-80"></img>
            <h1 className="font-mono text-black text-lg text-center">Dale un<br></br><span className="font-bold text-9xl text-green-400">PLUS</span><br></br>a tu persona</h1>
        </section>
    )
}

export default Hero;