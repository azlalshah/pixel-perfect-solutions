import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Pen, Layers, Target, Palette, RefreshCw, Award, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/services/logo-design.png';

gsap.registerPlugin(ScrollTrigger);

const LogoDesign = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
      gsap.fromTo('.hero-image', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' });
      gsap.fromTo('.feature-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: '.features-grid', start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  const features = [
    { icon: Pen, title: 'Custom Logo Design', description: 'Unique, hand-crafted logos that perfectly represent your brand identity.' },
    { icon: Layers, title: 'Multiple Concepts', description: 'We provide several design concepts to choose from and refine.' },
    { icon: Target, title: 'Brand Strategy', description: 'Strategic approach ensuring your logo connects with your target audience.' },
    { icon: Palette, title: 'Color Psychology', description: 'Expert color selection that evokes the right emotions and associations.' },
    { icon: RefreshCw, title: 'Unlimited Revisions', description: 'We refine until you\'re completely satisfied with the result.' },
    { icon: Award, title: 'Full Ownership', description: 'Complete ownership and all source files delivered to you.' },
  ];

  const packages = [
    { name: 'Starter', price: '$299', features: ['3 Initial Concepts', '2 Revision Rounds', 'Final Files (PNG, JPG)', 'Basic Color Palette'] },
    { name: 'Professional', price: '$599', features: ['5 Initial Concepts', 'Unlimited Revisions', 'All File Formats', 'Brand Color Guide', 'Social Media Kit'], popular: true },
    { name: 'Enterprise', price: '$999', features: ['8 Initial Concepts', 'Unlimited Revisions', 'Complete Brand Kit', 'Style Guidelines', 'Stationery Design', 'Priority Support'] },
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
              <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">Logo Design</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Memorable <span className="gradient-text">Logo Design</span> That Defines Your Brand
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Your logo is the face of your brand. We create distinctive, timeless logos that make lasting impressions and build brand recognition.
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
              <img src={heroImage} alt="Logo Design Services" className="w-full rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What We Offer</h2>
            <p className="text-muted-foreground">Professional logo design services tailored to your needs.</p>
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

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Logo Design Packages</h2>
            <p className="text-muted-foreground">Choose the package that fits your needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative p-8 rounded-2xl ${pkg.popular ? 'glass border-2 border-primary' : 'glass'}`}>
                {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 gradient-bg text-white text-sm rounded-full">Most Popular</span>}
                <h3 className="text-2xl font-heading font-bold mb-2">{pkg.name}</h3>
                <p className="text-4xl font-bold text-primary mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className={`w-full ${pkg.popular ? 'gradient-bg' : ''}`} variant={pkg.popular ? 'default' : 'outline'}>Choose Plan</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Create Your Perfect Logo?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's design a logo that captures your brand essence and stands the test of time.
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

export default LogoDesign;
