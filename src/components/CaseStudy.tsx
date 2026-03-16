import { ArrowLeft, Cpu, Database, Zap, Terminal, Code2, Layers, Globe, Construction, BrainCircuit, ShieldCheck } from 'lucide-react';
import '../styles/Global.css';

const projectData: Record<string, any> = {
  'data-analysis-bot': {
    title: 'Data Analysis ToolBot',
    category: 'AI & DATA / ANALYTICS',
    status: 'completed',
    tech: 'Python, Llama-3, Gemini API, Streamlit',
    env: 'Linux / Docker',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    overview: 'A comprehensive data analysis tool integrating Llama-3 and Gemini to generate code snippets, insights, and automated visualizations from complex datasets.',
    scalability: 'Optimized for processing large-scale CSV/JSON files with efficient token management.',
    vibe: 'LLM-orchestrated insights reduce data exploration time by 70%.',
    specs: [
      { icon: <BrainCircuit size={18} />, label: 'Intelligence', value: 'Llama-3 / Gemini' },
      { icon: <Zap size={18} />, label: 'Speed', value: '-70% Analysis Time' },
      { icon: <Database size={18} />, label: 'Data', value: 'Multi-format Support' },
      { icon: <Terminal size={18} />, label: 'Architecture', value: 'API-Centric' },
    ]
  },
  'java-learning-platform': {
    title: 'Java Learning Platform',
    category: 'AI-Native / Mobile',
    status: 'wip',
    tech: 'Flutter, Dart, AI Orchestration',
    env: 'Linux / Neovim',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1000',
    overview: 'A comprehensive mobile learning application built entirely via Vibe Coding methodologies. The app features interactive code snippets and progress tracking to accelerate the Java learning curve.',
    scalability: 'Handles 100+ Java modules with modular architecture.',
    vibe: 'AI agents generated 80% of the Flutter/Dart boilerplate, allowing me to focus on custom interactive logic.',
    specs: [
      { icon: <Code2 size={18} />, label: 'Boilerplate', value: '80% AI Generated' },
      { icon: <Zap size={18} />, label: 'Velocity', value: '3x Faster TTM' },
      { icon: <Layers size={18} />, label: 'Architecture', value: 'Modular MVC' },
      { icon: <Globe size={18} />, label: 'Platform', value: 'iOS & Android' },
    ]
  },
  'modern-bingo-mobile': {
    title: 'Modern Bingo Mobile',
    category: 'Cross-Platform / Game',
    status: 'wip',
    tech: 'React Native, JS, Prompt Engineering',
    env: 'Linux / Neovim',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=1000',
    overview: 'A premium, multi-platform Bingo game employing Prompt Engineering to optimize game logic and high-fidelity UI/UX component structures via LLMs.',
    scalability: 'Optimized for high-fidelity real-time game state updates.',
    vibe: 'Iterative Prompt Engineering for UI/UX components.',
    specs: [
      { icon: <Cpu size={18} />, label: 'Logic', value: 'LLM Optimized' },
      { icon: <Zap size={18} />, label: 'Updates', value: 'Real-time state' },
      { icon: <Layers size={18} />, label: 'UI/UX', value: 'High-Fidelity' },
      { icon: <Globe size={18} />, label: 'Platform', value: 'Web & Mobile' },
    ]
  },
  'e-healthcare-system': {
    title: 'E-HealthCare System',
    category: 'Enterprise / Web',
    status: 'completed',
    tech: 'Java, MySQL, JSP, Servlets',
    env: 'Linux / IntelliJ',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1000',
    overview: 'A comprehensive healthcare portal managing 10,000+ patient records, reducing administrative workload by 50% through automated medical billing and appointment scheduling.',
    scalability: 'Manages 10,000+ patient records and automated billing.',
    vibe: 'Robust J2EE foundation with 50% admin load reduction.',
    specs: [
      { icon: <Database size={18} />, label: 'Records', value: '10,000+' },
      { icon: <Layers size={18} />, label: 'Load', value: '-50% Admin Work' },
      { icon: <Zap size={18} />, label: 'Efficiency', value: '+40% Bookings' },
      { icon: <Terminal size={18} />, label: 'Architecture', value: 'J2EE / MVC' },
    ]
  },
  'json-ai-validator': {
    title: 'JSON AI Validator',
    category: 'NPM PACKAGE / AI-OPS',
    status: 'completed',
    tech: 'TypeScript, Zod, OpenAI API',
    env: 'Linux / NPM',
    image: 'https://images.unsplash.com/photo-1558494949-ef010911182e?auto=format&fit=crop&q=80&w=1000',
    overview: 'An open-source NPM package that leverages AI and Zod to validate, sanitize, and generate complex JSON schemas automatically based on natural language descriptions.',
    scalability: 'High-performance schema validation with zero runtime overhead.',
    vibe: 'AI-driven schema generation eliminates manual boilerplate by 90%.',
    specs: [
      { icon: <ShieldCheck size={18} />, label: 'Security', value: 'Zod Validated' },
      { icon: <Zap size={18} />, label: 'Boilerplate', value: '-90% Manual Work' },
      { icon: <Layers size={18} />, label: 'Integration', value: 'TypeScript Ready' },
      { icon: <Globe size={18} />, label: 'Format', value: 'JSON / YAML' },
    ]
  },
  'qr-code-generator': {
    title: 'Dynamic QR Generator',
    category: 'UTILITY / WEB-APP',
    status: 'completed',
    tech: 'JavaScript, Tailwind CSS, QR-Canvas',
    env: 'Linux / Vite',
    image: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=1000',
    overview: 'A fast, lightweight QR code generator built with modern JavaScript. It allows for instant URL sharing with customizable design parameters and high-resolution exports.',
    scalability: 'Client-side processing ensures zero server load and instant generation.',
    vibe: 'Minimalist architecture focused on speed and aesthetic superiority.',
    specs: [
      { icon: <Zap size={18} />, label: 'Speed', value: 'Instant Gen' },
      { icon: <Globe size={18} />, label: 'Export', value: 'High-Res PNG/SVG' },
      { icon: <Layers size={18} />, label: 'Processing', value: '100% Client-side' },
      { icon: <Cpu size={18} />, label: 'Engine', value: 'Canvas Based' },
    ]
  },
  'decentralized-money': {
    title: 'Decentralized Money',
    category: 'Blockchain / DeFi',
    status: 'completed',
    tech: 'Solidity, Ethereum, Blockchain',
    env: 'Hardhat / Linux',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000',
    overview: 'Architected secure Smart Contracts in Solidity, achieving 100% transaction transparency and a 95% reduction in manual processing errors.',
    scalability: '99.9% fault tolerance with 40% efficiency gains.',
    vibe: '100% transaction transparency for decentralized trust.',
    specs: [
      { icon: <Database size={18} />, label: 'Reliability', value: '99.9% Uptime' },
      { icon: <Zap size={18} />, label: 'Efficiency', value: '+40% Tx Speed' },
      { icon: <Layers size={18} />, label: 'Security', value: 'Solidity Audited' },
      { icon: <Terminal size={18} />, label: 'Environment', value: 'Ethereum Mainnet' },
    ]
  }
};

