import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import Magnetic from './Magnetic';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTextScramble } from '../hooks/useTextScramble';

const PHRASES = [
  "I bridge the gap between robust Java-based engineering and modern AI orchestration.",
  "Operating entirely within a Linux environment, I build scalable mobile and desktop applications.",
  "Architecting high-concurrency systems with a focus on fault tolerance and system reliability.",
  "Leveraging Vibe Coding and Prompt Engineering to accelerate production cycles by up to 3x.",
  "Specializing in GenAI content pipelines and advanced Chain-of-Thought AI integration.",
  "Engineering seamless full-stack experiences across Android, iOS, and high-power web platforms."
];

const Hero = () => {
  const titleRef = useRef(null);
  const { displayText, isDone } = useTextScramble(PHRASES, 5000);

  useGSAP(() => {
    gsap.fromTo('.hero-text-line',
      { y: 100, opacity: 0, rotateX: 45 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out', delay: 2.5 }
    );
  });

  return (
    <section id="home" style={{
      paddingTop: 'clamp(120px, 15vh, 180px)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>

      {/* Ambient Orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="container" style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Bhairav J. Shah | Official Portfolio - Full-Stack Developer, Java Engineer & AI Architect
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.8 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.5rem 1.2rem',
              background: 'var(--card-bg)', border: '1px solid var(--panel-border)', borderRadius: '100px',
              marginBottom: '2rem', width: 'fit-content'
            }}
          >
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%', background: '#00f5d4',
              boxShadow: '0 0 12px #00f5d4', animation: 'pulse-glow 2s ease-in-out infinite'
            }} />
            <span style={{
              fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--text-sub)',
              letterSpacing: '0.1em', textTransform: 'uppercase'
            }}>Available for opportunities</span>
          </motion.div>

          {/* Main Title Block */}
          <div ref={titleRef} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ overflow: 'hidden' }}>
              <h1 className="title-massive hero-text-line" style={{
                color: 'var(--text-main)',
                fontSize: 'clamp(3rem, 9vw, 9rem)',
                lineHeight: 0.95
              }}>
                FULL-STACK
              </h1>
            </div>

            <div style={{ overflow: 'hidden' }}>
              <h1 className="gradient-text title-massive hero-text-line" style={{
                fontSize: 'clamp(3rem, 9vw, 9rem)',
                lineHeight: 0.95
              }}>
                DEVELOPER
              </h1>
            </div>

            <div style={{ overflow: 'hidden' }}>
              <h1 className="title-massive title-outline hero-text-line" style={{
                fontSize: 'clamp(3rem, 9vw, 9rem)',
                lineHeight: 0.95
              }}>
                & AI ARCHITECT.
              </h1>
            </div>
          </div>

          {/* Text Scramble Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <p style={{
              fontFamily: 'monospace', color: 'var(--text-sub)',
              fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)',
              lineHeight: 1.6, maxWidth: '700px', minHeight: '80px'
            }}>
              {displayText}
              {!isDone && <span className="scramble-cursor">_</span>}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
            style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', marginTop: '2rem' }}
          >
            <Magnetic>
              <a href="#projects" className="btn-primary">VIEW MY WORK <ArrowRight size={18} /></a>
            </Magnetic>
            <Magnetic>
              <a href="/bhairav_j_shah_resume.pdf?v=20260316" download="Bhairav_Shah_Resume.pdf" className="btn-ghost">
                DOWNLOAD RESUME <Download size={18} />
              </a>
            </Magnetic>
          </motion.div>

          {/* Bottom Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
              marginTop: 'auto', paddingTop: '4rem', paddingBottom: '3rem'
            }}
          >
            <span style={{
              fontFamily: 'monospace', color: 'var(--text-sub)', fontSize: '0.7rem',
              fontWeight: 800, letterSpacing: '0.3em'
            }}>
              LOC: 12.9716° N, 77.5946° E<br />
              UTC+05:30
            </span>

            <a href="#about" className="scroll-indicator" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
              <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'var(--text-sub)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>SCROLL</span>
              <ChevronDown size={20} style={{ color: 'var(--accent)', animation: 'bounce-down 2s ease-in-out infinite' }} />
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        .scramble-cursor {
          display: inline-block;
          width: 10px;
          height: 1.2em;
          background: var(--accent);
          margin-left: 5px;
          animation: blink 0.8s infinite;
          vertical-align: middle;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 1; box-shadow: 0 0 12px #00f5d4; }
          50% { opacity: 0.5; box-shadow: 0 0 6px #00f5d4; }
        }

        @keyframes bounce-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--accent) 0%, #7b61ff 50%, #ff6b9d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1.1rem 2.8rem;
          background: var(--accent);
          color: #000;
          font-family: var(--font-apple);
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          border: none;
          border-radius: 100px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.4s var(--transition-ease);
          cursor: pointer;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px var(--accent-soft);
        }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1.1rem 2.8rem;
          background: transparent;
          color: var(--text-main);
          font-family: var(--font-apple);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          border: 1px solid var(--outline-stroke);
          border-radius: 100px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.4s var(--transition-ease);
          cursor: pointer;
        }
        .btn-ghost:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-2px);
        }

        /* Ambient Orbs */
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          z-index: 0;
          pointer-events: none;
          animation: float-orb 20s ease-in-out infinite;
        }
        .hero-orb-1 {
          width: 600px;
          height: 600px;
          background: var(--accent);
          top: -10%;
          right: -10%;
          animation-delay: 0s;
        }
        .hero-orb-2 {
          width: 400px;
          height: 400px;
          background: #7b61ff;
          bottom: 10%;
          left: -5%;
          animation-delay: -7s;
        }
        .hero-orb-3 {
          width: 350px;
          height: 350px;
          background: #ff6b9d;
          top: 40%;
          right: 20%;
          animation-delay: -14s;
        }
        @keyframes float-orb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }

        @media (max-width: 768px) {
          .btn-primary, .btn-ghost {
            width: 100%;
            justify-content: center;
            padding: 1rem 1.5rem;
            font-size: 0.8rem;
            border-radius: 16px;
          }
          .hero-orb {
            opacity: 0.1;
          }
          .hero-orb-1 { width: 300px; height: 300px; }
          .hero-orb-2 { width: 200px; height: 200px; }
          .hero-orb-3 { width: 180px; height: 180px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
