import { useEffect, useRef } from 'react';
import { Zap, Shield, Rocket, Users, Code, Headphones } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import innovationImage from '@/assets/why-choose-innovation.png';
import teamImage from '@/assets/why-choose-team.png';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate floating elements
      gsap.to('.float-element', {
        y: 'random(-20, 20)',
        x: 'random(-15, 15)',
        duration: 'random(3, 5)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.3,
          from: 'random',
        },
      });

      // Scroll animations
      gsap.fromTo(
        '.why-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.why-title',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.why-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.why-cards-grid',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.why-image-left',
        { opacity: 0, x: -50, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.why-image-left',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.why-image-right',
        { opacity: 0, x: 50, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.why-image-right',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Rapid development cycles with agile methodologies',
      color: 'primary',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security for all solutions',
      color: 'secondary',
    },
    {
      icon: Rocket,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business needs',
      color: 'accent',
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Expert developers committed to your success',
      color: 'highlight',
    },
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Maintainable, well-documented codebase',
      color: 'primary',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock assistance when you need it',
      color: 'secondary',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden section-padding"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Floating Decorative Elements */}
      <div className="float-element absolute top-20 left-[10%] w-20 h-20 rounded-full bg-primary/10 blur-xl" />
      <div className="float-element absolute top-40 right-[15%] w-32 h-32 rounded-full bg-secondary/10 blur-xl" />
      <div className="float-element absolute bottom-32 left-[20%] w-24 h-24 rounded-full bg-accent/10 blur-xl" />
      <div className="float-element absolute bottom-20 right-[10%] w-28 h-28 rounded-full bg-highlight/10 blur-xl" />

      {/* Floating Icons */}
      <div className="float-element absolute top-32 right-[25%] w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/20">
        <Code className="w-6 h-6 text-primary" />
      </div>
      <div className="float-element absolute top-60 left-[8%] w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center backdrop-blur-sm border border-secondary/20">
        <Rocket className="w-6 h-6 text-secondary" />
      </div>
      <div className="float-element absolute bottom-40 right-[8%] w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center backdrop-blur-sm border border-accent/20">
        <Shield className="w-6 h-6 text-accent" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="why-title text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-foreground/80">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Transforming <span className="gradient-text">Visions</span> Into{' '}
            <span className="gradient-text">Reality</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine cutting-edge technology with creative excellence to deliver
            solutions that drive real business results.
          </p>
        </div>

        {/* Images Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left Image */}
          <div className="why-image-left relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={innovationImage}
                alt="Innovation and technology"
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  Innovative Solutions
                </h3>
                <p className="text-white/80 text-sm">
                  Leveraging the latest technologies to solve complex challenges
                </p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-xl animate-float">
              <Zap className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* Right Image */}
          <div className="why-image-right relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={teamImage}
                alt="Team collaboration"
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  Expert Collaboration
                </h3>
                <p className="text-white/80 text-sm">
                  A dedicated team working together to achieve your goals
                </p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 glass rounded-xl p-3 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <Users className="w-6 h-6 text-secondary" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="why-cards-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="why-card group glass rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-border/50 hover:border-primary/30"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
              >
                <feature.icon className={`w-7 h-7 text-${feature.color}`} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50" />
          <div className="w-3 h-3 rounded-full bg-primary/50" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
