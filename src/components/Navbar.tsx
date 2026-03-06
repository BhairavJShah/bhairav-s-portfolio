import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDevice } from '../hooks/useDevice';
import { useLenis } from 'lenis/react';
import Magnetic from './Magnetic';
import logo from '../assets/logo.png';

const Navbar = () => {
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
      
      // We check from the bottom up to find the lowest section that has passed the mid-point
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is above the middle of the screen
          if (rect.top <= window.innerHeight / 2) {
            current = id;
          }
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
        // Update URL silently without adding to history
        window.history.replaceState(null, '', `/${current}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, location.pathname]);

  // Initial scroll to section if URL has a path
  useEffect(() => {
    const path = location.pathname.replace('/', '');
    if (path && ['home', 'about', 'projects', 'skills', 'contact'].includes(path)) {
      const element = document.getElementById(path);
      if (element) {
        // Wait for preloader/initial load
        setTimeout(() => {
          if (lenis) lenis.scrollTo(element, { immediate: true });
          else element.scrollIntoView();
          setActiveSection(path);
        }, 100);
      }
    }
  }, [lenis]);

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
            window.history.replaceState(null, '', `/${id}`);
          }
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          isClickScrolling.current = false;
          window.history.replaceState(null, '', `/${id}`);
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
      padding: isMobile ? '1.5rem' : '2.5rem',
      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      pointerEvents: 'none'
    }}>
      <nav 
        style={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: isMobile ? '0.5rem' : '1rem',
          background: 'var(--card-bg)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          padding: isMobile ? '0.6rem 1rem' : '0.8rem 1rem',
          borderRadius: '100px',
          border: '1px solid var(--panel-border)',
          boxShadow: scrolled ? '0 20px 50px var(--shadow)' : 'none',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'auto'
        }}
      >
        <Magnetic>
          <div 
            onClick={() => handleNavClick('home')}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '0 1rem', 
              cursor: 'pointer',
              height: isMobile ? '30px' : '40px',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img 
              src={logo} 
              alt="Logo" 
              style={{ 
                height: '100%', 
                width: 'auto',
                borderRadius: '8px'
              }} 
            />
          </div>
        </Magnetic>

        {navLinks.map((link) => (
          <Magnetic key={link.id}>
            <button
              onClick={() => handleNavClick(link.id)}
              style={{ 
                padding: isMobile ? '0.6rem 1rem' : '0.8rem 2rem',
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
                whiteSpace: 'nowrap'
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
      </nav>
    </header>
  );
};

export default Navbar;
