import { motion } from 'framer-motion';
import { Code, Database, Shield, Zap, GraduationCap, Briefcase, Activity, Cpu, Rocket, CheckCircle2 } from 'lucide-react';
import '../styles/Global.css';

const About = () => {
  const impactMetrics = [
    { label: 'RECORDS', value: '10K+', sub: 'High-concurrency DB architecture', icon: <Database size={24}/> },
    { label: 'FAULT TOLERANCE', value: '99.9%', sub: 'Solidity smart contract reliability', icon: <Shield size={24}/> },
    { label: 'EFFICIENCY', value: '90%', sub: 'Optimized CRUD performance', icon: <Cpu size={24}/> },
    { label: 'VELOCITY', value: '3X', sub: 'Vibe Coding production speed', icon: <Rocket size={24}/> },
  ];

  const experience = [
    {
      company: 'Edufic Digital',
      role: 'Generative AI & Prompt Engineer',
      period: 'July 2024 – August 2024',
      desc: 'Utilized Prompt Engineering and Chain-of-Thought techniques to develop AI-driven content pipelines for 50,000+ monthly users.'
    },
    {
      company: 'Venkateswara Agency',
      role: 'Software Engineer Intern',
      period: 'May 2024 – July 2024',
      desc: 'Engineered a Python-based desktop billing system and managed a database of 10,000+ records via SQLite.'
    }
  ];

  const coreSkills = [
    { icon: <Code size={28}/>, title: 'Prompt Engineering', desc: 'Advanced CoT & Few-shot techniques.' },
    { icon: <Zap size={28}/>, title: 'Vibe Coding', desc: 'Rapid prototyping via AI agents.' },
    { icon: <Database size={28}/>, title: 'Backend Logic', desc: 'Java, Python & SQL specialist.' },
    { icon: <Shield size={28}/>, title: 'Robust Delivery', desc: 'Scaled for 50,000+ monthly users.' }
  ];

  return (
    <section id="about">
      <div className="content-block">
        <div className="container">
          
          <div className="bento-grid">
            
            {/* Intro Bento - Wide Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card bento-12" 
              style={{ padding: 'clamp(2rem, 5vw, 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <span style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.2em', marginBottom: '1.5rem' }}>[ THE_ARCHITECT ]</span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 1, marginBottom: '2.5rem', color: 'var(--text-main)' }}>
                BHAIRAV J. SHAH <br/> <span className="title-outline">FULL-STACK ENGINEER.</span>
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                <p style={{ color: 'var(--text-sub)', fontSize: '1.2rem', lineHeight: 1.6 }}>
                  I am a <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>Full-Stack Developer</span> and <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>Linux Power User</span> with a deep foundation in Java-based engineering. Operating entirely within a Linux environment, I bridge the gap between robust, scalable architecture and high-velocity development.
                </p>
                <p style={{ color: 'var(--text-sub)', fontSize: '1.2rem', lineHeight: 1.6 }}>
                  My approach, <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Vibe Coding</span>, leverages Prompt Engineering and AI agents to accelerate development cycles by up to <span style={{ color: 'var(--accent)', fontWeight: 700 }}>3x</span>, allowing me to move from high-level vibes to production-ready applications in record time.
                </p>
              </div>
            </motion.div>

            {/* Impact Metrics - Full Row Filling */}
            {impactMetrics.map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card bento-3" 
                style={{ 
                  padding: '2.5rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1.5rem'
                }}
                animate={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--panel-border)', y: 0 }}
                whileHover={{ y: -10, borderColor: 'var(--accent)', backgroundColor: 'var(--card-bg)', boxShadow: '0 10px 30px var(--accent-soft)' }}
              >
                <div style={{ color: 'var(--accent)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ padding: '0.8rem', background: 'var(--accent-soft)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {metric.icon}
                  </div>
                  <CheckCircle2 size={16} opacity={0.3} />
                </div>
                <div>
                  <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--text-main)', fontFamily: 'Syncopate', lineHeight: 1, marginBottom: '0.5rem' }}>
                    {metric.value}
                  </div>
                  <p style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    {metric.label}
                  </p>
                </div>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem', lineHeight: 1.4, borderTop: '1px solid var(--panel-border)', paddingTop: '1rem' }}>
                  {metric.sub}
                </p>
              </motion.div>
            ))}

            {/* Experience Bento */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card bento-8" 
              style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', color: 'var(--accent)' }}>
                <div style={{ padding: '1rem', background: 'var(--accent-soft)', borderRadius: '16px' }}>
                  <Briefcase size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>PROFESSIONAL EXPERIENCE</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
                {experience.map((exp, i) => (
                  <div key={i} style={{ position: 'relative', paddingLeft: '2.5rem', borderLeft: '2px solid var(--panel-border)' }}>
                    <div style={{ position: 'absolute', left: '-7px', top: '5px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent)', boxShadow: `0 0 15px var(--accent)` }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <h4 style={{ fontSize: '1.3rem', color: 'var(--text-main)', fontWeight: 800, marginBottom: '0.3rem' }}>{exp.role}</h4>
                        <p style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.1em', fontSize: '0.9rem' }}>{exp.company}</p>
                      </div>
                      <span style={{ color: 'var(--text-sub)', fontSize: '0.85rem', padding: '0.5rem 1.2rem', background: 'var(--panel-bg)', borderRadius: '100px', fontWeight: 600, border: '1px solid var(--panel-border)' }}>{exp.period}</span>
                    </div>
                    <p style={{ color: 'var(--text-sub)', fontSize: '1rem', lineHeight: 1.6 }}>{exp.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education & System Stats Bento */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass-card bento-4" 
              style={{ padding: 'clamp(2rem, 5vw, 3rem)', display: 'flex', flexDirection: 'column', gap: '3rem' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>
                  <div style={{ padding: '0.8rem', background: 'var(--accent-soft)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <GraduationCap size={24} />
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)' }}>EDUCATION</h3>
                </div>
                <p style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>Misrimal Navajee Munoth Jain Engineering College</p>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem' }}>BE in Computer Science and Engineering</p>
                <div style={{ marginTop: '1rem', padding: '0.6rem 1.2rem', background: 'var(--accent-soft)', color: 'var(--accent)', borderRadius: '100px', display: 'inline-block', fontWeight: 800, fontSize: '0.8rem', border: '1px solid var(--accent-border)' }}>
                  CGPA: 7.03/10
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>
                  <div style={{ padding: '0.8rem', background: 'var(--accent-soft)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Activity size={24} />
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)' }}>SYSTEM_HEALTH</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                    <span style={{ color: 'var(--text-sub)' }}>ARCHITECTURE</span>
                    <span style={{ color: 'var(--accent)', fontWeight: 800 }}>STABLE</span>
                  </div>
                  <div style={{ width: '100%', height: '4px', background: 'var(--panel-border)', borderRadius: '2px' }}>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5, delay: 0.5 }} style={{ height: '100%', background: 'var(--accent)', borderRadius: '2px', boxShadow: '0 0 10px var(--accent)' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                    <span style={{ color: 'var(--text-sub)' }}>RELIABILITY</span>
                    <span style={{ color: 'var(--accent)', fontWeight: 800 }}>99.9%</span>
                  </div>
                  <div style={{ width: '100%', height: '4px', background: 'var(--panel-border)', borderRadius: '2px' }}>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '99.9%' }} transition={{ duration: 1.5, delay: 0.7 }} style={{ height: '100%', background: 'var(--accent)', borderRadius: '2px', boxShadow: '0 0 10px var(--accent)' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Row Skills - Expanded to fill more space */}
            {coreSkills.map((item, i) => (
              <motion.div 
                key={i} 
                className="glass-card bento-3" 
                style={{ 
                  padding: '2.5rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'flex-start', 
                  cursor: 'default'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                animate={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--panel-border)', y: 0 }}
                whileHover={{ y: -10, borderColor: 'var(--accent)', backgroundColor: 'var(--card-bg)', boxShadow: '0 10px 30px var(--accent-soft)' }}
              >
                <div style={{ padding: '1rem', background: 'var(--accent-soft)', borderRadius: '16px', color: 'var(--accent)', marginBottom: '1.5rem', border: '1px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: 'var(--text-main)', fontWeight: 800 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>

      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 2rem;
        }
        .bento-12 { grid-column: span 12; }
        .bento-8 { grid-column: span 8; }
        .bento-4 { grid-column: span 4; }
        .bento-3 { grid-column: span 3; }
        
        @media (max-width: 1024px) {
          .bento-12, .bento-8, .bento-4 { grid-column: span 12; }
          .bento-3 { grid-column: span 6; }
        }

        @media (max-width: 640px) {
          .bento-3 { grid-column: span 12; }
        }
      `}</style>
    </section>
  );
};

export default About;
