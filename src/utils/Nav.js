import React from "react";

function Nav({children}) {
    return (
        <nav>
            <h1 className="jeth">PersonaPlus</h1>
            <div className="as">
                {children}
                {
                    /*
                <a href="https://github.com/ZakaHaceCosas/personaplus/" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href="https://youtube.com/@ZakaHaceCosas" target="_blank" rel="noopener noreferrer">
                    YouTube
                </a>
                    */
                }
            </div>
        </nav>
    )
;}

export default Nav;