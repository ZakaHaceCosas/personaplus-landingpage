import * as React from 'react';
import './App.css';
import Home from './Home';
import Nav from './utils/Nav';
import Features from './Features';
import Footer from './utils/Footer';

function App() {
    const getInitialPage = () => {
        const path = window.location.pathname.substring(1);
        return path || 'home';
    };
    
    const getPageFromUrl = () => {
        const path = window.location.pathname.substring(1);
        return path || 'home';
    };

    const [currentPage, setCurrentPage] = React.useState(getInitialPage());

    React.useEffect(() => {
        const handlePopState = () => {
            setCurrentPage(getPageFromUrl());
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    React.useEffect(() => {
        if (currentPage) {
            window.history.pushState(null, '', `/${currentPage}`);
        }
    }, [currentPage]);

    const changePage = (page) => {
        setCurrentPage(page);
    };
    
    return (
        <>
            <Nav>
                <>
                    {// eslint-disable-next-line
                    }<a href='/home' onClick={() => changePage('home')}>Home</a>
                    {// eslint-disable-next-line
                    }<a href='/features' onClick={() => changePage('features')}>Features</a>
                </>
            </Nav>
            {currentPage === 'home' && <Home />}
            {currentPage === 'features' && <Features />}
            <Footer></Footer>
        </>
    );
}

export default App;
