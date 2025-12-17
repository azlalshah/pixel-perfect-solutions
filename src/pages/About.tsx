import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Eye, Heart, Award, Users, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-hero-content > *',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.timeline-item',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.3,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.timeline-section',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.value-card',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.values-section',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const timeline = [
    { year: '2018', title: 'Company Founded', description: 'Started with a vision to transform digital experiences.' },
    { year: '2019', title: 'First Major Client', description: 'Partnered with Fortune 500 companies.' },
    { year: '2020', title: 'Global Expansion', description: 'Opened offices in 5 countries worldwide.' },
    { year: '2021', title: '100+ Team Members', description: 'Grew our talented team significantly.' },
    { year: '2022', title: 'Industry Awards', description: 'Recognized as top IT services provider.' },
    { year: '2023', title: '500+ Projects', description: 'Delivered successful projects globally.' },
  ];

  const values = [
    { icon: Target, title: 'Innovation', description: 'Pushing boundaries with cutting-edge solutions.' },
    { icon: Heart, title: 'Passion', description: 'We love what we do and it shows in our work.' },
    { icon: Users, title: 'Collaboration', description: 'Working together to achieve greatness.' },
    { icon: Award, title: 'Excellence', description: 'Striving for the highest quality in everything.' },
    { icon: Globe, title: 'Global Impact', description: 'Making a difference across the world.' },
    { icon: Eye, title: 'Transparency', description: 'Open and honest in all our dealings.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="container-custom relative z-10 about-hero-content">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">
            About TechNova
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            We're Building the
            <span className="gradient-text block">Future of Tech</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            Since 2018, we've been at the forefront of digital innovation, helping businesses
            transform their ideas into powerful digital solutions that drive growth and success.
          </p>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '150+', label: 'Happy Clients' },
              { number: '100+', label: 'Team Members' },
              { number: '15+', label: 'Countries Served' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth,
                enhance efficiency, and create lasting competitive advantages in an ever-evolving
                digital landscape.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in digital transformation, recognized for our innovation,
                excellence, and commitment to delivering solutions that shape the future of
                technology and business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 timeline-section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Milestones That Define Us
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full gradient-bg rounded-full hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass p-6 rounded-xl inline-block">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <h4 className="text-xl font-heading font-semibold mt-2">{item.title}</h4>
                      <p className="text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full gradient-bg z-10 hidden md:block" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30 values-section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="value-card glass p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-heading font-semibold mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
