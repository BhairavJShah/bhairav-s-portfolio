import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';
import { projects } from '../data/projects';

interface ProjectsProps {
  onViewChange: (view: string, id?: string) => void;
}

const Projects = ({ onViewChange }: ProjectsProps) => {
  const recentProjects = projects.slice(0, 3);

  return (
    <section id="projects">
      <div className="content-block">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '4rem', alignItems: 'flex-start' }}>

            {/* Left Side: Projects List */}
            <div 
              style={{ 
                gridColumn: 'span 8', 
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}
            >
              {recentProjects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div 
                    onClick={() => onViewChange('project', project.id)}
                    className="glass-card" 
                    style={{
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
              top: '120px'
            }}>
              <span style={{ color: 'var(--accent)', fontSize: '1rem', fontWeight: 800, letterSpacing: '0.4em' }}>[ RECENT PROJECTS ]</span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 4.5rem)', lineHeight: 1, color: 'var(--text-main)', fontWeight: 900 }}>
                CASE <br/> STUDIES.
              </h2>
              <p style={{ color: 'var(--text-sub)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                A curated selection of high-power applications engineered for global scale and aesthetic superiority.
              </p>
              <Magnetic>
                <button 
                  onClick={() => onViewChange('explore')}
                  className="btn-cyber" 
                  style={{ width: 'fit-content', marginTop: '1rem', background: 'var(--accent)', color: '#000', border: 'none', cursor: 'pointer' }}
                >
                  EXPLORE_ALL
                </button>
              </Magnetic>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #projects div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
          #projects div[style*="span 8"], #projects div[style*="span 4"] { grid-column: span 12 !important; }
          #projects div[style*="sticky"] { position: relative !important; top: 0 !important; order: -1; margin-bottom: 3rem; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
