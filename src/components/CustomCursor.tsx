import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 8,
          height: 8,
          backgroundColor: '#fff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10001,
          x: cursorXSpring,
          y: cursorYSpring,
          display: isVisible ? 'block' : 'none',
        }}
      />
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 32,
          height: 32,
          border: '1px solid rgba(255, 255, 255, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          x: useSpring(cursorX, { damping: 15, stiffness: 100 }),
          y: useSpring(cursorY, { damping: 15, stiffness: 100 }),
          display: isVisible ? 'block' : 'none',
          translateX: '-40%',
          translateY: '-40%',
        }}
      />
    </>
  );
};

export default CustomCursor;
