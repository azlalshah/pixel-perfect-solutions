import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Trail, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { Monitor, Smartphone, Cloud, Database, Globe, Cpu } from 'lucide-react';
import shapesBackground from '@/assets/3d-shapes-bg.png';

// Cartoon-style animated sphere with bounce
const CartoonSphere = ({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Bouncy cartoon animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.3;
      meshRef.current.scale.x = scale + Math.sin(state.clock.elapsedTime * 3) * 0.1;
      meshRef.current.scale.y = scale - Math.sin(state.clock.elapsedTime * 3) * 0.1;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.6 * scale, 32, 32]} />
        <meshToonMaterial color={color} />
      </mesh>
    </Float>
  );
};

// Cartoon cube with squash and stretch
const CartoonCube = ({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.7;
      // Squash and stretch effect
      const squash = Math.sin(state.clock.elapsedTime * 2) * 0.15;
      meshRef.current.scale.set(scale + squash, scale - squash, scale + squash);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <Trail width={2} length={4} color={color} attenuation={(t) => t * t}>
        <mesh ref={meshRef} position={position}>
          <boxGeometry args={[0.8 * scale, 0.8 * scale, 0.8 * scale]} />
          <meshToonMaterial color={color} />
        </mesh>
      </Trail>
    </Float>
  );
};

// Cartoon donut/torus
const CartoonDonut = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.8;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.5, 0.25, 16, 32]} />
        <meshToonMaterial color={color} />
      </mesh>
    </Float>
  );
};

// Cartoon cone (ice cream style)
const CartoonCone = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <coneGeometry args={[0.4, 1, 32]} />
        <meshToonMaterial color={color} />
      </mesh>
    </Float>
  );
};

// Cartoon star shape
const CartoonStar = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.5;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3) * 0.2);
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <dodecahedronGeometry args={[0.4]} />
        <meshToonMaterial color={color} />
      </mesh>
    </Float>
  );
};

// Cartoon cylinder (like a candy)
const CartoonCylinder = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.6;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <cylinderGeometry args={[0.3, 0.3, 0.8, 32]} />
        <meshToonMaterial color={color} />
      </mesh>
    </Float>
  );
};

// Heart shape using custom geometry
const CartoonHeart = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Pulsing heart animation
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.15;
      meshRef.current.scale.setScalar(pulse * 0.5);
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.6]} />
        <meshToonMaterial color={color} />
      </mesh>
    </Float>
  );
};

// Floating ring
const CartoonRing = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.PI / 2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.8;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.6, 0.1, 16, 32]} />
        <meshToonMaterial color={color} />
      </mesh>
    </Float>
  );
};

// Capsule shape
const CartoonCapsule = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.5;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <capsuleGeometry args={[0.25, 0.6, 16, 32]} />
        <meshToonMaterial color={color} />
      </mesh>
    </Float>
  );
};

// 3D Scene with cartoon style
const Scene = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <>
      {/* Lighting for toon shading */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[0, 0, 3]} intensity={0.5} color="#06b6d4" />
      
      {/* Background stars */}
      <Stars radius={50} depth={50} count={1000} factor={3} saturation={0.5} fade speed={1} />
      
      {/* Sparkle particles */}
      <Sparkles count={50} scale={8} size={2} speed={0.3} color="#8b5cf6" />
      <Sparkles count={30} scale={6} size={1.5} speed={0.5} color="#06b6d4" />
      
      <group ref={groupRef}>
        {/* Main character shapes */}
        <CartoonSphere position={[0, 0, 0]} color="#8b5cf6" scale={1.2} />
        <CartoonSphere position={[-3, 1, -1]} color="#06b6d4" scale={0.8} />
        <CartoonSphere position={[3, -0.5, -1]} color="#ec4899" scale={0.6} />
        
        {/* Cubes with trails */}
        <CartoonCube position={[-2, -1.5, 0]} color="#10b981" scale={0.9} />
        <CartoonCube position={[2.5, 1.5, -0.5]} color="#f59e0b" scale={0.7} />
        
        {/* Donuts */}
        <CartoonDonut position={[1.5, -1, 1]} color="#ef4444" />
        <CartoonDonut position={[-1.5, 2, -0.5]} color="#3b82f6" />
        
        {/* Cones */}
        <CartoonCone position={[0, 2, 0]} color="#fbbf24" />
        <CartoonCone position={[-2.5, -0.5, 1]} color="#a855f7" />
        
        {/* Stars */}
        <CartoonStar position={[2, 0.5, 1]} color="#22d3ee" />
        <CartoonStar position={[-1, -2, 0]} color="#f472b6" />
        
        {/* Cylinders */}
        <CartoonCylinder position={[3, 0, 0]} color="#84cc16" />
        <CartoonCylinder position={[-3, -1, -0.5]} color="#f97316" />
        
        {/* Hearts/Octahedrons */}
        <CartoonHeart position={[0.5, -1.5, 1]} color="#ec4899" />
        <CartoonHeart position={[-0.5, 1.5, 0.5]} color="#ef4444" />
        
        {/* Rings */}
        <CartoonRing position={[1, 2.5, -1]} color="#fbbf24" />
        <CartoonRing position={[-2, 0.5, 1]} color="#8b5cf6" />
        
        {/* Capsules */}
        <CartoonCapsule position={[2.5, -2, 0]} color="#14b8a6" />
        <CartoonCapsule position={[-1, 0, 2]} color="#6366f1" />
      </group>
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
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${shapesBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm text-foreground/80">Interactive 3D Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Playful <span className="gradient-text">Technology</span> Meets{' '}
            <span className="gradient-text">Creativity</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We bring imagination to life with cutting-edge 3D experiences and animations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Canvas */}
          <div className="relative h-[450px] lg:h-[550px] rounded-2xl overflow-hidden">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm text-muted-foreground">Loading 3D scene...</span>
                </div>
              </div>
            }>
              <Canvas 
                camera={{ position: [0, 0, 8], fov: 50 }}
                style={{ background: 'transparent' }}
                gl={{ alpha: true, antialias: true }}
              >
                <Scene />
              </Canvas>
            </Suspense>
            
            {/* Glow effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/10 blur-3xl" />
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-secondary/10 blur-3xl" />
            </div>
            
            {/* Interactive hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-sm text-muted-foreground animate-bounce">
              ✨ Watch the magic happen!
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-2 gap-4">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="group glass rounded-xl p-5 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-border/50 hover:border-primary/30 animate-float"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-${cap.color}/10 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
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
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Three.js', 'WebGL'].map((tech, index) => (
              <div
                key={tech}
                className="glass px-6 py-3 rounded-full border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg animate-float cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="font-medium gradient-text">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative floating shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-primary/20 blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-20 h-20 rounded-full bg-secondary/20 blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-20 w-12 h-12 rounded-full bg-accent/20 blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default TechShowcase3D;
