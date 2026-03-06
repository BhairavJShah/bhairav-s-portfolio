import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial, Sphere, ContactShadows, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

const LiquidMetalShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    if (materialRef.current) {
      materialRef.current.distort = THREE.MathUtils.lerp(
        materialRef.current.distort,
        0.4 + Math.sin(state.clock.elapsedTime) * 0.1,
        0.1
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.5, 128, 128]} scale={1.5}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#000000"
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={1}
          roughness={0.1}
          distort={0.4}
          speed={2}
        />
      </Sphere>
    </Float>
  );
};

const StudioLights = () => {
  return (
    <Environment resolution={512}>
      <group rotation={[-Math.PI / 3, 0, 0]}>
        <Lightformer form="ring" intensity={4} color="#00ffcc" rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
        <Lightformer form="ring" intensity={2} color="#ffffff" rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
        <Lightformer form="rect" intensity={2} color="#8000ff" rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
        <Lightformer form="rect" intensity={2} color="#ff0055" position={[0, -5, 5]} scale={[10, 10, 1]} />
      </group>
    </Environment>
  );
};

const HighPower3D = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none', background: '#000' }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 35 }} gl={{ antialias: true, alpha: false }}>
        <color attach="background" args={['#050505']} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />

        <Suspense fallback={null}>
          <LiquidMetalShape />
          <StudioLights />
        </Suspense>

        <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={20} blur={2.5} far={10} />
      </Canvas>
    </div>
  );
};

export default HighPower3D;
