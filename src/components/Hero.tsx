import { motion } from 'framer-motion';
import '../styles/Global.css';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
      <div style={{ width: '100%' }}>
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, padding: '0.4rem 1rem', borderRadius: '100px', backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-emerald)' }} />
              Linux / Neovim
            </span>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, padding: '0.4rem 1rem', borderRadius: '100px', backgroundColor: 'rgba(0, 113, 227, 0.1)', border: '1px solid rgba(0, 113, 227, 0.2)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Vibe Coding / Claude 3.5
            </span>
          </motion.div>
          
          <motion.h1 
            variants={item}
            style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)', margin: '0 0 4rem', lineHeight: 0.9, letterSpacing: '-0.06em', fontWeight: 800 }}
          >
            Full-Stack Developer <br /> & Linux <span style={{ color: 'var(--accent-emerald)' }}>Power User.</span>
          </motion.h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <motion.p 
              variants={item}
              style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '500px', lineHeight: 1.5 }}
            >
              I bridge the gap between robust **Java-based** engineering and modern AI orchestration. Leveraging **Linux** as my primary environment, I build scalable **mobile and desktop applications** using **Vibe Coding** and **Prompt Engineering**.
            </motion.p>

            <motion.div variants={item} style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn btn-primary" style={{ padding: '1.5rem 3rem' }}>
                View My Work
              </a>
              <a href="#" className="btn" style={{ padding: '1.5rem 3rem' }}>
                Download Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute', top: '10%', right: '5%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(0, 113, 227, 0.15) 0%, transparent 70%)',
          filter: 'blur(100px)', zIndex: -1
        }} 
      />
    </section>
  );
};

export default Hero;
