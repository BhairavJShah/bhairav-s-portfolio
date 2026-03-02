import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Global.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', href: '/#home', id: 'home' },
    { name: 'Projects', href: '/#projects', id: 'projects' },
    { name: 'About', href: '/#about', id: 'about' },
    { name: 'Skills', href: '/#skills', id: 'skills' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ];

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div style={{ position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'center', zIndex: 1000, pointerEvents: 'none' }}>
      <motion.nav 
        style={{ 
          width: 'min(1300px, 95%)', 
          borderRadius: '20px', 
          padding: '0.6rem 2rem', 
          marginTop: '24px',
          backgroundColor: 'var(--nav-bg)',
          backdropFilter: 'blur(24px)',
          border: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pointerEvents: 'auto',
          position: 'relative'
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.05em' }}>
          Bhairav.J shah<span style={{ opacity: 0.4 }}>.</span>
        </Link>
        
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }} className="desktop-only">
          {navLinks.map((link) => (
            <motion.a 
              key={link.name} 
              href={link.href} 
              style={{ 
                position: 'relative',
                fontSize: '0.85rem', 
                fontWeight: 500, 
                color: activeSection === link.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                padding: '0.6rem 1.2rem',
                borderRadius: '12px',
                transition: 'color 0.3s ease'
              }}
              whileHover={{ color: 'var(--text-primary)' }}
            >
              {activeSection === link.id && (
                <motion.div 
                  layoutId="active-pill"
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    backgroundColor: 'var(--pill-bg)', 
                    borderRadius: '12px',
                    zIndex: -1 
                  }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ position: 'fixed', inset: 0, backgroundColor: 'var(--bg-color)', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem', pointerEvents: 'auto' }}
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }} onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
          <button onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '40px', right: '40px', background: 'none', border: 'none', color: 'var(--text-primary)' }}>
            <X size={32} />
          </button>
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: block !important; }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
