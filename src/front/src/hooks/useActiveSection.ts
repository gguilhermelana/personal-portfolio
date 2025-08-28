import { useState, useEffect } from 'react';

export const useActiveSection = () => {
      const [activeSection, setActiveSection] = useState('');

      useEffect(() => {
            const handleScroll = () => {
                  const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
                  const headerOffset = 100;

                  for (let i = sections.length - 1; i >= 0; i--) {
                        const section = document.getElementById(sections[i]);
                        if (section) {
                              const rect = section.getBoundingClientRect();
                              if (rect.top <= headerOffset) {
                                    setActiveSection(sections[i]);
                                    break;
                              }
                        }
                  }

                  // Se estivermos no topo da página
                  if (window.scrollY < 100) {
                        setActiveSection('hero');
                  }
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Executar uma vez no início

            return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      return activeSection;
};
