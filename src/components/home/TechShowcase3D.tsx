import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, Torus, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Monitor, Smartphone, Cloud, Database, Globe, Cpu } from 'lucide-react';
import shapesBackground from '@/assets/3d-shapes-bg.png';

// Animated floating sphere
const AnimatedSphere = ({ position, color, speed = 1, distort = 0.3 }: { position: [number, number, number], color: string, speed?: number, distort?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

// Animated floating box
const AnimatedBox = ({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <Box ref={meshRef} args={[1.2, 1.2, 1.2]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Box>
    </Float>
  );
};

// Animated torus
const AnimatedTorus = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
      <Torus ref={meshRef} args={[0.8, 0.3, 16, 32]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </Torus>
    </Float>
  );
};

// 3D Scene
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[10, -10, 5]} intensity={0.5} color="#06b6d4" />
      
      <AnimatedSphere position={[-2.5, 1, 0]} color="#8b5cf6" distort={0.4} />
      <AnimatedSphere position={[2.5, -0.5, -1]} color="#06b6d4" speed={0.8} distort={0.3} />
      <AnimatedBox position={[0, 0, 0]} color="#ec4899" speed={0.6} />
      <AnimatedBox position={[-1.5, -1.5, 1]} color="#10b981" speed={0.4} />
      <AnimatedTorus position={[2, 1.5, -0.5]} color="#f59e0b" />
      <AnimatedTorus position={[-2, -1, -1]} color="#3b82f6" />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};

const TechShowcase3D = () => {
  const capabilities = [
    {
      icon: Monitor,
      title: 'Web Apps',
      description: 'Responsive & performant',
      color: 'primary',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'iOS & Android native',
      color: 'secondary',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable infrastructure',
      color: 'accent',
    },
    {
      icon: Database,
      title: 'Data Systems',
      description: 'Real-time analytics',
      color: 'highlight',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment',
      color: 'primary',
    },
    {
      icon: Cpu,
      title: 'AI & ML',
      description: 'Smart automation',
      color: 'secondary',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden section-padding">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${shapesBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm text-foreground/80">Interactive Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Cutting-Edge <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We leverage the latest technologies to build immersive digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Canvas */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden glass border border-border/50">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
                <Scene />
              </Canvas>
            </Suspense>
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent" />
            
            {/* Interactive hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-sm text-muted-foreground">
              ✨ Drag to interact
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-2 gap-4">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="group glass rounded-xl p-5 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-border/50 hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-${cap.color}/10 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110`}>
                  <cap.icon className={`w-6 h-6 text-${cap.color}`} />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-1">{cap.title}</h3>
                <p className="text-sm text-muted-foreground">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2D Floating Elements */}
        <div className="mt-16 relative">
          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech, index) => (
              <div
                key={tech}
                className="glass px-6 py-3 rounded-full border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="font-medium gradient-text">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechShowcase3D;
