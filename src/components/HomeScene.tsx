import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Float, 
  MeshTransmissionMaterial, 
} from '@react-three/drei';
import * as THREE from 'three';

const Crystal = ({ position, rotation, scale, color }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
      
      const targetX = state.pointer.x * 0.5;
      const targetY = state.pointer.y * 0.5;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetY + rotation[0], 0.1);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX + rotation[1], 0.1);
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <MeshTransmissionMaterial 
        backside
        samples={4}
        thickness={1}
        chromaticAberration={0.5}
        anisotropy={0.3}
        distortion={0.5}
        distortionScale={0.5}
        temporalDistortion={0.1}
        color={color}
        transmission={1}
        roughness={0}
      />
    </mesh>
  );
};

const CrystalField = () => {
  const crystals = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 15; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 5
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
        scale: Math.random() * 0.6 + 0.2,
        color: i % 2 === 0 ? "#ffffff" : "#00ffcc"
      });
    }
    return temp;
  }, []);

  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, state.pointer.x * 0.3, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -state.pointer.y * 0.3, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      {crystals.map((props, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={1}>
          <Crystal {...props} />
        </Float>
      ))}
    </group>
  );
};

const HomeScene = () => {
  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100vh', // Explicit vh
      zIndex: 1, 
      pointerEvents: 'auto'
    }}>
      <Canvas 
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00ffcc" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
        <directionalLight position={[0, 0, 5]} intensity={1} color="#ffffff" />
        
        <CrystalField />
        
        {/* Confirmed visible test mesh */}
        <mesh position={[0, 0, -2]}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshBasicMaterial color="#00ffcc" wireframe transparent opacity={0.3} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default HomeScene;