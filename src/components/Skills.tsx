import { motion } from 'framer-motion';
import { Smartphone, Code2, Monitor, Zap } from 'lucide-react';
import '../styles/Global.css';

const Skills = () => {
  const categories = [
    { 
      icon: <Zap size={28} />, 
      title: 'AI & Orchestration', 
      subtitle: 'Vibe Coding',
      skills: [
        { name: 'Prompt Engineering', detail: 'Few-shot & CoT expert' },
        { name: 'AI Orchestration', detail: 'Cursor & Claude specialist' },
        { name: 'Vibe Coding', detail: 'High-velocity AI prototyping' }
      ]
    },
    { 
      icon: <Smartphone size={28} />, 
      title: 'Frameworks & Mobile', 
      subtitle: 'Development',
      skills: [
        { name: 'Mobile Platforms', detail: 'Flutter & React Native' },
        { name: 'Web Tech', detail: 'Node.js, React.js, Bootstrap' },
        { name: 'Desktop Dev', detail: 'Python & SQLite integration' }
      ]
    },
    { 
      icon: <Code2 size={28} />, 
      title: 'Languages & Foundations', 
      subtitle: 'Robust Engineering',
      skills: [
        { name: 'Core Languages', detail: 'Java, Dart, Python, JS, C/C++' },
        { name: 'Enterprise Java', detail: 'J2EE, JDBC, Servlets, JSP' },
        { name: 'Web3', detail: 'Solidity & Ethereum' }
      ]
    },
    { 
      icon: <Monitor size={28} />, 
      title: 'Infrastructure & Environment', 
      subtitle: 'Linux Power User',
      skills: [
        { name: 'OS', detail: 'Expert-level Linux proficiency' },
        { name: 'Editor', detail: 'Neovim & VS Code (Keyboard-driven)' },
        { name: 'DevOps & Cloud', detail: 'Docker, Git, GCP' },
        { name: 'Databases', detail: 'MySQL, MongoDB, SQLite' }
      ]
    },
  ];

  return (
    <section id="skills" style={{ padding: 'var(--section-padding)', maxWidth: '100%', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', marginBottom: '3rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Developer Toolkit</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px' }}>
            Organized to highlight the synergy between traditional <span style={{ color: 'var(--accent-blue)' }}>software engineering</span> and modern <span style={{ color: 'var(--accent-emerald)' }}>AI-augmented workflows</span>.
          </p>
        </motion.div>
      </div>

      <div className="skills-queue" style={{ 
        display: 'flex', 
        gap: '2rem', 
        overflowX: 'auto', 
        padding: '0 4vw 4rem', 
        scrollSnapType: 'x mandatory',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        {categories.map((category, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            style={{
              flex: '0 0 clamp(300px, 80vw, 380px)',
              scrollSnapAlign: 'start',
              backgroundColor: 'var(--bg-card)',
              padding: '2.5rem',
              borderRadius: '24px',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              transition: 'transform 0.3s ease'
            }}
            whileHover={{ y: -10, borderColor: 'rgba(255, 255, 255, 0.2)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-primary)', 
                width: '56px', height: '56px', borderRadius: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {category.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>{category.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{category.subtitle}</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} style={{ padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.03)' }}>
                  <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{skill.name}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{skill.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .skills-queue::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Skills;
