import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Stars, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Particle Field Component
const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Generate random particles
  const particleCount = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [particleCount]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#ccff00" size={0.03} sizeAttenuation={true} depthWrite={false} />
    </Points>
  );
};

export const CyberCore = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Group>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.2;
      coreRef.current.rotation.y = t * 0.3;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = -t * 0.1;
      outerRingRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
    }
    
    // Parallax mouse effect
    if (groupRef.current) {
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, state.pointer.x * 2, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, state.pointer.y * 2, 0.05);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
        
        {/* Core Torus Knot for complex reflections */}
        <mesh ref={coreRef} scale={1.2}>
          <torusKnotGeometry args={[1, 0.3, 256, 64]} />
          <MeshTransmissionMaterial 
            backside
            samples={8}
            thickness={1}
            chromaticAberration={2}
            anisotropy={0.5}
            distortion={0.3}
            distortionScale={0.8}
            temporalDistortion={0.2}
            color="#ffffff"
            transmission={1}
            opacity={1}
            roughness={0.1}
          />
        </mesh>

        {/* Inner Glowing Core */}
        <mesh scale={0.7}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color="#ccff00" wireframe transparent opacity={0.6} />
        </mesh>

        {/* Outer Orbital Tech Rings */}
        <group ref={outerRingRef}>
          <mesh rotation={[Math.PI / 2, 0, 0]} scale={3.5}>
            <torusGeometry args={[1, 0.003, 16, 128]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
          </mesh>
          <mesh rotation={[0, Math.PI / 3, 0]} scale={4}>
            <torusGeometry args={[1, 0.002, 16, 128]} />
            <meshBasicMaterial color="#ccff00" transparent opacity={0.3} />
          </mesh>
          <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]} scale={4.5}>
             <torusGeometry args={[1, 0.001, 16, 128]} />
             <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
          </mesh>
        </group>
      </Float>

      {/* Cyberpunk Particles */}
      <ParticleField />
      
      {/* Background Stars */}
      <Stars radius={50} depth={50} count={2000} factor={3} saturation={0} fade speed={1} />
      
      {/* Cinematic Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ccff00" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
      <pointLight position={[0, 0, 0]} intensity={2} color="#ccff00" distance={5} />
    </group>
  );
};
