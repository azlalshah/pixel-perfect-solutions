import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Sparkles as SparklesIcon, Film, Wand2, Layers, Zap, Palette } from 'lucide-react';

// Cute cartoon character - Robot
const RobotCharacter = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  const eyeLeftRef = useRef<THREE.Mesh>(null);
  const eyeRightRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.15;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
    // Blinking eyes
    const blink = Math.sin(state.clock.elapsedTime * 3) > 0.95 ? 0.1 : 1;
    if (eyeLeftRef.current) eyeLeftRef.current.scale.y = blink;
    if (eyeRightRef.current) eyeRightRef.current.scale.y = blink;
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} position={position}>
        {/* Body */}
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[0.9, 0.9, 0.7]} />
          <meshToonMaterial color="#3b82f6" />
        </mesh>
        {/* Head */}
        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[0.8, 0.7, 0.7]} />
          <meshToonMaterial color="#60a5fa" />
        </mesh>
        {/* Eyes */}
        <mesh ref={eyeLeftRef} position={[-0.18, 0.65, 0.36]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshToonMaterial color="#ffffff" />
        </mesh>
        <mesh ref={eyeRightRef} position={[0.18, 0.65, 0.36]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshToonMaterial color="#ffffff" />
        </mesh>
        {/* Pupils */}
        <mesh position={[-0.18, 0.65, 0.45]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshToonMaterial color="#000000" />
        </mesh>
        <mesh position={[0.18, 0.65, 0.45]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshToonMaterial color="#000000" />
        </mesh>
        {/* Antenna */}
        <mesh position={[0, 1.1, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.3]} />
          <meshToonMaterial color="#94a3b8" />
        </mesh>
        <mesh position={[0, 1.3, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshToonMaterial color="#ef4444" />
        </mesh>
        {/* Arms */}
        <mesh position={[-0.6, -0.2, 0]}>
          <capsuleGeometry args={[0.12, 0.4, 8, 16]} />
          <meshToonMaterial color="#60a5fa" />
        </mesh>
        <mesh position={[0.6, -0.2, 0]}>
          <capsuleGeometry args={[0.12, 0.4, 8, 16]} />
          <meshToonMaterial color="#60a5fa" />
        </mesh>
      </group>
    </Float>
  );
};

// Cute cartoon character - Blob/Slime
const BlobCharacter = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Squishy blob animation
      const squish = Math.sin(state.clock.elapsedTime * 2) * 0.15;
      meshRef.current.scale.set(1 + squish, 1 - squish, 1 + squish);
    }
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.abs(Math.sin(state.clock.elapsedTime * 2)) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef} position={position}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshToonMaterial color="#10b981" />
        </mesh>
        {/* Eyes */}
        <mesh position={[-0.2, 0.15, 0.55]}>
          <sphereGeometry args={[0.13, 16, 16]} />
          <meshToonMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0.2, 0.15, 0.55]}>
          <sphereGeometry args={[0.13, 16, 16]} />
          <meshToonMaterial color="#ffffff" />
        </mesh>
        <mesh position={[-0.2, 0.15, 0.65]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshToonMaterial color="#000000" />
        </mesh>
        <mesh position={[0.2, 0.15, 0.65]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshToonMaterial color="#000000" />
        </mesh>
        {/* Smile */}
        <mesh position={[0, -0.1, 0.6]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.15, 0.03, 16, 32, Math.PI]} />
          <meshToonMaterial color="#000000" />
        </mesh>
      </group>
    </Float>
  );
};

// Cute cartoon character - Star
const StarCharacter = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.5;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2.5) * 0.2;
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
      groupRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} position={position}>
        <mesh>
          <dodecahedronGeometry args={[0.6]} />
          <meshToonMaterial color="#fbbf24" />
        </mesh>
        {/* Eyes */}
        <mesh position={[-0.15, 0.05, 0.5]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshToonMaterial color="#000000" />
        </mesh>
        <mesh position={[0.15, 0.05, 0.5]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshToonMaterial color="#000000" />
        </mesh>
      </group>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-5, 3, -5]} intensity={0.4} color="#a78bfa" />
      <pointLight position={[0, -3, 3]} intensity={0.5} color="#06b6d4" />

      <Sparkles count={60} scale={10} size={2} speed={0.4} color="#fbbf24" />
      <Sparkles count={40} scale={8} size={1.5} speed={0.6} color="#a78bfa" />

      <RobotCharacter position={[-2.2, 0, 0]} />
      <BlobCharacter position={[0, -0.3, 0.5]} />
      <StarCharacter position={[2.2, 0.3, 0]} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 2.5}
      />
    </>
  );
};

const Animation3DSection = () => {
  const features = [
    {
      icon: SparklesIcon,
      title: '3D Character Design',
      description: 'Custom cartoon characters with personality, perfect for branding and storytelling.',
      color: 'primary',
    },
    {
      icon: Film,
      title: 'Animated Explainers',
      description: 'Eye-catching 3D animated videos that simplify complex ideas for your audience.',
      color: 'secondary',
    },
    {
      icon: Wand2,
      title: 'Motion Graphics',
      description: 'Smooth, dynamic motion design that brings your brand to life across platforms.',
      color: 'accent',
    },
    {
      icon: Layers,
      title: 'Interactive 3D',
      description: 'WebGL-powered interactive experiences that engage users in immersive worlds.',
      color: 'highlight',
    },
    {
      icon: Zap,
      title: 'Real-Time Rendering',
      description: 'High-performance 3D scenes optimized for web, mobile, and AR/VR platforms.',
      color: 'primary',
    },
    {
      icon: Palette,
      title: 'Stylized Art Direction',
      description: 'From toon-shaded fun to photorealistic visuals — we craft the right look.',
      color: 'secondary',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden section-padding bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-foreground/80">3D Animation Studio</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Bringing <span className="gradient-text">Cartoons</span> to Life with{' '}
            <span className="gradient-text">3D Magic</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From adorable mascots to cinematic motion graphics — our 3D animation team turns ideas into
            unforgettable visual stories that captivate and convert.
          </p>
        </div>

        {/* 3D Cartoon Characters Showcase */}
        <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16 glass border border-border/50">
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm text-muted-foreground">Loading 3D characters...</span>
                </div>
              </div>
            }
          >
            <Canvas
              camera={{ position: [0, 0, 6], fov: 50 }}
              style={{ background: 'transparent' }}
              gl={{ alpha: true, antialias: true }}
            >
              <Scene />
            </Canvas>
          </Suspense>

          {/* Glow overlays */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-accent/10 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-1/2 h-1/3 bg-primary/10 blur-3xl" />
          </div>

          {/* Hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-sm text-muted-foreground">
            🎨 Drag to interact with our cartoon friends
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-border/50 hover:border-primary/30 animate-float"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
              >
                <feature.icon className={`w-7 h-7 text-${feature.color}`} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Animation3DSection;