interface CaseStudyProps {
  id: string;
  onViewChange: (view: string, id?: string) => void;
}

const CaseStudy = ({ id, onViewChange }: CaseStudyProps) => {
  const project = projectData[id || ''];

  if (!project) return <div style={{ color: 'var(--text-main)', padding: '100px', textAlign: 'center' }}>Project not found</div>;

  const isWip = project.status === 'wip';

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-color)', paddingTop: '100px', color: 'var(--text-main)' }}>
      <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
        <button 
          onClick={() => onViewChange('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-sub)', background: 'none', border: 'none', cursor: 'pointer', marginBottom: '3rem', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}
        >
          <ArrowLeft size={18} /> BACK_TO_PROJECTS
        </button>

        {isWip && (
          <div style={{
            background: 'var(--accent-soft)',
            border: '1px solid var(--accent)',
            padding: '1rem 2rem',
            borderRadius: '12px',
            marginBottom: '3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            color: 'var(--accent)'
          }}>
            <Construction size={20} />
            <span style={{ fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.1em' }}>CURRENTLY_WORKING_ON_THIS_PROJECT_SYSTEMS_ARE_BEING_OPTIMIZED</span>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem', alignItems: 'start' }}>  
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                {project.category}
              </span>
              {isWip && (
                <span style={{ padding: '2px 8px', background: 'var(--panel-border)', borderRadius: '4px', fontSize: '0.6rem', fontWeight: 900, color: 'var(--text-sub)' }}>WIP</span>
              )}
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900, margin: '1rem 0 2rem', lineHeight: 1, color: 'var(--text-main)' }}>
              {project.title}
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-sub)', marginBottom: '3rem', lineHeight: 1.6 }}>
              {project.overview}
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '4rem' }}>
              <a
                href={isWip ? undefined : "https://github.com/BhairavJShah"}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', pointerEvents: isWip ? 'none' : 'auto' }}
              >
                <button
                  disabled={isWip}
                  style={{
                    padding: '1.2rem 3rem',
                    background: isWip ? 'var(--panel-bg)' : 'var(--accent)',
                    color: isWip ? 'var(--text-sub)' : '#000',
                    border: 'none',
                    borderRadius: '100px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    cursor: isWip ? 'not-allowed' : 'pointer',
                    opacity: isWip ? 0.5 : 1,
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.1em'
                  }}
                >
                  {isWip ? 'TRY_NOW_DISABLED' : 'TRY_NOW'}
                </button>
              </a>

              {!isWip && (
                <a
                  href="https://github.com/BhairavJShah"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <button
                    style={{
                      padding: '1.2rem 3rem',
                      background: 'transparent',
                      color: 'var(--text-main)',
                      border: '1px solid var(--panel-border)',
                      borderRadius: '100px',
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      letterSpacing: '0.1em'
                    }}
                  >
                    VIEW_SOURCE
                  </button>
                </a>
              )}
            </div>

            <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '4rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent)' }}>
                <Terminal size={20} /> TECHNICAL_SPECIFICATIONS
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
                {project.specs.map((spec: any, idx: number) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                    <div style={{ color: 'var(--accent)', background: 'var(--accent-soft)', padding: '0.8rem', borderRadius: '12px' }}>{spec.icon}</div>
                    <div>
                      <p style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--text-sub)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>{spec.label}</p>
                      <p style={{ fontSize: '1rem', color: 'var(--text-main)', fontWeight: 700 }}>{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '40px', overflow: 'hidden', border: '1px solid var(--panel-border)', height: 'clamp(300px, 50vh, 600px)', boxShadow: '0 30px 60px var(--shadow)' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {isWip && (
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(0,0,0,0.8)',
                backdropFilter: 'blur(10px)',
                padding: '10px 20px',
                borderRadius: '100px',
                color: 'var(--accent)',
                fontSize: '0.7rem',
                fontWeight: 900,
                border: '1px solid var(--accent)',
                letterSpacing: '0.1em'
              }}>
                DEVELOPMENT_IN_PROGRESS
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: '6rem', padding: '6rem 0', borderTop: '1px solid var(--panel-border)' }}>
          <div style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', display: 'grid', gap: '6rem' }}>
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '2rem', color: 'var(--text-main)' }}>SCALABILITY_LOGIC</h3> 
              <p style={{ color: 'var(--text-sub)', lineHeight: 1.8, fontSize: '1.1rem' }}>{project.scalability}</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '2rem', color: 'var(--text-main)' }}>VIBE_CODING_METRICS</h3>
              <p style={{ color: 'var(--text-sub)', lineHeight: 1.8, fontSize: '1.1rem' }}>{project.vibe}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
