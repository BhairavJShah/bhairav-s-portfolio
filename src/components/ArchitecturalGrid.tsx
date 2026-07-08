import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const VoxelGrid = ({ theme }: { theme: 'light' | 'dark' }) => {
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  
  // Grid parameters
  const gridSize = 15;
  const spacing = 1.5;
  
  const accentColor = theme === 'dark' ? "#00ffcc" : "#007aff";
  const boxColor = theme === 'dark' ? "#111111" : "#e0e0e0";

  const boxes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        temp.push({
          position: [
            (i - gridSize / 2) * spacing,
            (j - gridSize / 2) * spacing,
            0
          ],
          delay: Math.random() * 5
        });
      }
    }
    return temp;
  }, [gridSize, spacing]);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    const t = state.clock.getElapsedTime();
    
    // Smooth group rotation and tilt based on mouse
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, state.pointer.x * 0.2, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -state.pointer.y * 0.2, 0.05);

    // Animate individual voxel heights
    groupRef.current.children.forEach((child, i) => {
      const box = boxes[i];
      if (child instanceof THREE.Mesh) {
        const wave = Math.sin(t + box.delay) * 0.5;
        const mouseDist = new THREE.Vector2(child.position.x, child.position.y).distanceTo(new THREE.Vector2(state.pointer.x * viewport.width, state.pointer.y * viewport.height));
        
        const hoverEffect = mouseDist < 4 ? (4 - mouseDist) * 0.5 : 0;
        child.position.z = wave + hoverEffect;
        child.scale.setScalar(1 + hoverEffect * 0.2);
      }
    });
  });

  return (
    <group ref={groupRef}>
      {boxes.map((box, i) => (
        <mesh key={i} position={box.position as [number, number, number]}>
          <boxGeometry args={[0.8, 0.8, 0.1]} />
          <meshStandardMaterial 
            color={boxColor} 
            metalness={0.8} 
            roughness={0.2} 
            transparent 
            opacity={0.4} 
          />
          <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(0.8, 0.8, 0.1)]} />
            <lineBasicMaterial color={accentColor} transparent opacity={0.2} />
          </lineSegments>
        </mesh>
      ))}
    </group>
  );
};

const DataStreams = ({ theme }: { theme: 'light' | 'dark' }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 500;
  const accentColor = theme === 'dark' ? "#00ffcc" : "#007aff";

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      vel[i] = 0.02 + Math.random() * 0.05;
    }
    return [pos, vel];
  }, [count]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 2] += velocities[i];
      if (pos[i * 3 + 2] > 10) pos[i * 3 + 2] = -10;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={count} 
          array={positions} 
          itemSize={3} 
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color={accentColor} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const ArchitecturalGrid = () => {
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
      transition: 'background-color 0.5s ease'
    }}>
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={50} />
        <color attach="background" args={[bgColor]} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color={theme === 'dark' ? "#00ffcc" : "#007aff"} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <VoxelGrid theme={theme} />
        </Float>
        
        <DataStreams theme={theme} />
      </Canvas>
    </div>
  );
};

export default ArchitecturalGrid;
