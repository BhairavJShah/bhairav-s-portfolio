import { motion } from 'framer-motion';
import { 
  ArrowRightLeft, 
  BrainCircuit, 
  Terminal, 
  Cpu, 
  Sparkles, 
  MousePointer2, 
  Coffee, 
  Code2, 
  Database, 
  ShieldCheck, 
  Smartphone, 
  Server, 
  Layout, 
  GitBranch, 
  Box, 
  Cloud, 
  Laptop,
  MessageSquareCode,
  Globe
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & Orchestration',
      skills: [
        { name: 'Vibe Coding', level: 'Advanced', icon: <BrainCircuit size={20} /> },
        { name: 'Prompt Eng.', level: 'Advanced', icon: <MessageSquareCode size={20} /> },
        { name: 'LLM Integration', level: 'Intermediate', icon: <Cpu size={20} /> },
        { name: 'Claude/GPT-4o', level: 'Advanced', icon: <Sparkles size={20} /> },
        { name: 'Cursor', level: 'Advanced', icon: <MousePointer2 size={20} /> },
      ],
    },
    {
      title: 'Languages',
      skills: [
        { name: 'Java', level: 'Advanced', icon: <Coffee size={20} /> },
        { name: 'Python', level: 'Advanced', icon: <Code2 size={20} /> },
        { name: 'JavaScript', level: 'Advanced', icon: <Code2 size={20} /> },
        { name: 'SQL', level: 'Advanced', icon: <Database size={20} /> },
        { name: 'Solidity', level: 'Basic', icon: <ShieldCheck size={20} /> },
        { name: 'HTML/CSS', level: 'Advanced', icon: <Globe size={20} /> },
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'Flutter', level: 'Intermediate', icon: <Smartphone size={20} /> },
        { name: 'React Native', level: 'Intermediate', icon: <Smartphone size={20} /> },
        { name: 'Node.js', level: 'Advanced', icon: <Server size={20} /> },
        { name: 'Spring Boot', level: 'Intermediate', icon: <Server size={20} /> },
        { name: 'Bootstrap', level: 'Advanced', icon: <Layout size={20} /> },
      ],
    },
    {
      title: 'Developer Tools',
      skills: [
        { name: 'Git', level: 'Advanced', icon: <GitBranch size={20} /> },
        { name: 'Docker', level: 'Intermediate', icon: <Box size={20} /> },
        { name: 'GCP', level: 'Intermediate', icon: <Cloud size={20} /> },
        { name: 'Neovim', level: 'Advanced', icon: <Terminal size={20} /> },
        { name: 'IntelliJ/VS Code', level: 'Advanced', icon: <Laptop size={20} /> },
      ],
    }
  ];

  return (
    <section id="skills">
      <div className="content-block">
        <div className="container">
          
          <div style={{ marginBottom: '6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.4em' }}
              >
                [ TECHNICAL_STACK ]
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text-main)', marginTop: '1rem', fontWeight: 900 }}
              >
                SKILLS.
              </motion.h2>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-sub)', opacity: 0.6 }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em' }}>SCROLL_HORIZONTAL</span>
              <ArrowRightLeft size={18} />
            </div>
          </div>

          <div
            className="skills-horizontal-scroll"
            style={{
              display: 'flex',
              gap: '2.5rem',
              overflowX: 'auto',
              paddingBottom: '3rem',
              paddingRight: '5vw',
              cursor: 'grab',
              scrollSnapType: 'x proximity'
            }}
          >            {skillCategories.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                style={{
                  minWidth: 'clamp(320px, 35vw, 550px)',
                  height: '550px',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--panel-border)',
                  borderRadius: '40px',
                  padding: '3.5rem',
                  transition: 'all 0.4s var(--transition-ease)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="skill-rect-block"
              >
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '150px', height: '150px', background: 'var(--accent)', filter: 'blur(100px)', opacity: 0.05 }} />
                
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: 800, 
                  color: 'var(--text-main)', 
                  marginBottom: '3rem',
                  borderBottom: '1px solid var(--panel-border)',
                  paddingBottom: '1.5rem'
                }}>
                  {category.title}
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                      <div style={{ 
                        width: '44px', 
                        height: '44px', 
                        borderRadius: '12px', 
                        background: 'rgba(255,255,255,0.03)', 
                        border: '1px solid var(--panel-border)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: 'var(--accent)',
                        transition: 'all 0.3s ease'
                      }} className="skill-icon-box">
                        {skill.icon}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>{skill.name}</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-sub)', fontWeight: 600 }}>{skill.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .skills-horizontal-scroll::-webkit-scrollbar {
          height: 6px;
        }
        .skills-horizontal-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
          margin: 0 5vw;
        }
        .skills-horizontal-scroll::-webkit-scrollbar-thumb {
          background: var(--accent);
          border-radius: 10px;
        }
        .skill-rect-block:hover {
          border-color: var(--accent);
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
        }
        .skill-rect-block:hover .skill-icon-box {
          background: var(--accent-soft);
          border-color: var(--accent);
          transform: scale(1.1);
        }
        .skills-horizontal-scroll:active {
          cursor: grabbing;
        }
      `}</style>
    </section>
  );
};

export default Skills;
