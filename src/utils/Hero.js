import React from 'react';

function Hero({ image }) {
    return (
        <section id="hero">
            <img src={image}></img>
            <h1>Dale un<br></br><span>PLUS</span><br></br>a tu persona</h1>
        </section>
    )
}

export default Hero;