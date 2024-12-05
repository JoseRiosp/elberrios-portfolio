import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToSection() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
}

export default ScrollToSection;
