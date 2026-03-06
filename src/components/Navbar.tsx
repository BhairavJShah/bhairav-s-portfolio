import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDevice } from '../hooks/useDevice';
import { useLenis } from 'lenis/react';
import { Sun, Moon } from 'lucide-react';
import Magnetic from './Magnetic';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isMobile } = useDevice();
  const lenis = useLenis();
  const isClickScrolling = useRef(false);
  
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  // Handle manual scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      if (isClickScrolling.current || location.pathname === '/explore' || location.pathname.includes('/project/')) return;

      const sectionIds = ['home', 'about', 'projects', 'skills', 'contact'];
      let current = 'home';
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = id;
          }
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, location.pathname]);

  useEffect(() => {
    const path = location.pathname.replace('/', '');
    if (path && ['home', 'about', 'projects', 'skills', 'contact'].includes(path)) {
      const element = document.getElementById(path);
      if (element) {
        setTimeout(() => {
          if (lenis) lenis.scrollTo(element, { immediate: true });
          else element.scrollIntoView();
          setActiveSection(path);
        }, 100);
      }
    }
  }, [lenis, location.pathname]);

  const handleNavClick = (id: string) => {
    if (location.pathname === '/explore' || location.pathname.includes('/project/')) {
      navigate(`/${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      isClickScrolling.current = true;
      setActiveSection(id);
      
      if (lenis) {
        lenis.scrollTo(element, {
          offset: 0,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          onComplete: () => {
            isClickScrolling.current = false;
          }
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          isClickScrolling.current = false;
        }, 1000);
      }
    }
  };

  return (
    <header style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0,
      width: '100%', 
      display: 'flex', 
      justifyContent: 'center', 
      zIndex: 1000, 
      padding: isMobile ? '1rem' : '2.5rem',
      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      pointerEvents: 'none'
    }}>
      <nav 
        style={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: isMobile ? '2px' : '1rem',
          background: 'var(--card-bg)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          padding: isMobile ? '4px' : '0.8rem 1rem',
          borderRadius: '100px',
          border: '1px solid var(--panel-border)',
          boxShadow: scrolled ? '0 20px 50px var(--shadow)' : 'none',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'auto',
          maxWidth: isMobile ? '95vw' : 'auto',
          overflowX: isMobile ? 'auto' : 'visible',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
        className="nav-container"
      >
        {navLinks.map((link) => (
          <Magnetic key={link.id}>
            <button
              onClick={() => handleNavClick(link.id)}
              style={{ 
                padding: isMobile ? '0.6rem 0.8rem' : '0.8rem 2rem',
                fontSize: isMobile ? '0.75rem' : '1rem', 
                fontWeight: activeSection === link.id ? 800 : 600, 
                color: activeSection === link.id ? 'var(--bg-color)' : 'var(--text-main)',
                background: activeSection === link.id ? 'var(--text-main)' : 'transparent',
                borderRadius: '100px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s var(--transition-ease)',
                opacity: activeSection === link.id ? 1 : 0.6,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                display: 'inline-block',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                if (activeSection !== link.id) {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.background = 'var(--panel-bg)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== link.id) {
                  e.currentTarget.style.opacity = '0.6';
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {link.name}
            </button>
          </Magnetic>
        ))}

        {/* Vertical Divider */}
        <div style={{ width: '1px', height: '24px', background: 'var(--panel-border)', margin: isMobile ? '0 4px' : '0 0.5rem' }} />

        {/* Theme Toggle in Navbar */}
        <Magnetic>
          <button
            onClick={toggleTheme}
            style={{
              padding: isMobile ? '0.6rem' : '0.8rem',
              background: 'transparent',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              opacity: 0.8
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.background = 'var(--panel-bg)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.background = 'transparent'; }}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={isMobile ? 18 : 20} /> : <Moon size={isMobile ? 18 : 20} />}
          </button>
        </Magnetic>
      </nav>
    </header>
  );
};

export default Navbar;
