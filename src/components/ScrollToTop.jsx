import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function ScrollToTop() {
    const location =useLocation();
    console.log('ScrollToTop')

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [location.pathname]);
    return null;
}
export default ScrollToTop;
