import React from 'react';

function Hero({ image }) {
    return (
        <section id="hero">
            <img src={image}></img>
            <h1>GIVE YOURSELF<br></br><span>PLUS</span></h1>
        </section>
    )
}

export default Hero;
