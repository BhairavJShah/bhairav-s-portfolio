import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, Sphere, ContactShadows, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

const PremiumOrb = ({ theme }: { theme: 'light' | 'dark' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1.5, 128, 128]}>
        <MeshDistortMaterial
          color={theme === 'dark' ? "#111111" : "#ffffff"}
          envMapIntensity={theme === 'dark' ? 1.5 : 2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.6}
          roughness={0.1}
          distort={0.4}
          speed={2}
          transmission={0.8}
          thickness={1.5}
          ior={1.5}
        />
      </Sphere>
    </Float>
  );
};

const AmbientLights = () => {
  return (
    <Environment resolution={256}>
      <group rotation={[-Math.PI / 3, 0, 0]}>
        {/* Apple-esque gradients: Blue, Pink, Cyan */}
        <Lightformer form="circle" intensity={4} color="#007aff" rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
        <Lightformer form="circle" intensity={3} color="#ff2d55" rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
        <Lightformer form="circle" intensity={3} color="#00ffcc" rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
      </group>
    </Environment>
  );
};

const AppleOrbBackground = () => {
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

  const bgColor = theme === 'dark' ? '#050505' : '#f5f5f7';

  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 0,
      background: bgColor,
      transition: 'background-color 0.5s ease',
      pointerEvents: 'none'
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={[bgColor]} />
        
        <ambientLight intensity={theme === 'dark' ? 0.2 : 0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        
        <PremiumOrb theme={theme} />
        <AmbientLights />
        
        <ContactShadows position={[0, -2, 0]} opacity={theme === 'dark' ? 0.6 : 0.15} scale={15} blur={2.5} far={4.5} />
      </Canvas>
    </div>
  );
};

export default AppleOrbBackground;
