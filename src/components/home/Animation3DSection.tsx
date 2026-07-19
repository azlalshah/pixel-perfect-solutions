import Lottie from 'lottie-react';
import { Sparkles as SparklesIcon, Film, Wand2, Layers, Zap, Palette } from 'lucide-react';
import cartoonAnimation from '@/assets/lottie-3d-cartoon.json';

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
