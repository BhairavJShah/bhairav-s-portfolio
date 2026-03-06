import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects">
      <div className="content-block">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '4rem', alignItems: 'flex-start' }}>
            
            {/* Left Side: Scrollable Projects List */}
            <div 
              className="projects-scroll-container"
              data-lenis-prevent
              style={{ 
                gridColumn: 'span 8', 
                height: '75vh', 
                overflowY: 'auto', 
                paddingRight: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}
            >
              {projects.map((project, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <Link to={`/project/${project.id}`} style={{ textDecoration: 'none' }}>
                    <div className="glass-card" style={{ 
                      padding: '1.5rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '2rem',
                      transition: 'all 0.4s var(--transition-ease)',
                      cursor: 'pointer',
                      border: '1px solid var(--panel-border)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--accent-soft)';
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.transform = 'translateX(10px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--card-bg)';
                      e.currentTarget.style.borderColor = 'var(--panel-border)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                    >
                      <div style={{ width: '160px', height: '110px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem', alignItems: 'center' }}>
                          <span style={{ color: 'var(--accent)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{project.category}</span>
                          <span style={{ color: 'var(--text-sub)', fontSize: '0.7rem', fontWeight: 800 }}>{project.year}</span>
                        </div>
                        <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)', fontWeight: 800, marginBottom: '0.3rem' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{project.desc}</p>
                      </div>

                      <div style={{ 
                        width: '44px', height: '44px', borderRadius: '50%', 
                        border: '1px solid var(--panel-border)', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--text-main)',
                        flexShrink: 0
                      }}>
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Side: Sticky Information */}
            <div style={{ 
              gridColumn: 'span 4', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '2.5rem',
              position: 'sticky',
              top: '20px'
            }}>
              <span style={{ color: 'var(--accent)', fontSize: '1rem', fontWeight: 800, letterSpacing: '0.4em' }}>[ REPOSITORIES ]</span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 4.5rem)', lineHeight: 1, color: 'var(--text-main)', fontWeight: 900 }}>
                CASE <br/> STUDIES.
              </h2>
              <p style={{ color: 'var(--text-sub)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                A deep dive into high-power applications engineered for global scale and aesthetic superiority.
              </p>
              <Magnetic>
                <Link to="/explore" className="btn-cyber" style={{ width: 'fit-content', marginTop: '1rem', background: 'var(--accent)', color: '#000', border: 'none' }}>
                  EXPLORE_ALL
                </Link>
              </Magnetic>

              {/* Scroll Hint */}
              <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.3 }}>
                <div style={{ width: '2px', height: '40px', background: 'var(--accent)' }} />
                <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>Scroll to view projects</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .projects-scroll-container::-webkit-scrollbar {
          width: 4px;
        }
        .projects-scroll-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .projects-scroll-container::-webkit-scrollbar-thumb {
          background: var(--accent);
          border-radius: 10px;
          opacity: 0.5;
        }
        @media (max-width: 1024px) {
          #projects div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
          #projects div[style*="span 8"], #projects div[style*="span 4"] { grid-column: span 12 !important; }
          .projects-scroll-container { height: auto !important; overflow: visible !important; padding-right: 0 !important; }
          #projects div[style*="sticky"] { position: relative !important; top: 0 !important; order: -1; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
