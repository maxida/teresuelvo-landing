import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Environment, Points, PointMaterial, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ProfessionalSection from './components/ProfessionalSection';
import Footer from './components/Footer';
import './App.css';

// Small helper to generate points inside a sphere (no external dependency)
function generateSpherePoints(count = 1000, radius = 1.5) {
  const array = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // random direction
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = Math.cbrt(Math.random()) * radius; // distribute in volume
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    array[i * 3 + 0] = x;
    array[i * 3 + 1] = y;
    array[i * 3 + 2] = z;
  }
  return array;
}

function FloatingScene() {
  const group = useRef();
  const points = useMemo(() => generateSpherePoints(2500, 2.2), []);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.05;
      group.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={group}>
      <Points positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#60A5FA"
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>

      {/* Martillo */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <group position={[1.6, 0.2, 0.6]} rotation={[0.2, 0.4, -0.2]} castShadow>
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.12, 0.12, 1.6, 48]} />
            <meshPhysicalMaterial color="#0ea5e9" metalness={0.25} roughness={0.35} clearcoat={0.4} clearcoatRoughness={0.2} />
          </mesh>
          <mesh position={[0, 0.55, 0]} castShadow>
            <boxGeometry args={[0.8, 0.25, 0.25]} />
            <meshPhysicalMaterial color="#fbbf24" metalness={0.85} roughness={0.22} clearcoat={0.55} clearcoatRoughness={0.08} emissive="#f59e0b" emissiveIntensity={0.12} />
          </mesh>
          <mesh position={[0.35, 0.55, 0]} castShadow>
            <boxGeometry args={[0.2, 0.25, 0.5]} />
            <meshPhysicalMaterial color="#f59e0b" metalness={0.9} roughness={0.18} clearcoat={0.55} clearcoatRoughness={0.08} />
          </mesh>
        </group>
      </Float>

      {/* Destornillador */}
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1}>
        <group position={[-1.3, -0.1, -0.4]} rotation={[0.5, -0.3, 0.2]} castShadow>
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.12, 0.12, 1.2, 48]} />
            <meshPhysicalMaterial color="#7c3aed" metalness={0.35} roughness={0.32} clearcoat={0.5} clearcoatRoughness={0.15} emissive="#7c3aed" emissiveIntensity={0.05} />
          </mesh>
          <mesh position={[0, -0.45, 0]} castShadow>
            <cylinderGeometry args={[0.05, 0.05, 0.5, 32]} />
            <meshPhysicalMaterial color="#cbd5e1" metalness={0.85} roughness={0.18} clearcoat={0.4} clearcoatRoughness={0.1} />
          </mesh>
          <mesh position={[0, -0.75, 0]} castShadow>
            <coneGeometry args={[0.08, 0.25, 32]} />
            <meshPhysicalMaterial color="#e2e8f0" metalness={0.9} roughness={0.14} clearcoat={0.35} clearcoatRoughness={0.08} />
          </mesh>
        </group>
      </Float>

      {/* Pincel */}
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
        <group position={[0.2, -0.8, -1.2]} rotation={[0.4, 0.2, -0.3]} castShadow>
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.09, 0.09, 1.0, 40]} />
            <meshPhysicalMaterial color="#0ea5e9" metalness={0.25} roughness={0.32} clearcoat={0.45} clearcoatRoughness={0.18} />
          </mesh>
          <mesh position={[0, -0.45, 0]} castShadow>
            <cylinderGeometry args={[0.11, 0.11, 0.15, 32]} />
            <meshPhysicalMaterial color="#94a3b8" metalness={0.8} roughness={0.22} clearcoat={0.4} clearcoatRoughness={0.1} />
          </mesh>
          <mesh position={[0, -0.6, 0]} castShadow>
            <boxGeometry args={[0.18, 0.12, 0.3]} />
            <meshPhysicalMaterial color="#f472b6" metalness={0.35} roughness={0.38} clearcoat={0.35} clearcoatRoughness={0.2} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

function App() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="app">
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }} shadows dpr={[1, 2]} gl={{ antialias: true }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.6} />
            <directionalLight intensity={0.6} position={[5, 5, 5]} />
            <FloatingScene />
            <Environment preset="city" />
            <ContactShadows position={[0, -2.5, 0]} opacity={0.6} scale={10} blur={2} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.2} />
          </Suspense>
        </Canvas>
      </div>

      <div className="content-wrapper">
        <Header />

        <main>
          <section className="hero">
            <motion.div className="hero-content" initial="hidden" animate="visible" variants={fadeInUp}>
              <Hero />
            </motion.div>
          </section>

          <Features />
          <HowItWorks />
          <ProfessionalSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;