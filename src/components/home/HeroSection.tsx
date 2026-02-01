import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle, Clock, Headphones, ThumbsUp, Users, Award, Globe } from 'lucide-react';
import gsap from 'gsap';
import heroImage from '@/assets/hero-image.png';

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

      // Main content animations
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
          '.hero-features > div',
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          '.hero-buttons',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          '.hero-image',
          { opacity: 0, scale: 0.9, x: 50 },
          { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
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

  const features = [
    "Custom Web & Mobile Apps",
    "Cloud & DevOps Solutions", 
    "24/7 Dedicated Support"
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden section-padding pt-24 lg:pt-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      {/* Animated Blobs */}
      <div className="hero-blob absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="hero-blob absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />
      <div className="hero-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Label */}
            <div className="hero-label inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-foreground/80">
                Transforming Ideas into Digital Reality
              </span>
            </div>

            {/* Main Title */}
            <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              <span className="hero-title-line block">We Build</span>
              <span className="hero-title-line block gradient-text">Exceptional Digital</span>
              <span className="hero-title-line block">Experiences</span>
            </h1>

            {/* Description */}
            <p className="hero-description text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6">
              From stunning websites to powerful mobile apps, we deliver cutting-edge
              IT solutions that drive growth and transform businesses.
            </p>

            {/* Feature List */}
            <div className="hero-features flex flex-col gap-3 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8 lg:mb-0">
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
          </div>

          {/* Right Column - Image */}
          <div className="hero-image relative">
            {/* Main Image Container */}
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl glow">
                <img 
                  src={heroImage} 
                  alt="Digital solutions team collaborating" 
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4 shadow-xl animate-float">
                <div className="text-2xl font-heading font-bold gradient-text">150+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 glass rounded-xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-2xl font-heading font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/20 rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-secondary/10 rounded-full -z-10" />
          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="hero-stats flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 mt-20 pt-10 border-t border-border/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold gradient-text">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Headphones className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold gradient-text">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <ThumbsUp className="w-6 h-6 text-accent" />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold gradient-text">99%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-highlight" />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold gradient-text">15+</div>
              <div className="text-sm text-muted-foreground">Team Experts</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
