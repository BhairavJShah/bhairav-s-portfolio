import { motion } from 'framer-motion';

const VibeBackground = () => {
  return (
    <div style={{ 
      position: 'fixed', 
      inset: 0, 
      zIndex: -1, 
      backgroundColor: 'var(--bg-color)', 
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      {/* Mesh Gradient */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-10%', width: '60%', height: '60%',
        background: 'radial-gradient(circle, rgba(0, 113, 227, 0.1) 0%, transparent 70%)',
        filter: 'blur(100px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', right: '-10%', width: '50%', height: '50%',
        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, transparent 70%)',
        filter: 'blur(100px)',
      }} />

      {/* Moving Grid */}
      <motion.div 
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute', inset: '-100%', 
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(circle, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)',
          transform: 'perspective(1000px) rotateX(60deg)',
        }} 
      />
    </div>
  );
};

export default VibeBackground;
