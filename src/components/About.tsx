import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap, Database, Monitor, Code2, Layers } from 'lucide-react';
import '../styles/Global.css';

const About = () => {
  const environment = [
    { icon: <Monitor size={20} />, label: 'OS', value: 'Linux (XFCE environment)' },
    { icon: <Code2 size={20} />, label: 'Editor', value: 'Neovim (Keyboard-driven)' },
    { icon: <Cpu size={20} />, label: 'Hardware', value: 'Ryzen 7 5800H | RTX 3050' },
    { icon: <Zap size={20} />, label: 'Workflow', value: 'AI-Augmented (Claude/GPT-4o)' },
  ];

  const valueProps = [
    { 
      title: 'Foundation', 
      desc: 'Extensive experience in Java (J2EE, JDBC) and RDBMS for enterprise-level data.',
      icon: <Layers size={24} />
    },
    { 
      title: 'Modernity', 
      desc: 'Rapid prototyping using Vibe Coding and Prompt Engineering—built on Linux.',
      icon: <Zap size={24} />
    },
    { 
      title: 'Scalability', 
      desc: 'Proven ability to design systems that handle 10,000+ records and complex logistics.',
      icon: <Database size={24} />
    }
  ];

  return (
    <section id="about" style={{ padding: 'var(--section-padding)' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '3rem' }}
      >
        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>About Me</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.6, fontWeight: 500 }}>
              I am a <span style={{ color: 'var(--accent-emerald)' }}>Full-Stack Developer and Linux Power User</span> with a deep foundation in Java-based engineering.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.8 }}>
              Operating entirely within a **Linux environment**, I bridge the gap between robust, scalable architecture and high-velocity development.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              My approach, **"Vibe Coding,"** leverages Prompt Engineering and AI agents to accelerate development cycles by up to **3x**, allowing me to move from high-level "vibes" to production-ready applications in record time.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '20px', border: '1px solid var(--border)' }}
          >
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Terminal size={20} color="var(--accent-emerald)" /> Digital Environment
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {environment.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ color: 'var(--text-secondary)' }}>{item.icon}</div>
                  <div>
                    <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</p>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 500 }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {valueProps.map((prop, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            style={{ padding: '2rem', borderRadius: '20px', border: '1px solid var(--border)', backgroundColor: 'rgba(255,255,255,0.02)' }}
          >
            <div style={{ color: 'var(--accent-blue)', marginBottom: '1.25rem' }}>{prop.icon}</div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{prop.title}</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{prop.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
