import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Animated particle field
function ParticleField() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 600;
  const dummy = new THREE.Object3D();
  const positions = useRef<Float32Array>(new Float32Array(count * 3));
  const velocities = useRef<Float32Array>(new Float32Array(count * 3));

  useEffect(() => {
    for (let i = 0; i < count; i++) {
      positions.current[i * 3] = (Math.random() - 0.5) * 20;
      positions.current[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions.current[i * 3 + 2] = (Math.random() - 0.5) * 10;
      velocities.current[i * 3] = (Math.random() - 0.5) * 0.002;
      velocities.current[i * 3 + 1] = (Math.random() - 0.5) * 0.002;
      velocities.current[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
    }
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      const x = positions.current[i * 3] + velocities.current[i * 3] + Math.sin(t * 0.2 + i) * 0.001;
      const y = positions.current[i * 3 + 1] + velocities.current[i * 3 + 1] + Math.cos(t * 0.15 + i) * 0.001;
      const z = positions.current[i * 3 + 2] + velocities.current[i * 3 + 2];
      dummy.position.set(x, y, z);
      const scale = 0.02 + Math.sin(t + i * 0.1) * 0.01;
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#00E676" transparent opacity={0.6} />
    </instancedMesh>
  );
}

// Waveform ribbon
function WaveformRibbon() {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometryRef = useRef<THREE.PlaneGeometry>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current || !geometryRef.current) return;
    const t = clock.getElapsedTime();
    const pos = geometryRef.current.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const wave = Math.sin(x * 2 + t * 2) * 0.3 + Math.sin(x * 4 + t * 1.5) * 0.15;
      pos.setZ(i, wave);
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} position={[0, -1, -3]} rotation={[0.2, 0, 0]}>
      <planeGeometry ref={geometryRef} args={[20, 4, 100, 20]} />
      <meshBasicMaterial color="#2962FF" wireframe transparent opacity={0.3} side={THREE.DoubleSide} />
    </mesh>
  );
}

// Floating orbit rings
function OrbitRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.08;
  });

  return (
    <group ref={groupRef}>
      {[3, 5, 7].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2.5, 0, i * 0.5]}>
          <torusGeometry args={[radius, 0.02, 8, 100]} />
          <meshBasicMaterial color={i === 0 ? '#00E676' : i === 1 ? '#2962FF' : '#FF3D00'} transparent opacity={0.2} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Headline character animation
      if (headlineRef.current) {
        const text = headlineRef.current.innerText;
        headlineRef.current.innerHTML = text
          .split('')
          .map((char) => `<span class="inline-block" style="opacity:0;transform:translateY(80%) rotateX(-40deg)">${char === ' ' ? '&nbsp;' : char}</span>`)
          .join('');

        tl.to(headlineRef.current.querySelectorAll('span'), {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.02,
          ease: 'power3.out',
        });
      }

      // Subheadline
      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.3'
      );

      // CTAs
      tl.fromTo(
        ctaRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <ParticleField />
          <WaveformRibbon />
          <OrbitRings />
        </Canvas>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <h1
          ref={headlineRef}
          className="font-display font-bold text-offwhite leading-[0.9] tracking-tight"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 7rem)',
            letterSpacing: '-0.03em',
            perspective: '1000px',
          }}
        >
          We turn social momentum into measurable growth
        </h1>

        <p
          ref={subRef}
          className="mt-8 text-lg md:text-xl text-offwhite/70 max-w-3xl mx-auto leading-relaxed opacity-0"
        >
          Sway is a research-driven growth agency at the intersection of social media, content, and virality. We convert viewers and followers into customers.
        </p>

        <div ref={ctaRef} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="magnetic-btn magnetic-btn-primary text-sm px-8 py-3.5"
          >
            Sway It
          </Link>
          <Link
            to="/world-cup"
            className="magnetic-btn magnetic-btn-secondary text-sm px-8 py-3.5"
          >
            See Growth System
          </Link>
        </div>
      </div>

      {/* Floating data particles around edges */}
      <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-green/50 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-1.5 h-1.5 rounded-full bg-blue/50 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-2 h-2 rounded-full bg-red/40 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-10 w-1.5 h-1.5 rounded-full bg-yellow/40 animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/3 left-1/4 w-1 h-1 rounded-full bg-green/30 animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full bg-blue/30 animate-float" style={{ animationDelay: '2.5s' }} />
    </section>
  );
}
