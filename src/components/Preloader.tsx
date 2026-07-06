import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 100) return;
    const timer = setInterval(() => {
      setCount(prev => {
        // Accelerate: slow at start, fast in middle, slow at end
        const remaining = 100 - prev;
        const step = Math.max(1, Math.floor(remaining / 10));
        return Math.min(100, prev + step);
      });
    }, 30);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        zIndex: 9999,
        backgroundColor: '#0a0a0a',
        overflow: 'hidden',
        gap: '2rem'
      }}
    >
      {/* Percentage Counter */}
      <motion.p
        variants={fadeIn}
        initial="initial"
        animate="enter"
        style={{
          fontSize: 'clamp(4rem, 15vw, 12rem)',
          fontWeight: 900,
          lineHeight: 1,
          background: 'linear-gradient(135deg, #00f5d4 0%, #00bbf9 50%, #9b5de5 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          letterSpacing: '-0.04em',
          userSelect: 'none'
        }}
      >
        {count}
      </motion.p>

      {/* Name Label */}
      <motion.span
        variants={fadeIn}
        initial="initial"
        animate="enter"
        style={{
          fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
          fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)',
          color: '#8e8e93',
          letterSpacing: '0.5em',
          textTransform: 'uppercase',
          userSelect: 'none'
        }}
      >
        BHAIRAV J. SHAH
      </motion.span>
    </motion.div>
  );
}

const fadeIn = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.8, delay: 0.1 } },
};

const slideUp = {
  initial: {
    top: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const }
  },
  exit: {
    top: '-100vh',
    transition: { duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] as const }
  }
};
