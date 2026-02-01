import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate floating shapes
      gsap.to('.hero-blob', {
        y: 'random(-30, 30)',
        x: 'random(-20, 20)',
        duration: 'random(4, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.5,
          from: 'random',
        },
      });

      // Main title animation
      tl.fromTo(
        '.hero-label',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      )
        .fromTo(
          '.hero-title-line',
          { opacity: 0, y: 50, clipPath: 'inset(100% 0% 0% 0%)' },
          {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 0.8,
            stagger: 0.15,
            ease: 'power4.out',
          },
          '-=0.3'
        )
        .fromTo(
          '.hero-description',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          '.hero-buttons',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          '.hero-stats > div',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
          '-=0.2'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      {/* Animated Blobs */}
      <div className="hero-blob absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="hero-blob absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />
      <div className="hero-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Label */}
          <div className="hero-label inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-foreground/80">
              Transforming Ideas into Digital Reality
            </span>
          </div>

          {/* Main Title */}
          <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            <span className="hero-title-line block">We Build</span>
            <span className="hero-title-line block gradient-text">Exceptional Digital</span>
            <span className="hero-title-line block">Experiences</span>
          </h1>

          {/* Description */}
          <p className="hero-description text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            From stunning websites to powerful mobile apps, we deliver cutting-edge
            IT solutions that drive growth and transform businesses.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="gradient-bg hover:opacity-90 transition-all group text-lg px-8 py-6 glow"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all text-lg px-8 py-6 group"
            >
              <Play className="mr-2 w-5 h-5 transition-transform group-hover:scale-110" />
              Watch Showreel
            </Button>
          </div>

          {/* Stats */}
          <div className="hero-stats flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">
                150+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">
                50+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">
                8+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">
                24/7
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
