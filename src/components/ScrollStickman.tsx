import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const JARVIS_QUOTES = [
  'Deploying code modules...', 'Java Garbage Collector optimized.', 'Warning: High velocity detected.',
  'OpenAI founders checking our repo!', 'Vibe coding levels exceeding 9000.', 'Should I rewrite this in Rust? 🦀',
  'Bhairav is typing... wait, he is coding.', 'Linux server uptime: 99.99%.', 'Analyzing portfolio assets...',
  'Look at my backflips! 🤸', 'Attention: Recruiter alert! 🚨', 'Checking Anthropic founder coordinates.',
  'Scanning page layout... looks premium.', 'Web-slinging algorithms active.', 'Iron Man flight systems fully charged.',
  'Let me freeze the skills index for you.', 'Double click me to grow big!', 'Fling me around to test my gravity.',
  'Physics loops working at 60fps.', 'Bhairav builds J2EE systems in his sleep.', 'Prompt engineering initialized.',
  'Vercel bundles verified and active.', 'No placeholders found. Only class.', 'Ask me a question about Bhairav!',
  'Jarvis AI systems: online.', 'Are we vibe coding together? 💻', 'Do you want to see a magic trick?',
  'Initiating backflip protocol. 🤸', 'Warning: High levels of aesthetic details.', 'Analyzing user behavior...',
  'Is it just me, or is this page fast?', 'Bouncing makes me dizzy... 😵', 'I can swing by spider web!',
  'Iron Man mode activated. 🚀', 'Available for opportunities.', 'Let\'s connect and build systems.',
  'Seeking attention from Google founders.', 'Warping scroll coordinates.', 'Checking Neovim config...',
  'System anchored and healthy.', 'Bhairav is a certified Linux Power User.', 'Garbage collection sequence completed.',
  'Token usage optimized. 🤖', 'I am here to help you navigate.', 'Throw me to watch me bounce!',
  'Jetpack thrusters calibrated.', 'Scanning for recruiters. 🕵️‍♂️', 'Full-stack engineering: unlocked.',
  'Jarvis core: standing by.', 'Have you checked the projects roulette?', 'Spin the wheel below! 🎡',
  'Decrypting project case studies...', 'Java + Flutter + React = power.', 'Need a coffee break? ☕',
  'Click the Q&A menu above me!', 'How is your local time? ⏰', 'Checking system parameters...',
  'Scroll風 velocity: registered.', 'I react to air resistance! 🌬️', 'Bumping into walls... stabilized!',
  'Stabilization vectors ready.', 'Ascending scroll trajectory.', 'Free-falling down the page...',
  'Let\'s build something extraordinary!', 'Waving at OpenAI team... 👋', 'Vibe coding is the future.',
  'Prompt. Execute. Deploy. Repeat.', 'Zero TypeScript warnings here.', 'Clean compilation guaranteed.',
  'High-level UI/UX detected.', 'Linear aesthetic values: active.', 'Apple styling standards met.',
  'Cinematic overlay noise: ON.', 'Ambient gradient glows: loaded.', 'Custom spring cursor active.',
  'Recruit Bhairav today! 🌟', 'Need robust Java backends?', 'I can point to sections.',
  'Climbing the page scrollbar...', 'Stunt cooling cycle active.', 'Jet flight trajectory locked.',
  'Web anchors set to skills panel.', 'Freezing animation engines.', 'Highlighting technical stacks.',
  'System lock: deactivated.', 'Hover indicators responsive.', 'Bento grids scaled perfectly.',
  'Check the case studies. 📚', 'Try the live deployments!', 'Decryption sequence ready.',
  'Click manually if you prefer.', 'Arcade console status: READY.', 'Available for global roles.',
  'Full remote or hybrid config.', 'Java developer in action.', 'Jarvis AI assistant at your service.',
  'Why do Java programmers wear glasses? Because they don\'t C#! 🤓',
  'There are 10 types of people: those who understand binary, and those who don\'t. 🤖',
  'A SQL query walks into a bar, walks up to two tables and asks: "Can I join you?" 📊',
  'Why did the software engineer cross the road? To get to the other IDE! 💻',
  'Linux is user-friendly. It\'s just very selective about who its friends are! 🐧',
  'How many programmers does it take to change a lightbulb? None, that\'s a hardware problem! 💡',
  '["hip", "hip"] - hip hip array! 🎁',
  'Why did the database administrator leave his wife? She had too many foreign keys! 🔑',
  'An LLM walks into a bar. Bartender says: "What\'ll you have?" LLM says: "As an AI language model, I cannot consume alcohol." 🍺',
  'Why do programmers prefer dark mode? Because light attracts bugs! 🪲',
  'Java developers never get lost. They just follow the stack trace! 🧩',
  'What is a programmer\'s favorite place to hang out? Foo Bar! 🍻'
];

