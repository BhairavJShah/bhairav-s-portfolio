import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnicalMetrics from './components/TechnicalMetrics';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';
import VibeBackground from './components/VibeBackground';
import CaseStudy from './components/CaseStudy';
import './styles/Global.css';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  return null;
};

const Home = () => (
  <>
    <Hero />
    <TechnicalMetrics />
    <Projects />
    <About />
    <Skills />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', position: 'relative' }}>
        <VibeBackground />
        <CustomCursor />
        <ThemeToggle />
        <Navbar />
        
        <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<CaseStudy />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        <style>{`
          html {
            scroll-behavior: smooth;
            background-color: var(--bg-color);
          }
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            background-color: var(--bg-color);
          }
          #root { width: 100%; }
          ::selection {
            background-color: #fff;
            color: #000;
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;
