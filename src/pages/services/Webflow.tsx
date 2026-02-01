import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Code, Layers, Zap, MousePointer, Palette, Settings, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/services/webflow.png';

gsap.registerPlugin(ScrollTrigger);

const Webflow = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
      gsap.fromTo('.hero-image', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' });
      gsap.fromTo('.feature-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: '.features-grid', start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  const features = [
    { icon: Code, title: 'Clean Code', description: 'Webflow generates semantic, clean HTML, CSS, and JavaScript.' },
    { icon: Layers, title: 'CMS Integration', description: 'Dynamic content management for blogs, portfolios, and more.' },
    { icon: Zap, title: 'Interactions', description: 'Advanced animations and micro-interactions without code.' },
    { icon: MousePointer, title: 'Visual Design', description: 'Pixel-perfect designs with complete creative control.' },
    { icon: Palette, title: 'Design Systems', description: 'Scalable design systems with reusable components.' },
    { icon: Settings, title: 'Integrations', description: 'Connect with your favorite tools and services.' },
  ];

  const benefits = [
    { title: 'No-Code Power', description: 'Build complex, custom websites without writing a single line of code.' },
    { title: 'Design Freedom', description: 'Complete creative control with no template limitations.' },
    { title: 'Fast Loading', description: 'Optimized hosting with global CDN for blazing fast speeds.' },
    { title: 'SEO Ready', description: 'Built-in SEO tools and clean markup for better rankings.' },
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
              <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">Webflow Development</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Premium <span className="gradient-text">Webflow</span> Websites
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Stunning, interactive Webflow websites with the power of custom code and the ease of visual design. No compromises.
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
              <img src={heroImage} alt="Webflow Development Services" className="w-full rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Webflow Expertise</h2>
            <p className="text-muted-foreground">Leverage the full power of Webflow for your project.</p>
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Choose Webflow?</h2>
            <p className="text-muted-foreground">The best of both worlds: design flexibility and technical power.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass p-8 rounded-2xl">
                <h3 className="text-xl font-heading font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="glass p-12 rounded-2xl text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-4">Webflow Development</h2>
            <p className="text-5xl font-bold text-primary mb-4">Starting at $1,999</p>
            <p className="text-muted-foreground mb-8">Custom Webflow websites with animations, CMS, and hosting setup.</p>
            <Link to="/contact">
              <Button size="lg" className="gradient-bg">Get a Custom Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready for a Webflow Website?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's create a stunning Webflow site that sets you apart from the competition.
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

export default Webflow;
