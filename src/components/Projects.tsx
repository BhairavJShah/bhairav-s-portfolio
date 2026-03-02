import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Global.css';

const Projects = () => {
  const projects = [
    { 
      id: 'java-learning-platform',
      title: 'Java Learning Platform', 
      category: 'AI-Native / Mobile', 
      tech: 'Flutter, Dart, AI Orchestration',
      scalability: 'Handles 100+ Java modules with modular architecture.',
      vibe: 'AI-generated 80% UI boilerplate via Vibe Coding.',
      env: 'Manjaro XFCE / Neovim',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1000'
    },
    { 
      id: 'modern-bingo-mobile',
      title: 'Modern Bingo Mobile', 
      category: 'Cross-Platform / Game', 
      tech: 'React Native, JS, Prompt Engineering',
      scalability: 'Optimized for high-fidelity real-time game state updates.',
      vibe: 'Iterative Prompt Engineering for UI/UX components.',
      env: 'Manjaro XFCE / Neovim',
      image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=1000'
    },
    { 
      id: 'e-healthcare-system',
      title: 'E-HealthCare System', 
      category: 'Enterprise / Web', 
      tech: 'Java, MySQL, JSP, Servlets',
      scalability: 'Manages 10,000+ patient records and automated billing.',
      vibe: 'Robust J2EE foundation with 50% admin load reduction.',
      env: 'Linux / IntelliJ',
      image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1000'
    },
    { 
      id: 'decentralized-money',
      title: 'Decentralized Money', 
      category: 'Blockchain / DeFi', 
      tech: 'Solidity, Ethereum, Blockchain',
      scalability: '99.9% fault tolerance with 40% efficiency gains.',
      vibe: '100% transaction transparency for decentralized trust.',
      env: 'Hardhat / Manjaro',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000'
    },
  ];

  return (
    <section id="projects" style={{ padding: 'var(--section-padding)', maxWidth: '100%', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', marginBottom: '3rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Selected Projects</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px' }}>
            A mix of high-velocity <span style={{ color: 'var(--accent-emerald)' }}>Vibe Coding</span> apps and robust enterprise engineering foundations.
          </p>
        </motion.div>
      </div>

      <div className="projects-queue" style={{ 
        display: 'flex', 
        gap: '2rem', 
        overflowX: 'auto', 
        padding: '0 4vw 4rem', 
        scrollSnapType: 'x mandatory',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            style={{
              flex: '0 0 clamp(300px, 80vw, 450px)',
              scrollSnapAlign: 'start',
              backgroundColor: 'var(--bg-card)',
              borderRadius: '24px',
              border: '1px solid var(--border)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease'
            }}
            whileHover={{ y: -10 }}
          >
            <div style={{ position: 'relative', height: '250px', overflow: 'hidden', backgroundColor: 'var(--bg-card)' }}>
              <motion.img 
                src={project.image} 
                alt={project.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div style={{ position: 'absolute', bottom: '15px', left: '15px' }}>
                <span style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 600, color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {project.env}
                </span>
              </div>
            </div>

            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-emerald)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0' }}>{project.title}</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Cpu size={18} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{project.tech}</p>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Database size={18} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{project.scalability}</p>
                </div>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <Link 
                  to={`/project/${project.id}`} 
                  className="btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', padding: '0.8rem', borderRadius: '12px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <ExternalLink size={16} /> View Case Study
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .projects-queue::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;
