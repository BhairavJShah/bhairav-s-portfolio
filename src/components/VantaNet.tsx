import { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min';

const VantaNet = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // CRITICAL: Vanta.js needs THREE on the window object before initialization
    (window as any).THREE = THREE;

    const initVanta = () => {
      if (!vantaEffect.current && vantaRef.current) {
        try {
          const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
          
          vantaEffect.current = NET({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: isDark ? 0x00ffcc : 0x007aff,
            backgroundColor: isDark ? 0x050505 : 0xf5f5f7,
            points: 12.0,
            maxDistance: 22.0,
            spacing: 16.0,
            showDots: true
          });
          console.log("Vanta initialized successfully");
        } catch (err) {
          console.error("Vanta failed:", err);
        }
      }
    };

    // Small delay to ensure DOM and window.THREE are ready
    const timer = setTimeout(initVanta, 500);

    const handleThemeChange = () => {
      if (vantaEffect.current) {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        vantaEffect.current.setOptions({
          color: isDark ? 0x00ffcc : 0x007aff,
          backgroundColor: isDark ? 0x050505 : 0xf5f5f7
        });
      }
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => {
      clearTimeout(timer);
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0,
        pointerEvents: 'none'
      }} 
    />
  );
};

export default VantaNet;
