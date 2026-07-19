import Lottie from 'lottie-react';
import { Monitor, Smartphone, Cloud, Database, Globe, Cpu } from 'lucide-react';
import shapesBackground from '@/assets/3d-shapes-bg.png';
import techAnimation from '@/assets/lottie-tech.json';

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
          {/* Tech Animation */}
          <div className="relative h-[450px] lg:h-[550px] rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/10 blur-3xl" />
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-secondary/10 blur-3xl" />
            </div>
            <Lottie
              animationData={techAnimation}
              loop
              className="relative w-full max-w-xl drop-shadow-2xl"
            />
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