const QA_DATA = [
  {
    q: "Who is Bhairav?",
    a: "Bhairav J. Shah is a Full-Stack Developer & AI Architect specializing in high-performance Java systems, AI Orchestration, and cross-platform mobile apps.",
    target: "about"
  },
  {
    q: "What is his tech stack?",
    a: "Java, Spring Boot, React, React Native, Flutter, Python, Zod, and Advanced LLM pipelines. Let me show you his skills index!",
    target: "skills"
  },
  {
    q: "Show me his projects",
    a: "He engineered an AI Data Analyst Bot, a Flutter Java Learning App, and Solidity contracts. Check out the Case Study Roulette below!",
    target: "projects"
  },
  {
    q: "Is he open to hire?",
    a: "Yes! Bhairav is open to Full-Stack, Java, Mobile, or AI Developer opportunities. Check out his contact links below.",
    target: "contact"
  }
];

export default function ScrollStickman() {
  const [scrollState, setScrollState] = useState<'idle' | 'climbing' | 'falling' | 'held' | 'thrown' | 'dancing' | 'big' | 'walking' | 'flying' | 'swinging'>('idle');
  const [bubbleText, setBubbleText] = useState("Hi, I'm Bhairav's AI assistant / Jarvis!");
  const [scale, setScale] = useState(2); // Reduced from 4X to 2X (perfect half-size!)
  const [showMenu, setShowMenu] = useState(false);
  const [rotationTick, setRotationTick] = useState(0);

  // Web coordinate anchors
  const [webAnchor, setWebAnchor] = useState<{ x: number; y: number } | null>(null);

  // Screen coordinates motion values
  const xPos = useMotionValue(window.innerWidth * 0.5);
  const yPos = useMotionValue(window.innerHeight * 0.4);

  // Center coordinate mappings for drawing the single web line
  const webX = useTransform(xPos, (x) => x + 30);
  const webY = useTransform(yPos, (y) => y + 35);

  const prevScrollRef = useRef(0);
  const stuntTimerRef = useRef<any>(null);
  const animationFrameRef = useRef<number | null>(null);
  const speechBubbleTimerRef = useRef<any>(null);

  const isInteractiveRef = useRef(false);
  const physicsLoopRef = useRef<{ vx: number; vy: number }>({ vx: 0, vy: 0 });

  // Define Central Safe Boundaries (to prevent stickman from going into the 4 corners)
  const getSafeBounds = () => {
    return {
      minX: window.innerWidth * 0.25,
      maxX: window.innerWidth * 0.75 - 60,
      minY: window.innerHeight * 0.25,
      maxY: window.innerHeight * 0.75 - 85
    };
  };

  // Render loop ticker to drive continuous mathematical joint sways
  useEffect(() => {
    let active = true;
    const tick = () => {
      if (active) {
        setRotationTick((t) => t + 1);
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
    return () => { active = false; };
  }, []);

  // 1. Scroll-based physics wind force updates
  useEffect(() => {
    const handleScrollTracking = () => {
      const currentScroll = window.scrollY;
      const prevScroll = prevScrollRef.current;
      prevScrollRef.current = currentScroll;
      const delta = currentScroll - prevScroll;

      if (!isInteractiveRef.current && Math.abs(delta) > 5) {
        isInteractiveRef.current = true;
        setScrollState(delta > 0 ? 'falling' : 'climbing');
        setBubbleText(delta > 0 ? 'WIND_TUNNEL!' : 'UPDRAFT!');
        
        physicsLoopRef.current.vy = -delta * 0.2;
        physicsLoopRef.current.vx = (Math.random() - 0.5) * 4;
        
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        startPhysicsSimulation();
      }
    };

    window.addEventListener('scroll', handleScrollTracking, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollTracking);
  }, [scrollState]);

  // Dynamic random speech bubble chatter
  useEffect(() => {
    speechBubbleTimerRef.current = setInterval(() => {
      if (scrollState === 'idle' && !isInteractiveRef.current) {
        const randomQuote = JARVIS_QUOTES[Math.floor(Math.random() * JARVIS_QUOTES.length)];
        setBubbleText(randomQuote);
      }
    }, 15000);

    return () => clearInterval(speechBubbleTimerRef.current);
  }, [scrollState]);

  // Initial greeting
  useEffect(() => {
    const timer = setTimeout(() => {
      setBubbleText('SYSTEM_ANCHORED');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // 2. 2D Physics Engine Loop
  const startPhysicsSimulation = () => {
    const gravity = 0.5;
    const bounce = 0.6;
    const friction = 0.98;
    const startTime = Date.now();

    const runPhysics = () => {
      const { minX, maxX, minY, maxY } = getSafeBounds();

      if (Date.now() - startTime > 3000) {
        xPos.set(Math.random() * (maxX - minX) + minX);
        yPos.set(maxY);
        physicsLoopRef.current.vx = 0;
        physicsLoopRef.current.vy = 0;
        setBubbleText('STABILIZED!');
        triggerWalkHome();
        return;
      }

      let currentX = xPos.get() + physicsLoopRef.current.vx;
      let currentY = yPos.get() + physicsLoopRef.current.vy;
      
      if (scrollState !== 'flying' && scrollState !== 'swinging') {
        physicsLoopRef.current.vy += gravity;
      }

      // Collisions with Safe boundaries (keeps him away from corners)
      if (currentY >= maxY) {
        currentY = maxY;
        physicsLoopRef.current.vy = -physicsLoopRef.current.vy * bounce;
        physicsLoopRef.current.vx *= friction;
      }
      if (currentY <= minY) {
        currentY = minY;
        physicsLoopRef.current.vy = -physicsLoopRef.current.vy * bounce;
      }
      if (currentX >= maxX) {
        currentX = maxX;
        physicsLoopRef.current.vx = -physicsLoopRef.current.vx * bounce;
      } else if (currentX <= minX) {
        currentX = minX;
        physicsLoopRef.current.vx = -physicsLoopRef.current.vx * bounce;
      }

      xPos.set(currentX);
      yPos.set(currentY);

      if (
        Math.abs(physicsLoopRef.current.vx) < 0.25 &&
        Math.abs(physicsLoopRef.current.vy) < 0.35 &&
        currentY >= maxY - 5
      ) {
        physicsLoopRef.current.vx = 0;
        physicsLoopRef.current.vy = 0;
        setScrollState('idle');
        setBubbleText('SYSTEM_ANCHORED');
        isInteractiveRef.current = false;
      } else {
        animationFrameRef.current = requestAnimationFrame(runPhysics);
      }
    };

    animationFrameRef.current = requestAnimationFrame(runPhysics);
  };

  // 3. Stunt Trigger Engine (Roams strictly in safe central bounds)
  useEffect(() => {
    const triggerStunt = () => {
      if (isInteractiveRef.current || scrollState !== 'idle' || showMenu) return;

      isInteractiveRef.current = true;
      const roll = Math.floor(Math.random() * 3);
      const { minX, maxX, minY, maxY } = getSafeBounds();

      if (roll === 0) {
        // WEB SWING
        setScrollState('swinging');
        setBubbleText('WEB_SLINGING! 🕸️');
        const anchorX = xPos.get() + (Math.random() > 0.5 ? -100 : 100);
        const anchorY = minY - 30;
        setWebAnchor({ x: anchorX, y: anchorY });

        let angle = Math.atan2(yPos.get() - anchorY, xPos.get() - anchorX);
        const length = Math.hypot(yPos.get() - anchorY, xPos.get() - anchorX);
        let angularVelocity = Math.random() > 0.5 ? 0.05 : -0.05;

        const swingTick = () => {
          const gravityForce = 0.003 * Math.sin(angle);
          angularVelocity -= gravityForce;
          angle += angularVelocity;

          const nextX = anchorX + length * Math.cos(angle);
          const nextY = anchorY + length * Math.sin(angle);

          xPos.set(nextX);
          yPos.set(nextY);

          if (nextY < minY + 30 || Math.abs(angularVelocity) < 0.01) {
            setWebAnchor(null);
            setScrollState('falling');
            setBubbleText('RELEASE! 🪂');
            physicsLoopRef.current.vx = -angularVelocity * length * Math.sin(angle);
            physicsLoopRef.current.vy = angularVelocity * length * Math.cos(angle);
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            startPhysicsSimulation();
          } else {
            animationFrameRef.current = requestAnimationFrame(swingTick);
          }
        };
        animationFrameRef.current = requestAnimationFrame(swingTick);

      } else if (roll === 1) {
        // JET FLIGHT
        setScrollState('flying');
        setBubbleText('JARVIS_JETPACK_ENGAGED! 🚀');
        const startX = xPos.get();
        const startY = yPos.get();
        const targetX = Math.random() * (maxX - minX) + minX;
        const targetY = Math.random() * (maxY - minY) + minY;
        
        let t = 0;
        const flyTick = () => {
          t += 0.025;
          const curX = startX + (targetX - startX) * t;
          const curY = startY + (targetY - startY) * t - Math.sin(t * Math.PI) * 50;
          xPos.set(curX);
          yPos.set(curY);

          if (t >= 1) {
            setScrollState('falling');
            setBubbleText('THRUSTERS_OFF');
            physicsLoopRef.current.vx = (targetX - startX) * 0.01;
            physicsLoopRef.current.vy = 2;
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            startPhysicsSimulation();
          } else {
            animationFrameRef.current = requestAnimationFrame(flyTick);
          }
        };
        animationFrameRef.current = requestAnimationFrame(flyTick);

      } else {
        // ROAMING WALK
        setScrollState('walking');
        setBubbleText('ROAMING_FREE 🚶');
        const targetX = Math.random() * (maxX - minX) + minX;
        const targetY = Math.random() * (maxY - minY) + minY;
        
        const walkTick = () => {
          const curX = xPos.get();
          const curY = yPos.get();
          const diffX = targetX - curX;
          const diffY = targetY - curY;

          let nextX = curX;
          let nextY = curY;

          if (Math.abs(diffX) > 2) {
            nextX += Math.sign(diffX) * 2;
          } else {
            nextX = targetX;
          }

          if (Math.abs(diffY) > 2) {
            nextY += Math.sign(diffY) * 2;
          } else {
            nextY = targetY;
          }

          xPos.set(nextX);
          yPos.set(nextY + Math.sin(Date.now() * 0.01) * 1.5);

          if (nextX === targetX && Math.abs(nextY - targetY) < 5) {
            yPos.set(targetY);
            setScrollState('idle');
            setBubbleText('SYSTEM_ANCHORED');
            isInteractiveRef.current = false;
          } else {
            animationFrameRef.current = requestAnimationFrame(walkTick);
          }
        };
        animationFrameRef.current = requestAnimationFrame(walkTick);
      }
    };

    stuntTimerRef.current = setInterval(triggerStunt, 22000);
    return () => clearInterval(stuntTimerRef.current);
  }, [scrollState, showMenu]);

  // 4. Drag mechanics
  const handleDragStart = () => {
    isInteractiveRef.current = true;
    setShowMenu(false);
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    setScrollState('held');
    setBubbleText('HELD_CAPTIVE! 😲');
    setWebAnchor(null);
  };

  const handleDragEnd = (_event: any, info: any) => {
    setScrollState('thrown');
    setBubbleText('FLUNG! 🌀');
    physicsLoopRef.current.vx = info.velocity.x * 0.04;
    physicsLoopRef.current.vy = info.velocity.y * 0.04;
    
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    startPhysicsSimulation();
  };

  // Walk/Fly back to a random coordinate post in safe center bounds
  const triggerWalkHome = () => {
    const { minX, maxX, minY, maxY } = getSafeBounds();
    const targetX = Math.random() * (maxX - minX) + minX;
    const targetY = Math.random() * (maxY - minY) + minY;
    
    const isFlying = targetY < yPos.get() - 100;
    setScrollState(isFlying ? 'flying' : 'walking');
    setBubbleText(isFlying ? 'FLYING_TO_COORDINATES 🚀' : 'WALKING_TO_COORDINATES 🚶');

    const roamTick = () => {
      const currentX = xPos.get();
      const currentY = yPos.get();
      
      const diffX = targetX - currentX;
      const diffY = targetY - currentY;

      const speedX = isFlying ? 4 : 2;
      const speedY = isFlying ? 4 : 2;

      let nextX = currentX;
      let nextY = currentY;

      if (Math.abs(diffX) > speedX) {
        nextX += Math.sign(diffX) * speedX;
      } else {
        nextX = targetX;
      }

      if (Math.abs(diffY) > speedY) {
        nextY += Math.sign(diffY) * speedY;
      } else {
        nextY = targetY;
      }

      if (!isFlying) {
        nextY = nextY + Math.sin(Date.now() * 0.01) * 1.5;
      }

      xPos.set(nextX);
      yPos.set(nextY);

      if (nextX === targetX && Math.abs(nextY - targetY) < 5) {
        yPos.set(targetY);
        setScrollState('idle');
        setBubbleText('SYSTEM_ANCHORED');
        isInteractiveRef.current = false;
      } else {
        animationFrameRef.current = requestAnimationFrame(roamTick);
      }
    };
    animationFrameRef.current = requestAnimationFrame(roamTick);
  };

  // 5. Q&A Core Actions
  const handleQAClick = (targetId: string, answer: string) => {
    setBubbleText(answer);
    setShowMenu(false);

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });

      // Special webbing interaction for Skills section
      if (targetId === 'skills') {
        setTimeout(() => {
          const rect = el.getBoundingClientRect();
          setWebAnchor({
            x: window.innerWidth / 2,
            y: rect.top + window.scrollY - 100
          });
          setScrollState('swinging');
          setBubbleText('LOCKING_SKILLS_GRID! 🕸️');

          window.dispatchEvent(
            new CustomEvent('freeze-skills', { detail: { duration: 5000 } })
          );

          setTimeout(() => {
            setWebAnchor(null);
            setScrollState('idle');
            setBubbleText('SKILLS_DECRYPTED');
            isInteractiveRef.current = false;
          }, 2500);
        }, 800);
      }
    }
  };

  // Click opens QA drawer
  const handleStickmanClick = () => {
    if (scrollState === 'held' || scrollState === 'thrown' || scrollState === 'swinging') return;
    setShowMenu((prev) => !prev);
    setBubbleText('SELECT_QA_PROTOCOL');
  };

  // Double click grows to 4X scale
  const handleDoubleClick = () => {
    if (scrollState === 'held' || scrollState === 'thrown' || scrollState === 'swinging') return;
    setBubbleText('SIZE_MAXIMIZED! ⚡');
    setScrollState('big');
    setScale(4);
    setTimeout(() => {
      setScale(2);
      setScrollState('idle');
      setBubbleText('SYSTEM_ANCHORED');
    }, 2000);
  };

  useEffect(() => {
    const { minX, minY } = getSafeBounds();
    xPos.set(minX + 50);
    yPos.set(minY + 50);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  // 6. Dynamic Joint Rotation Mathematical Calculations
  let armLeftRotate = -35;
  let armRightRotate = 35;
  let legLeftRotate = -12;
  let legRightRotate = 12;
  let bodyRotate = 0;
  let bodyYOffset = 0;

  switch (scrollState) {
    case 'held':
      armLeftRotate = -140;
      armRightRotate = 140;
      legLeftRotate = 15;
      legRightRotate = -15;
      break;
    case 'thrown':
      armLeftRotate = 90;
      armRightRotate = -90;
      legLeftRotate = 45;
      legRightRotate = -45;
      bodyRotate = (rotationTick * 8) % 360;
      break;
    case 'walking':
      armLeftRotate = Math.sin(rotationTick * 0.08) * 30 - 20;
      armRightRotate = -Math.sin(rotationTick * 0.08) * 30 + 20;
      legLeftRotate = Math.sin(rotationTick * 0.08) * 35 - 12;
      legRightRotate = -Math.sin(rotationTick * 0.08) * 35 + 12;
      break;
    case 'climbing':
      armLeftRotate = Math.sin(rotationTick * 0.1) * 45 - 45;
      armRightRotate = -Math.sin(rotationTick * 0.1) * 45 - 45;
      legLeftRotate = Math.sin(rotationTick * 0.1) * 25 - 12;
      legRightRotate = -Math.sin(rotationTick * 0.1) * 25 + 12;
      break;
    case 'falling':
      armLeftRotate = Math.sin(rotationTick * 0.15) * 65 - 45;
      armRightRotate = -Math.sin(rotationTick * 0.15) * 65 + 45;
      legLeftRotate = Math.sin(rotationTick * 0.15) * 35 - 20;
      legRightRotate = -Math.sin(rotationTick * 0.15) * 35 + 20;
      bodyRotate = Math.sin(rotationTick * 0.1) * 2;
      break;
    case 'flying':
      armLeftRotate = 70;
      armRightRotate = -70;
      legLeftRotate = -5;
      legRightRotate = 5;
      bodyYOffset = Math.sin(rotationTick * 0.05) * 4;
      break;
    case 'swinging':
      armLeftRotate = -130;
      armRightRotate = -130;
      legLeftRotate = -25;
      legRightRotate = 25;
      break;
    case 'dancing':
      armLeftRotate = Math.sin(rotationTick * 0.12) * 55 - 55;
      armRightRotate = -Math.sin(rotationTick * 0.12) * 55 + 55;
      legLeftRotate = Math.sin(rotationTick * 0.12) * 20 - 15;
      legRightRotate = -Math.sin(rotationTick * 0.12) * 20 + 15;
      bodyRotate = Math.sin(rotationTick * 0.06) * 8;
      break;
    case 'big':
      armLeftRotate = -50;
      armRightRotate = 50;
      legLeftRotate = -15;
      legRightRotate = 15;
      break;
    case 'idle':
    default:
      armLeftRotate = Math.sin(rotationTick * 0.02) * 5 - 35;
      armRightRotate = -Math.sin(rotationTick * 0.02) * 5 + 35;
      bodyYOffset = Math.sin(rotationTick * 0.02) * 1.5;
      break;
  }

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 99999 }}>
      {/* Spider-Man Web Connector */}
      {scrollState === 'swinging' && webAnchor && (
        <svg style={{ position: 'absolute', inset: 0, width: '100vw', height: '100vh', overflow: 'visible' }}>
          <motion.line
            x1={webAnchor.x}
            y1={webAnchor.y}
            x2={webX}
            y2={webY}
            stroke="#ffffff"
            strokeWidth="3"
            opacity={0.9}
            style={{ filter: 'drop-shadow(0 0 5px rgba(0, 255, 204, 0.8))' }}
          />
        </svg>
      )}

      {/* Floating Q&A Menu */}
      {showMenu && (
        <div style={{
          position: 'absolute',
          left: `${xPos.get() - 290}px`,
          top: `${yPos.get() - 60}px`,
          width: '280px',
          background: 'var(--panel-glass)',
          border: '1px solid var(--panel-border)',
          borderRadius: '20px',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
          boxShadow: 'var(--shadow-elevated)',
          backdropFilter: 'blur(15px)',
          pointerEvents: 'auto',
          zIndex: 100000
        }}>
          <div style={{
            fontSize: '0.68rem',
            fontFamily: 'monospace',
            color: 'var(--accent)',
            borderBottom: '1px solid var(--panel-border)',
            paddingBottom: '0.4rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            letterSpacing: '0.05em'
          }}>
            <span>JARVIS_AI_ASSISTANT</span>
            <button
              onClick={() => setShowMenu(false)}
              style={{ background: 'none', border: 'none', color: 'var(--text-sub)', cursor: 'pointer', fontSize: '0.8rem' }}
            >
              ✕
            </button>
          </div>
          {QA_DATA.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleQAClick(item.target, item.a)}
              style={{
                textAlign: 'left',
                padding: '0.6rem 0.8rem',
                fontSize: '0.72rem',
                fontFamily: 'monospace',
                background: 'var(--qa-btn-bg)',
                border: '1px solid var(--panel-border)',
                borderRadius: '8px',
                color: 'var(--text-main)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--panel-border)';
                e.currentTarget.style.color = 'var(--text-main)';
              }}
            >
              &gt; {item.q}
            </button>
          ))}
        </div>
      )}

      {/* Stickman Model */}
      <motion.div
        style={{
          position: 'absolute',
          x: xPos,
          y: yPos,
          pointerEvents: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: scrollState === 'held' ? 'grabbing' : 'grab',
          scale: scale,
          transition: 'scale 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        drag
        dragMomentum={false}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onClick={handleStickmanClick}
        onDoubleClick={handleDoubleClick}
      >
        {/* Chat Speech Bubble */}
        <div className="stickman-bubble" style={{
          fontFamily: 'monospace',
          fontSize: '0.62rem',
          fontWeight: 'bold',
          padding: '0.35rem 0.7rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--panel-border)',
          borderRadius: '8px',
          color: 'var(--accent)',
          whiteSpace: 'normal',
          maxWidth: '180px',
          textAlign: 'center',
          pointerEvents: 'none',
          userSelect: 'none',
          boxShadow: '0 6px 16px var(--shadow)',
          marginBottom: '2px',
          backdropFilter: 'blur(10px)',
          transform: 'translateY(-2px)'
        }}>
          {bubbleText}
        </div>

        <svg width="60" height="85" viewBox="0 0 60 85" style={{ overflow: 'visible', pointerEvents: 'none' }}>
          {/* Ledge */}
          {scrollState === 'idle' && (
            <line x1="15" y1="74" x2="45" y2="74" stroke="var(--panel-border)" strokeWidth="3" strokeLinecap="round" />
          )}

          {/* Rope */}
          {(scrollState === 'climbing' || scrollState === 'falling') && (
            <line x1="30" y1="-100" x2="30" y2="100" stroke="var(--panel-border)" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
          )}

          {/* Jet flames */}
          {scrollState === 'flying' && (
            <g className="jet-flames">
              <polygon points="18,74 22,74 20,88" fill="#ff5500" style={{ transformOrigin: '20px 74px', animation: 'flame-jitter 0.1s infinite alternate' }} />
              <polygon points="19,74 21,74 20,82" fill="#ffcc00" />
              <polygon points="38,74 42,74 40,88" fill="#ff5500" style={{ transformOrigin: '40px 74px', animation: 'flame-jitter 0.1s infinite alternate-reverse' }} />
              <polygon points="39,74 41,74 40,82" fill="#ffcc00" />
            </g>
          )}

          {/* SVG Skeleton with double-segment arms/legs (elbows and knees) */}
          <motion.g 
            className="stickman-body" 
            animate={{ rotate: bodyRotate, y: bodyYOffset }} 
            style={{ transformOrigin: '30px 35px' }}
          >
            {/* Head */}
            <circle cx="30" cy="22" r="7" stroke="var(--accent)" strokeWidth="3" fill="var(--bg-color)" />
            {/* Torso */}
            <line x1="30" y1="29" x2="30" y2="48" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
            
            {/* Left Arm with natural elbow bend, rounded joint and solid hand */}
            <motion.g className="limb-arm-left" animate={{ rotate: armLeftRotate }} style={{ transformOrigin: '30px 33px' }}>
              <path d="M 30,33 L 24,43 L 24,53" stroke="var(--accent)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="24" cy="43" r="1.5" fill="var(--accent)" />
              <circle cx="24" cy="53" r="2.5" fill="var(--accent)" />
            </motion.g>

            {/* Right Arm with natural elbow bend, rounded joint and solid hand */}
            <motion.g className="limb-arm-right" animate={{ rotate: armRightRotate }} style={{ transformOrigin: '30px 33px' }}>
              <path d="M 30,33 L 36,43 L 36,53" stroke="var(--accent)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="36" cy="43" r="1.5" fill="var(--accent)" />
              <circle cx="36" cy="53" r="2.5" fill="var(--accent)" />
            </motion.g>

            {/* Left Leg with natural knee bend, rounded joint, ankle, and flat foot */}
            <motion.g className="limb-leg-left" animate={{ rotate: legLeftRotate }} style={{ transformOrigin: '30px 48px' }}>
              <path d="M 30,48 L 26,60 L 26,72" stroke="var(--accent)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="26" cy="60" r="1.5" fill="var(--accent)" />
              <line x1="26" y1="72" x2="20" y2="72" stroke="var(--accent)" strokeWidth="3.2" strokeLinecap="round" />
            </motion.g>

            {/* Right Leg with natural knee bend, rounded joint, ankle, and flat foot */}
            <motion.g className="limb-leg-right" animate={{ rotate: legRightRotate }} style={{ transformOrigin: '30px 48px' }}>
              <path d="M 30,48 L 34,60 L 34,72" stroke="var(--accent)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="34" cy="60" r="1.5" fill="var(--accent)" />
              <line x1="34" y1="72" x2="40" y2="72" stroke="var(--accent)" strokeWidth="3.2" strokeLinecap="round" />
            </motion.g>
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
}
