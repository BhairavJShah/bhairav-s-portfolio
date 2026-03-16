import { useRef, useEffect, useState, useCallback } from 'react';

interface ParticlesProps {
  particleCount?: number;
  displaySyncopate?: boolean;
  staticity?: number;
  ease?: number;
  color?: string;
  particleBaseSize?: number;
  sizeVariation?: number;
  moveSpeed?: number;
  linkDistance?: number;
  linkOpacity?: number;
  linkWidth?: number;
}

const Particles = ({
  moveSpeed = 0.4,
  linkDistance = 100,
  linkOpacity = 0.4,
  linkWidth = 2,
}: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<any[]>([]);
  const mouse = useRef({ x: -1000, y: -1000 });
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const t = document.documentElement.getAttribute('data-theme') as 'light' | 'dark';
    if (t) setTheme(t);

    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark';
      setTheme(currentTheme);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const createParticles = useCallback((width: number, height: number) => {
    // Dynamic particle count based on screen area
    const area = width * height;
    const baseDensity = 0.0004; // Adjust this for overall density
    const dynamicCount = Math.floor(area * baseDensity);
    
    // Clamp between 100 and 1000 for performance and visibility
    const finalCount = Math.min(Math.max(dynamicCount, 100), 1000);

    const temp = [];
    for (let i = 0; i < finalCount; i++) {
      temp.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * moveSpeed,
        vy: (Math.random() - 0.5) * moveSpeed,
        size: Math.random() * 1.5 + 0.5
      });
    }
    particles.current = temp;
  }, [moveSpeed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const pixelRatio = 0.5; // Optimized as requested

    const resize = () => {
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);
      createParticles(window.innerWidth, window.innerHeight);
    };

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      const accent = theme === 'dark' ? '#00ffcc' : '#007aff';
      ctx.fillStyle = accent;
      ctx.strokeStyle = accent;

      const pCount = particles.current.length;

      for (let i = 0; i < pCount; i++) {
        const p = particles.current[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw links
        for (let j = i + 1; j < pCount; j++) {
          const p2 = particles.current[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < linkDistance) {
            ctx.globalAlpha = (1 - dist / linkDistance) * linkOpacity;
            ctx.lineWidth = linkWidth;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, linkDistance, linkOpacity, linkWidth, createParticles]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'transparent',
        opacity: theme === 'dark' ? 0.8 : 0.6
      }}
    />
  );
};

export default Particles;
