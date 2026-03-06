import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactLenis from 'lenis/react';
import { AnimatePresence } from 'framer-motion';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ExploreProjects from './components/ExploreProjects';
import CaseStudy from './components/CaseStudy';
import ThemeToggle from './components/ThemeToggle';

import './styles/Global.css';

const Home = () => (
  <div style={{ position: 'relative', zIndex: 10, width: '100%' }}>
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as 'light' | 'dark') || 'dark';
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
        <div style={{ minHeight: '100vh', width: '100%', position: 'relative', backgroundColor: 'var(--bg-color)', transition: 'background-color 0.5s ease' }}>
          
          <AnimatePresence mode="wait">
            {isLoading && <Preloader key="preloader" />}
          </AnimatePresence>

          <Navbar />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          
          <main style={{ position: 'relative', zIndex: 10, width: '100%' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<Home />} />
              <Route path="/projects" element={<Home />} />
              <Route path="/skills" element={<Home />} />
              <Route path="/contact" element={<Home />} />
              <Route path="/explore" element={<ExploreProjects />} />
              <Route path="/project/:id" element={<CaseStudy />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

        </div>
      </ReactLenis>
    </Router>
  );
}

export default App;
