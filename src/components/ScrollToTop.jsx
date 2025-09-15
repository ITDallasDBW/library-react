import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

const ScrollToTop = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0,0); //Scrolls instantly to top
    }, [pathname]); //Re-run effect whenever pathname changes

    return null;
    //nothing to return visually
}

export default ScrollToTop;
//from AI Overview. https://www.google.com/search?q=react+scrollTo+top&sca_esv=6b419d715691fe69&rlz=1C1CHBF_enUS1157US1157&sxsrf=AE3TifM5_hbT3BI51ePig8qIChLuR6diHg%3A1757951771728&ei=GzfIaI6JLNynmtkPqa2hiAk&ved=0ahUKEwjOgovXkNuPAxXckyYFHalWCJEQ4dUDCBI&uact=5&oq=react+scrollTo+top&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnJlYWN0IHNjcm9sbFRvIHRvcDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5IhjZQAFj-MnAAeACQAQCYAV-gAfMFqgECMTG4AQPIAQD4AQGYAgugAqoGwgIKECMYgAQYJxiKBcICBhAAGAcYHsICChAAGIAEGEMYigXCAgsQABiABBiRAhiKBcICBxAjGLACGCfCAgcQABiABBgNwgIHEAAYqQYYHpgDAJIHBDEwLjGgB4pGsgcEMTAuMbgHqgbCBwQyLTExyAcw&sclient=gws-wiz-serp
