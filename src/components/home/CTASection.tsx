import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Floating animation for decorative elements
      gsap.to('.cta-float', {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 gradient-bg" />
          <div className="absolute inset-0 bg-noise opacity-50" />

          {/* Decorative Elements */}
          <div className="cta-float absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full" />
          <div className="cta-float absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-full" />
          <div className="cta-float absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-lg rotate-45" />

          {/* Content */}
          <div className="cta-content relative z-10 py-16 md:py-24 px-8 md:px-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-white/90">Let's Build Something Amazing</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-4xl mx-auto">
              Ready to Transform Your{' '}
              <span className="text-white/80">Digital Presence?</span>
            </h2>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
              Partner with us to create innovative solutions that drive growth,
              engage customers, and set you apart from the competition.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-all group text-lg px-8 py-6"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 transition-all text-lg px-8 py-6"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
