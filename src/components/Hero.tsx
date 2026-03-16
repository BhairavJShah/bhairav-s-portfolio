import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import Magnetic from './Magnetic';
import Particles from './Particles';
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
      paddingTop: 'clamp(100px, 15vh, 150px)', 
      position: 'relative', 
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Particles moveSpeed={0.3} />
      <div className="content-block" style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        background: 'transparent',
        border: 'none',
        boxShadow: 'none',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none'
      }}>
        
        <div className="container" style={{ position: 'relative', zIndex: 10, pointerEvents: 'auto' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* Main Typography Block */}
            <div ref={titleRef} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ overflow: 'hidden' }}>
                <h1 className="title-massive hero-text-line" style={{ color: 'var(--text-main)', fontSize: 'clamp(2.5rem, 8vw, 7.5rem)', lineHeight: 1 }}>
                  FULL-STACK DEVELOPER
                </h1>
              </div>
              
              <div style={{ overflow: 'hidden' }}>
                <h1 className="title-massive title-outline hero-text-line" style={{ color: 'var(--text-main)', fontSize: 'clamp(2.5rem, 8vw, 7.5rem)', lineHeight: 1 }}>
                  & LINUX POWER USER.
                </h1>
              </div>
            </div>

            {/* Description and CTA */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '4rem' }}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 1 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '900px' }}
              >
                <p style={{ 
                  color: 'var(--text-sub)', 
                  fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', 
                  lineHeight: 1.6, 
                  fontWeight: 400,
                  fontFamily: 'monospace',
                  minHeight: '120px'
                }}>
                  {displayText}
                  {!isDone && <span className="scramble-cursor">_</span>}
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  <Magnetic>
                    <a href="#projects" className="btn-cyber" style={{ background: 'var(--accent)', color: '#000', border: 'none' }}>
                      VIEW MY WORK <ArrowRight size={20} />
                    </a>
                  </Magnetic>
                  
                  <Magnetic>
                    <a href="/bhairav_j_shah_resume.pdf?v=20260316" download="Bhairav_Shah_Resume.pdf" className="btn-cyber" style={{ background: 'transparent', borderColor: 'var(--panel-border)' }}>
                      DOWNLOAD RESUME <Download size={20} />
                    </a>
                  </Magnetic>
                </div>
              </motion.div>

              <div style={{ textAlign: 'right' }}>
                <span style={{ color: 'var(--text-sub)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.3em' }}>
                  LOC: 12.9716° N, 77.5946° E<br/>
                  UTC+05:30
                </span>
              </div>
            </div>

          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '5vh', left: '5vw', color: 'var(--text-sub)', fontSize: '0.8rem', letterSpacing: '0.5em', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 11 }}>
          <Terminal size={14} /> KERNEL: OPTIMIZED // ENV: LINUX
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
      `}</style>
    </section>
  );
};

export default Hero;
