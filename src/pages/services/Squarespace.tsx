import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Layout, Image, Calendar, ShoppingBag, FileText, Mail, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/services/squarespace.png';

gsap.registerPlugin(ScrollTrigger);

const Squarespace = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
      gsap.fromTo('.hero-image', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' });
      gsap.fromTo('.feature-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: '.features-grid', start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  const features = [
    { icon: Layout, title: 'Elegant Templates', description: 'Award-winning templates customized for your brand.' },
    { icon: Image, title: 'Portfolio Sites', description: 'Beautiful portfolio layouts to showcase your work.' },
    { icon: Calendar, title: 'Scheduling', description: 'Built-in scheduling for appointments and bookings.' },
    { icon: ShoppingBag, title: 'E-commerce', description: 'Sell products and services with integrated commerce.' },
    { icon: FileText, title: 'Blogging', description: 'Powerful blogging tools for content marketing.' },
    { icon: Mail, title: 'Email Marketing', description: 'Integrated email campaigns to grow your audience.' },
  ];

  const idealFor = [
    'Photographers',
    'Artists & Creatives',
    'Restaurants & Cafes',
    'Small Businesses',
    'Consultants',
    'Event Planners',
    'Musicians & Bands',
    'Real Estate Agents',
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
              <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">Squarespace Development</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Elegant <span className="gradient-text">Squarespace</span> Websites
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Beautiful, minimalist Squarespace websites perfect for creatives, portfolios, and small businesses who want to look professional.
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
              <img src={heroImage} alt="Squarespace Development Services" className="w-full rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Squarespace Services</h2>
            <p className="text-muted-foreground">Professional Squarespace design and development.</p>
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

      {/* Ideal For Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Perfect For</h2>
              <p className="text-muted-foreground mb-8">
                Squarespace is ideal for professionals and businesses who want elegant, easy-to-manage websites.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {idealFor.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-heading font-bold mb-4">Squarespace Website</h3>
              <p className="text-4xl font-bold text-primary mb-4">Starting at $899</p>
              <p className="text-muted-foreground mb-6">Elegant websites that are easy to update and maintain.</p>
              <Link to="/contact">
                <Button className="w-full gradient-bg">Get a Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready for Your Squarespace Site?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's create a beautiful Squarespace website that showcases your work and attracts clients.
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

export default Squarespace;
