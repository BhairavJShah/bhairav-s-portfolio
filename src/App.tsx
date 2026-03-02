import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', width: '100%', position: 'relative' }}>
        <VibeBackground />
        <CustomCursor />
        <ThemeToggle />
        <Navbar />
        
        <main style={{ width: '100%', position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={
              <div style={{ width: '100%' }}>
                <Hero />
                <TechnicalMetrics />
                <Projects />
                <About />
                <Skills />
                <Contact />
              </div>
            } />
            <Route path="/project/:id" element={<CaseStudy />} />
            <Route path="*" element={
              <div style={{ width: '100%' }}>
                <Hero />
                <TechnicalMetrics />
                <Projects />
                <About />
                <Skills />
                <Contact />
              </div>
            } />
          </Routes>
        </main>

        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            background-color: var(--bg-color) !important;
            color: var(--text-primary);
            overflow-x: hidden;
            width: 100%;
          }
          #root { width: 100%; min-height: 100vh; display: block !important; }
        `}</style>
      </div>
    </Router>
  );
}

export default App;
