import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleNetwork = ({ theme }: { theme: 'light' | 'dark' }) => {
  const { mouse, viewport } = useThree();
  const count = 120;
  const meshRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 10
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.008
        )
      });
    }
    return temp;
  }, [count]);

  const [positions, linePositions] = useMemo(() => {
    return [new Float32Array(count * 3), new Float32Array(count * count * 6)];
  }, [count]);

  useFrame(() => {
    if (!meshRef.current || !linesRef.current) return;

    let lineIndex = 0;
    const mouseV3 = new THREE.Vector3(
      (mouse.x * viewport.width) / 2,
      (mouse.y * viewport.height) / 2,
      0
    );

    particles.forEach((p, i) => {
      p.position.add(p.velocity);

      if (Math.abs(p.position.x) > 15) p.velocity.x *= -1;
      if (Math.abs(p.position.y) > 15) p.velocity.y *= -1;

      const distToMouse = p.position.distanceTo(mouseV3);
      if (distToMouse < 6) {
        const dir = new THREE.Vector3().subVectors(p.position, mouseV3).normalize();
        const force = (6 - distToMouse) * 0.08;
        p.position.addScaledVector(dir, force);
      }

      positions[i * 3] = p.position.x;
      positions[i * 3 + 1] = p.position.y;
      positions[i * 3 + 2] = p.position.z;

      for (let j = i + 1; j < count; j++) {
        const p2 = particles[j];
        const dist = p.position.distanceTo(p2.position);
        if (dist < 5) { 
          linePositions[lineIndex++] = p.position.x;
          linePositions[lineIndex++] = p.position.y;
          linePositions[lineIndex++] = p.position.z;
          linePositions[lineIndex++] = p2.position.x;
          linePositions[lineIndex++] = p2.position.y;
          linePositions[lineIndex++] = p2.position.z;
        }
      }
    });

    meshRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.attributes.position.needsUpdate = true;
    
    for (let k = lineIndex; k < linePositions.length; k++) {
      linePositions[k] = 0;
    }
  });

  const color = theme === 'dark' ? "#00ffcc" : "#0066cc";

  return (
    <group>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.25}
          color={color} 
          transparent 
          opacity={0.9}
          blending={theme === 'dark' ? THREE.AdditiveBlending : THREE.NormalBlending} 
          sizeAttenuation={true}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial 
          color={color} 
          transparent 
          opacity={0.4}
          blending={theme === 'dark' ? THREE.AdditiveBlending : THREE.NormalBlending} 
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
};

const NetworkBackground = () => {
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
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={[bgColor]} />
        <ParticleNetwork theme={theme} />
      </Canvas>
    </div>
  );
};

export default NetworkBackground;
