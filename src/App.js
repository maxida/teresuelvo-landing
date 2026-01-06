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

      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[1.6, 0.2, 0.6]} castShadow>
          <torusGeometry args={[0.6, 0.18, 64, 128]} />
          <meshPhysicalMaterial color="#FBBF24" metalness={0.9} roughness={0.15} clearcoat={0.6} clearcoatRoughness={0.05} emissive="#f59e0b" emissiveIntensity={0.2} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1}>
        <mesh position={[-1.3, -0.1, -0.4]} castShadow>
          <sphereGeometry args={[0.7, 64, 64]} />
          <meshPhysicalMaterial color="#7C3AED" metalness={0.6} roughness={0.12} clearcoat={0.4} clearcoatRoughness={0.05} emissive="#7C3AED" emissiveIntensity={0.06} />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh position={[0.2, -0.8, -1.2]} castShadow>
          <boxGeometry args={[0.9, 0.5, 0.5, 8, 8, 8]} />
          <meshPhysicalMaterial color="#06B6D4" metalness={0.5} roughness={0.18} clearcoat={0.3} clearcoatRoughness={0.05} emissive="#06B6D4" emissiveIntensity={0.06} />
        </mesh>
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