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
import CustomCursor from './components/CustomCursor';
import HomeScene from './components/HomeScene';
import NetworkBackground from './components/NetworkBackground';
import ArchitecturalGrid from './components/ArchitecturalGrid';
import Particles from './components/Particles';
import BackdropSelector from './components/BackdropSelector';
import ScrollStickman from './components/ScrollStickman';

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
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('portfolio-preloaded');
    }
    return true;
  });
  const [currentView, setCurrentView] = useState('home');
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as 'light' | 'dark') || 'dark';
  });
  const [activeBg, setActiveBg] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('active-background') || 'crystals';
    }
    return 'crystals';
  });

  useEffect(() => {
    localStorage.setItem('active-background', activeBg);
  }, [activeBg]);

  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('portfolio-preloaded', 'true');
    }, 2500);
    return () => clearTimeout(timer);
  }, [isLoading]);

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
      <CustomCursor />
      <ScrollStickman />
      <div className="grain-overlay" />
      <div style={{ minHeight: '100vh', width: '100%', position: 'relative', backgroundColor: 'var(--bg-color)', transition: 'background-color 0.5s ease' }}>

        {/* Global Interactive Backdrop System */}
        {activeBg === 'crystals' && <HomeScene />}
        {activeBg === 'neural' && <NetworkBackground />}
        {activeBg === 'voxel' && <ArchitecturalGrid />}
        {activeBg === 'particles' && <Particles moveSpeed={0.3} />}

        {/* Ambient Gradient Orbs */}
        <div style={{ position: 'fixed', top: '-20%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,245,212,0.08) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0, animation: 'float 20s ease-in-out infinite' }} />
        <div style={{ position: 'fixed', bottom: '-20%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(155,93,229,0.08) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0, animation: 'float 25s ease-in-out infinite reverse' }} />
        <div style={{ position: 'fixed', top: '40%', left: '50%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,187,249,0.05) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0, animation: 'float 22s ease-in-out infinite 5s' }} />

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

        <BackdropSelector activeBg={activeBg} setActiveBg={setActiveBg} />

      </div>
    </ReactLenis>
  );
}

export default App;
