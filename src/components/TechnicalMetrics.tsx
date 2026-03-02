import { motion } from 'framer-motion';
import '../styles/Global.css';

const TechnicalMetrics = () => {
  const metrics = [
    { value: '10k+', label: 'Records', sub: 'High-concurrency DB architecture' },
    { value: '99.9%', label: 'Fault Tolerance', sub: 'Solidity smart contract reliability' },
    { value: '90%', label: 'Efficiency', sub: 'Optimized CRUD performance' },
    { value: '3x', label: 'Velocity', sub: 'Vibe Coding production speed' },
  ];

  return (
    <section style={{ padding: 'clamp(40px, 6vw, 60px) 24px', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
        {metrics.map((m, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <h3 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{m.value}</h3>
            <p style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem', color: 'var(--accent-emerald)' }}>{m.label}</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{m.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalMetrics;
