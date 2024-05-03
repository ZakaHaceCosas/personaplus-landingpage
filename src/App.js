import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Nav from './utils/Nav';
import Features from './Features';
import Footer from './utils/Footer';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    
    const changePage = (page) => {
        setCurrentPage(page);
    };
    
    return (
        <>
            <Nav>
                <>
                    {// eslint-disable-next-line
                    }<a href='#' onClick={() => changePage('home')}>Home</a>
                    {// eslint-disable-next-line
                    }<a href='#' onClick={() => changePage('features')}>Features</a>
                </>
            </Nav>
            {currentPage === 'home' && <Home />}
            {currentPage === 'features' && <Features />}
            <Footer></Footer>
        </>
    );
}

export default App;
