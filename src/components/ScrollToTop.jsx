import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame to ensure scroll happens after render
    const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const id = requestAnimationFrame(scrollToTop);
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}

export default ScrollToTop;