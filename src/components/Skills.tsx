import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
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
  const [isFrozen, setIsFrozen] = useState(false);

  useEffect(() => {
    const handleFreeze = (e: Event) => {
      const duration = (e as CustomEvent).detail?.duration || 5000;
      setIsFrozen(true);
      setTimeout(() => {
        setIsFrozen(false);
      }, duration);
    };

    window.addEventListener('freeze-skills', handleFreeze);
    return () => window.removeEventListener('freeze-skills', handleFreeze);
  }, []);

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

  const row1Skills = [...skillCategories[0].skills, ...skillCategories[1].skills];
  const row2Skills = [...skillCategories[2].skills, ...skillCategories[3].skills];

  const MarqueeRow = ({ skills, direction, speed }: { skills: any[]; direction: 'left' | 'right'; speed: number }) => (
    <div className="marquee-container" style={{ overflow: 'hidden', width: '100%', padding: '0.5rem 0' }}>
      <div
        className={`marquee-track marquee-${direction} ${isFrozen ? 'frozen' : ''}`}
        style={{
          display: 'flex',
          gap: '1rem',
          width: 'max-content',
          animation: `marquee-${direction} ${speed}s linear infinite`
        }}
      >
        {/* Render skills TWICE for seamless loop */}
        {[...skills, ...skills].map((skill, i) => (
          <div
            key={i}
            className="skill-pill"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              padding: '0.8rem 1.5rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--panel-border)',
              borderRadius: '100px',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease',
              cursor: 'default',
              flexShrink: 0
            }}
          >
            <span style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center' }}>{skill.icon}</span>
            <span style={{ color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: 600 }}>{skill.name}</span>
            <span style={{ color: 'var(--text-sub)', fontSize: '0.75rem', fontWeight: 500, opacity: 0.7 }}>{skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills">
      <div className="content-block">
        <div className="container">

          {/* Header */}
          <div style={{ marginBottom: '4rem' }}>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.4em', display: 'block', marginBottom: '1rem' }}
            >
              [ TECHNICAL_STACK ]
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text-main)', fontWeight: 900 }}
            >
              <span className="gradient-text" style={{
                background: 'linear-gradient(135deg, var(--accent), var(--text-main))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                SKILLS.
              </span>
            </motion.h2>
          </div>

          {/* Marquee Rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
          >
            <MarqueeRow skills={row1Skills} direction="left" speed={35} />
            <MarqueeRow skills={row2Skills} direction="right" speed={40} />
          </motion.div>

        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
        .marquee-track.frozen {
          animation-play-state: paused !important;
        }
        .skill-pill:hover {
          border-color: var(--accent) !important;
          background: var(--accent-soft) !important;
          box-shadow: 0 0 20px var(--accent-soft);
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Skills;
