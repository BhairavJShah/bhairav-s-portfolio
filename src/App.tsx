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

import './styles/Global.css';

// Component mapping for clean state-based rendering
const Home = ({ onViewChange }: { onViewChange: (view: string, id?: string) => void }) => (
  <div style={{ position: 'relative', zIndex: 10, width: '100%' }}>
    <Hero />
    <About />
    <Projects onViewChange={onViewChange} />
    <Skills />
    <Contact />
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState('home');
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
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

  const handleViewChange = (view: string, id?: string) => {
    setCurrentView(view);
    if (id) setActiveProjectId(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <div style={{ minHeight: '100vh', width: '100%', position: 'relative', backgroundColor: 'var(--bg-color)', transition: 'background-color 0.5s ease' }}>

        <AnimatePresence mode="wait">
          {isLoading && <Preloader key="preloader" />}
        </AnimatePresence>

        <Navbar theme={theme} toggleTheme={toggleTheme} onViewChange={handleViewChange} />

        <main style={{ position: 'relative', zIndex: 10, width: '100%' }}>
          {currentView === 'home' && <Home onViewChange={handleViewChange} />}
          {currentView === 'explore' && <ExploreProjects onViewChange={handleViewChange} />}
          {currentView === 'project' && activeProjectId && (
            <CaseStudy id={activeProjectId} onViewChange={handleViewChange} />
          )}
        </main>

      </div>
    </ReactLenis>
  );
}

export default App;
