import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Database, Zap, Terminal, Code2, Layers, Globe } from 'lucide-react';
import '../styles/Global.css';

const projectData: Record<string, any> = {
  'java-learning-platform': {
    title: 'Java Learning Platform',
    category: 'AI-Native / Mobile',
    tech: 'Flutter, Dart, AI Orchestration',
    env: 'Manjaro XFCE / Neovim',
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
    tech: 'React Native, JS, Prompt Engineering',
    env: 'Manjaro XFCE / Neovim',
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
  'decentralized-money': {
    title: 'Decentralized Money',
    category: 'Blockchain / DeFi',
    tech: 'Solidity, Ethereum, Blockchain',
    env: 'Hardhat / Manjaro',
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

const CaseStudy = () => {
  const { id } = useParams();
  const project = projectData[id || ''];

  if (!project) return <div style={{ color: '#fff', padding: '100px' }}>Project not found</div>;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-color)', paddingTop: '100px', color: 'var(--text-primary)' }}>
      <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '0.9rem', fontWeight: 600 }}>
          <ArrowLeft size={18} /> Back to Projects
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem', alignItems: 'start' }}>
          <div>
            <span style={{ color: 'var(--accent-emerald)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {project.category}
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 800, margin: '1rem 0 2rem', lineHeight: 1 }}>
              {project.title}
            </h1>
            
            <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '2rem', lineHeight: 1.6 }}>
              {project.overview}
            </p>

            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-card)', borderRadius: '24px', border: '1px solid var(--border)', marginBottom: '4rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Terminal size={20} color="var(--accent-emerald)" /> Technical Specs
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {project.specs.map((spec: any, idx: number) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ color: 'var(--text-secondary)' }}>{spec.icon}</div>
                    <div>
                      <p style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>{spec.label}</p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border)', height: '500px' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        <div style={{ marginTop: '4rem', padding: '4rem 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Scalability Focus</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{project.scalability}</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Vibe Coding Details</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{project.vibe}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
