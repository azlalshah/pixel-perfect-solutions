import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Server, Database, Shield, Zap, Code, Lock, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/services/backend-development.png';

gsap.registerPlugin(ScrollTrigger);

const BackendDevelopment = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
      gsap.fromTo('.hero-image', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' });
      gsap.fromTo('.feature-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: '.features-grid', start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  const features = [
    { icon: Server, title: 'API Development', description: 'RESTful and GraphQL APIs built for performance and scalability.' },
    { icon: Database, title: 'Database Design', description: 'Optimized database architecture for your specific needs.' },
    { icon: Shield, title: 'Security', description: 'Enterprise-grade security with authentication and authorization.' },
    { icon: Zap, title: 'Performance', description: 'High-performance backend systems that scale with your growth.' },
    { icon: Code, title: 'Microservices', description: 'Modern microservices architecture for flexibility and maintainability.' },
    { icon: Lock, title: 'Data Protection', description: 'Secure data handling with encryption and compliance standards.' },
  ];

  const technologies = [
    { name: 'Node.js', category: 'Runtime' },
    { name: 'Python', category: 'Language' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Redis', category: 'Caching' },
    { name: 'Docker', category: 'Containers' },
    { name: 'GraphQL', category: 'API' },
    { name: 'AWS/GCP', category: 'Cloud' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content">
              <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">Backend Development</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Robust <span className="gradient-text">Backend Systems</span> That Power Your Business
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We build scalable, secure, and high-performance backend solutions that form the foundation of your digital products.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gradient-bg">Get Started <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline">View Portfolio</Button>
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="Backend Development Services" className="w-full rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Backend Development Services</h2>
            <p className="text-muted-foreground">Comprehensive backend solutions for modern applications.</p>
          </div>
          <div className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="feature-card glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Technologies We Use</h2>
            <p className="text-muted-foreground">Modern tech stack for reliable backend systems.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="glass p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                <p className="text-lg font-heading font-semibold">{tech.name}</p>
                <p className="text-sm text-muted-foreground">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Build Your Backend?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's create a robust backend infrastructure that powers your application.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-bg">Start Your Project</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BackendDevelopment;
