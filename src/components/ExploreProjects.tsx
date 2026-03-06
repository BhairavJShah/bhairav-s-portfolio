import { motion } from 'framer-motion';
import { Globe, BookOpen, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import Magnetic from './Magnetic';
import { useEffect } from 'react';

const ExploreProjects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'var(--bg-color)', 
      padding: '8rem 5vw 4rem',
      position: 'relative',
      zIndex: 100,
      transition: 'background-color 0.5s ease'
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6rem' }}>
          <div>
            <span style={{ color: 'var(--accent)', fontSize: '1rem', fontWeight: 800, letterSpacing: '0.5em', display: 'block', marginBottom: '1rem' }}>[ REPOSITORIES ]</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--text-main)' }}>
              PROJECT <span style={{ color: 'var(--accent)' }}>RESOURCES.</span>
            </h2>
          </div>
          <Magnetic>
            <button 
              onClick={() => navigate('/')} 
              style={{ 
                padding: '1rem 2rem', 
                background: 'var(--card-bg)', 
                color: 'var(--text-main)', 
                borderRadius: '100px', 
                border: '1px solid var(--panel-border)', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                fontWeight: 700,
                backdropFilter: 'blur(10px)'
              }}
            >
              <ArrowLeft size={20} /> BACK HOME
            </button>
          </Magnetic>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 450px), 1fr))', 
          gap: '4rem'
        }}>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'var(--panel-bg)',
                border: '1px solid var(--panel-border)',
                borderRadius: '40px',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div style={{ width: '100%', height: '300px', borderRadius: '24px', overflow: 'hidden', position: 'relative' }}>
                <img src={project.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }} />
              </div>
              <div>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.2em' }}>{project.category}</span>
                  <span style={{ color: 'var(--text-sub)', fontSize: '0.75rem', fontWeight: 800 }}>{project.year}</span>
                </div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1 }}>{project.title}</h3>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: 'auto' }}>
                <Magnetic>
                  <Link to={`/project/${project.id}`} style={{ 
                    flex: 1, 
                    padding: '1.2rem', 
                    background: 'var(--text-main)', 
                    color: 'var(--bg-color)', 
                    borderRadius: '16px', 
                    textAlign: 'center', 
                    fontWeight: 900, 
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9rem'
                  }}>
                    <BookOpen size={18} /> CASE STUDY
                  </Link>
                </Magnetic>
                <Magnetic>
                  <a href={project.link} target="_blank" rel="noreferrer" style={{ 
                    flex: 1, 
                    padding: '1.2rem', 
                    background: 'var(--panel-bg)', 
                    color: 'var(--text-main)', 
                    borderRadius: '16px', 
                    textAlign: 'center', 
                    fontWeight: 900, 
                    textDecoration: 'none',
                    border: '1px solid var(--panel-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <Globe size={18} /> TRY NOW
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProjects;
