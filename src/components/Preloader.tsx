import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const words = ["Hello", "Bonjour", "Ciao", "Olà", "Namaste", "Hallå", "Guten tag", "Hello"];

  useEffect(() => {
    if (index === words.length - 1) return;
    const timer = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1000 : 150);
    return () => clearTimeout(timer);
  }, [index, words.length]);

  return (
    <motion.div
      variants={curve}
      initial="initial"
      exit="exit"
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        zIndex: 9999,
        backgroundColor: '#000',
        overflow: 'hidden'
      }}
    >
      <motion.p
        variants={opacity}
        initial="initial"
        animate="enter"
        style={{
          display: 'flex',
          color: 'white',
          fontSize: '4rem',
          alignItems: 'center',
          zIndex: 1,
          fontWeight: 700,
          fontFamily: 'monospace'
        }}
      >
        <span style={{ 
          display: 'block', 
          width: '10px', 
          height: '10px', 
          backgroundColor: '#00ffcc', 
          borderRadius: '50%', 
          marginRight: '1rem',
          boxShadow: '0 0 20px #00ffcc'
        }} />
        {words[index]}
      </motion.p>
      
      {/* Dynamic Slide-up Curve SVG */}
      <svg style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 'calc(100% + 300px)',
        zIndex: 0
      }}>
        <motion.path 
          variants={curve} 
          initial="initial" 
          exit="exit"
          fill="#000"
          stroke="none"
        />
      </svg>
    </motion.div>
  );
}

const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 0.75, transition: { duration: 1, delay: 0.2 } },
};

const curve = {
  initial: {
    top: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const }
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] as const }
  }
};
