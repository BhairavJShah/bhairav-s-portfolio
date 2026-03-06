import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Float, 
  Environment, 
  MeshDistortMaterial, 
  Sparkles, 
  ContactShadows,
  Lightformer,
  MeshWobbleMaterial
} from '@react-three/drei';
import * as THREE from 'three';

const ScrollReactiveShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    // Calculate scroll progress (0 to 1)
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrollY / maxScroll;

    if (meshRef.current) {
      // Rotation based on time + scroll
      meshRef.current.rotation.x = t * 0.2 + scrollProgress * Math.PI;
      meshRef.current.rotation.y = t * 0.3 + scrollProgress * Math.PI * 2;
      
      // Position shifts based on scroll
      meshRef.current.position.x = Math.sin(scrollProgress * Math.PI) * 5;
      meshRef.current.position.z = -scrollProgress * 10;
      
      // Scale pulse
      const s = 1 + Math.sin(t * 2) * 0.05 + (hovered ? 0.2 : 0);
      meshRef.current.scale.set(s, s, s);
    }
    
    if (materialRef.current) {
      // Distortion intensifies with scroll
      materialRef.current.distort = 0.3 + scrollProgress * 0.5;
      materialRef.current.speed = 2 + scrollProgress * 5;
    }
  });

  return (
    <Float floatIntensity={1} rotationIntensity={1}>
      <mesh 
        ref={meshRef} 
        onPointerOver={() => setHovered(true)} 
        onPointerOut={() => setHovered(false)}
        castShadow
      >
        <torusKnotGeometry args={[2, 0.6, 256, 64]} />
        <MeshDistortMaterial
          ref={materialRef}
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.9}
          roughness={0.1}
          color={hovered ? "#00ffcc" : "#0066CC"}
          distort={0.4}
          speed={2}
          transmission={0.8}
          thickness={2}
        />
      </mesh>
    </Float>
  );
};

const BackgroundElements = () => {
  const count = 20;
  const elements = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20 - 10
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
        scale: Math.random() * 0.5 + 0.1
      });
    }
    return temp;
  }, []);

  return (
    <group>
      {elements.map((el, i) => (
        <Float key={i} speed={2} rotationIntensity={2} floatIntensity={2}>
          <mesh position={el.position as any} rotation={el.rotation as any} scale={el.scale}>
            <octahedronGeometry />
            <MeshWobbleMaterial color="#00ffcc" factor={1} speed={2} wireframe transparent opacity={0.1} />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const Scene = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 45 }}>
        <color attach="background" args={['#000000']} />
        
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00ffcc" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#0066cc" />
        
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 4, -0.3, 0]}>
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
          </group>
        </Environment>

        <ScrollReactiveShape />
        <BackgroundElements />
        
        <Sparkles count={400} scale={20} size={1} speed={0.4} opacity={0.3} color="#ffffff" />
        
        <ContactShadows position={[0, -5, 0]} opacity={0.4} scale={30} blur={2} far={10} />
      </Canvas>
    </div>
  );
};

export default Scene;