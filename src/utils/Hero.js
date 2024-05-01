import React from 'react';

function Hero({ image }) {
    return (
        <section id="hero">
            <h1>GIVE YOURSELF A<br></br><span>PLUS</span></h1>
            <img src={image}></img>
        </section>
    )
}

export default Hero;
