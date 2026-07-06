import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Globe, Play, Square, AlertCircle } from 'lucide-react';
import Magnetic from './Magnetic';
import { projects } from '../data/projects';

interface ProjectsProps {
  onViewChange: (view: string, id?: string) => void;
}

const Projects = ({ onViewChange }: ProjectsProps) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const activeProject = projects[activeIdx];

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    // Notify Jarvis stickman to release scroll lock and web wall
    window.dispatchEvent(new Event('projects-triggered'));

    let currentTick = 0;
    const ticks = 24; // Number of card cycles
    let speed = 40; // Initial speed in ms

    const runTick = () => {
      setActiveIdx((prev) => (prev + 1) % projects.length);
      currentTick++;

      if (currentTick < ticks) {
        // Smoothly slow down the cycle speed
        speed += 12;
        setTimeout(runTick, speed);
      } else {
        setIsSpinning(false);
      }
    };

    setTimeout(runTick, speed);
  };

  return (
    <section id="projects">
      <div className="content-block">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '4rem', alignItems: 'center' }}>

            {/* Left Column: Sticky Sidebar / Info */}
            <div
              className="projects-sidebar"
              style={{
                gridColumn: 'span 5',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}
            >
              <span className="section-label" style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.4em' }}>
                [ RECENT PROJECTS ]
              </span>
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 4rem)', lineHeight: 1.1, color: 'var(--text-main)', fontWeight: 900 }}>
                CASE <br /> STUDIES.
              </h2>
              <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                A curated selection of high-power applications. Play the **Case Study Roulette** to unlock modules, or browse them manually.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                <Magnetic>
                  <button
                    onClick={() => onViewChange('explore')}
                    className="btn-primary"
                    style={{
                      padding: '1rem 2.5rem',
                      background: 'transparent',
                      color: 'var(--text-main)',
                      border: '1px solid var(--panel-border)',
                      borderRadius: '100px',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      letterSpacing: '0.1em',
                      cursor: 'pointer',
                      transition: 'all 0.4s var(--transition-ease)',
                      textTransform: 'uppercase'
                    }}
                  >
                    EXPLORE_ALL
                  </button>
                </Magnetic>
              </div>
            </div>

            {/* Right Column: Arcade Roulette Console */}
            <div
              className="projects-console"
              style={{
                gridColumn: 'span 7',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'
              }}
            >
              {/* LED Console Status Bar */}
              <div style={{
                width: '100%',
                maxWidth: '480px',
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid var(--panel-border)',
                borderBottom: 'none',
                borderRadius: '16px 16px 0 0',
                padding: '0.8rem 1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: 'monospace',
                fontSize: '0.75rem',
                letterSpacing: '0.1em'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: isSpinning ? 'var(--accent)' : '#ff0055',
                    boxShadow: isSpinning ? '0 0 10px var(--accent)' : '0 0 10px #ff0055',
                    animation: isSpinning ? 'pulse-glow 0.8s infinite' : 'none'
                  }} />
                  <span style={{ color: isSpinning ? 'var(--accent)' : 'var(--text-sub)' }}>
                    {isSpinning ? 'ROULETTE_SHUFFLING...' : 'MODULE_IDLE'}
                  </span>
                </div>
                <span style={{ color: 'var(--text-sub)' }}>
                  SYSTEM_LOCK: <span style={{ color: isSpinning ? '#ff0055' : 'var(--accent)' }}>{isSpinning ? 'ON' : 'OFF'}</span>
                </span>
              </div>

              {/* Central Viewport Display */}
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '480px',
                aspectRatio: '1/1.1',
                background: 'var(--card-bg)',
                border: '2px solid var(--panel-border)',
                borderRadius: '0 0 32px 32px',
                padding: '1.5rem',
                overflow: 'hidden',
                boxShadow: isSpinning ? '0 0 40px rgba(0, 255, 204, 0.05)' : 'var(--shadow-elevated)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'all 0.4s var(--transition-ease)'
              }}>
                {/* Visual Shuffling Effect */}
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0.8, filter: 'blur(4px)', scale: 0.98 }}
                  animate={{ 
                    opacity: 1, 
                    filter: isSpinning ? 'blur(6px)' : 'blur(0px)',
                    scale: isSpinning ? 0.96 : 1,
                    y: isSpinning ? [0, -5, 5, 0] : 0
                  }}
                  transition={{ duration: 0.15, ease: 'easeInOut' }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'space-between'
                  }}
                >
                  {/* Card Image Area */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '180px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid var(--panel-border)'
                  }}>
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 60%)',
                      pointerEvents: 'none'
                    }} />
                  </div>

                  {/* Project Details */}
                  <div style={{ padding: '0.8rem 0 0 0', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '0.5rem', alignItems: 'center' }}>
                      <span style={{
                        color: 'var(--accent)',
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase'
                      }}>
                        {activeProject.category}
                      </span>
                      <span style={{
                        color: 'var(--text-sub)',
                        fontSize: '0.65rem',
                        fontWeight: 700
                      }}>
                        {activeProject.year}
                      </span>
                    </div>

                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: 'var(--text-main)',
                      marginBottom: '0.4rem',
                      lineHeight: 1.2
                    }}>
                      {activeProject.title}
                    </h3>

                    <p style={{
                      color: 'var(--text-sub)',
                      fontSize: '0.85rem',
                      lineHeight: 1.45,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {activeProject.desc}
                    </p>
                  </div>

                  {/* Action Buttons Panel */}
                  <div style={{ 
                    display: 'flex', 
                    gap: '1rem', 
                    borderTop: '1px solid var(--panel-border)',
                    paddingTop: '1.2rem',
                    position: 'relative'
                  }}>
                    {isSpinning && (
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(2px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '8px',
                        gap: '0.5rem',
                        color: 'var(--text-sub)',
                        fontSize: '0.75rem',
                        fontFamily: 'monospace',
                        zIndex: 10
                      }}>
                        <AlertCircle size={14} /> DECRYPTING...
                      </div>
                    )}
                    
                    <Magnetic>
                      <button
                        disabled={isSpinning}
                        onClick={() => onViewChange('project', activeProject.id)}
                        style={{
                          flex: 1,
                          padding: '0.75rem',
                          background: 'var(--text-main)',
                          color: 'var(--bg-color)',
                          borderRadius: '10px',
                          fontWeight: 800,
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          fontSize: '0.75rem',
                          letterSpacing: '0.05em',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <BookOpen size={14} /> CASE STUDY
                      </button>
                    </Magnetic>

                    <Magnetic>
                      <a
                        href={activeProject.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{ flex: 1, textDecoration: 'none', pointerEvents: isSpinning ? 'none' : 'auto' }}
                      >
                        <button
                          disabled={isSpinning}
                          style={{
                            width: '100%',
                            padding: '0.75rem',
                            background: 'transparent',
                            color: 'var(--text-main)',
                            borderRadius: '10px',
                            fontWeight: 800,
                            border: '1px solid var(--panel-border)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            fontSize: '0.75rem',
                            letterSpacing: '0.05em',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <Globe size={14} /> TRY LIVE <ArrowUpRight size={12} />
                        </button>
                      </a>
                    </Magnetic>
                  </div>
                </motion.div>
              </div>

              {/* Console Dashboard Controls */}
              <div style={{ marginTop: '1.5rem', width: '100%', maxWidth: '480px', display: 'flex', justifyContent: 'center' }}>
                <Magnetic>
                  <button
                    onClick={handleSpin}
                    disabled={isSpinning}
                    className="btn-primary"
                    style={{
                      padding: '1.1rem 3rem',
                      background: isSpinning ? 'var(--panel-bg)' : 'var(--gradient-accent)',
                      color: isSpinning ? 'var(--text-tertiary)' : '#000',
                      border: 'none',
                      borderRadius: '100px',
                      fontWeight: 900,
                      fontSize: '0.85rem',
                      letterSpacing: '0.12em',
                      cursor: isSpinning ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      boxShadow: isSpinning ? 'none' : 'var(--glow-accent)'
                    }}
                  >
                    {isSpinning ? <Square size={16} /> : <Play size={16} />}
                    {isSpinning ? 'DECRYPTING...' : 'TRIGGER_SPIN'}
                  </button>
                </Magnetic>
              </div>

              {/* Manual Selection Override */}
              <div style={{ marginTop: '2.5rem', width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
                <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: 'var(--text-secondary)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  // Manual Override Protocol
                </span>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      disabled={isSpinning}
                      onClick={() => {
                        setActiveIdx(idx);
                      }}
                      style={{
                        padding: '0.4rem 0.9rem',
                        fontSize: '0.72rem',
                        fontFamily: 'monospace',
                        borderRadius: '100px',
                        background: activeIdx === idx ? 'var(--accent-soft)' : 'transparent',
                        border: `1px solid ${activeIdx === idx ? 'var(--accent)' : 'var(--border-subtle)'}`,
                        color: activeIdx === idx ? 'var(--accent)' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontWeight: activeIdx === idx ? 800 : 500
                      }}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      <style>{`
        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 0 30px var(--accent-cyan);
        }
        @media (max-width: 1024px) {
          #projects .projects-sidebar {
            grid-column: span 12 !important;
            margin-bottom: 2rem;
          }
          #projects .projects-cards {
            grid-column: span 12 !important;
          }
          #projects div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
