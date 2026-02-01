import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, Code, Database, Globe, Zap, Shield, Rocket, Atom, Triangle, Server, FileCode, Leaf, Palette, Share2, type LucideIcon } from 'lucide-react';
import PricingPackages, { PricingPackage } from '@/components/PricingPackages';
import FloatingElements from '@/components/FloatingElements';

const WebDevelopment = () => {
  const features = [
    { icon: Code, title: 'Custom React & Next.js Applications', description: 'Modern, fast, and scalable web apps' },
    { icon: Globe, title: 'E-commerce Platforms', description: 'Full-featured online stores' },
    { icon: Zap, title: 'Progressive Web Apps (PWA)', description: 'App-like web experiences' },
    { icon: Database, title: 'API Development & Integration', description: 'Seamless data connectivity' },
    { icon: Shield, title: 'Database Design & Optimization', description: 'Robust data architecture' },
    { icon: Rocket, title: 'Performance Optimization', description: 'Lightning-fast load times' },
  ];

  const technologies: { name: string; icon: LucideIcon; color: string; bgColor: string }[] = [
    { name: 'React', icon: Atom, color: 'text-cyan-500', bgColor: 'bg-cyan-500/10' },
    { name: 'Next.js', icon: Triangle, color: 'text-foreground', bgColor: 'bg-foreground/10' },
    { name: 'Node.js', icon: Server, color: 'text-green-500', bgColor: 'bg-green-500/10' },
    { name: 'TypeScript', icon: FileCode, color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
    { name: 'PostgreSQL', icon: Database, color: 'text-blue-600', bgColor: 'bg-blue-600/10' },
    { name: 'MongoDB', icon: Leaf, color: 'text-green-600', bgColor: 'bg-green-600/10' },
    { name: 'Tailwind CSS', icon: Palette, color: 'text-teal-500', bgColor: 'bg-teal-500/10' },
    { name: 'GraphQL', icon: Share2, color: 'text-pink-500', bgColor: 'bg-pink-500/10' },
  ];

  const packages: PricingPackage[] = [
    {
      name: 'Starter',
      price: '$999',
      description: 'Perfect for small businesses and startups',
      features: [
        '5-page responsive website',
        'Mobile-optimized design',
        'Basic SEO setup',
        'Contact form integration',
        'Social media links',
        '1-month support',
      ],
    },
    {
      name: 'Professional',
      price: '$2,499',
      description: 'Ideal for growing businesses',
      isPopular: true,
      features: [
        '10-page website with CMS',
        'Advanced SEO optimization',
        'E-commerce (up to 50 products)',
        'Payment gateway integration',
        'Analytics dashboard',
        '3-month support',
      ],
    },
    {
      name: 'Enterprise',
      price: '$5,999',
      description: 'For large-scale projects',
      features: [
        'Unlimited pages',
        'Custom web application',
        'Full e-commerce solution',
        'API integrations',
        'Advanced security features',
        '12-month priority support',
      ],
    },
  ];

  const whyChooseUs = [
    { title: '100+ Projects Delivered', description: 'Proven track record of success' },
    { title: 'Agile Development', description: 'Iterative approach for faster delivery' },
    { title: '24/7 Support', description: 'Round-the-clock assistance' },
    { title: '99.9% Uptime', description: 'Reliable and stable solutions' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <FloatingElements type="web" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Web Development
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Build Powerful <span className="gradient-text">Web Applications</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Custom web solutions built with cutting-edge technologies for optimal performance, scalability, and exceptional user experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gradient-bg glow">
                    Start Your Project
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 gradient-bg rounded-2xl blur-2xl opacity-20" />
                <div className="relative bg-card rounded-2xl p-2 shadow-2xl border border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop" 
                    alt="Web Development" 
                    className="rounded-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development services tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg group">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <PricingPackages serviceName="Web Development" packages={packages} />

      {/* Technologies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Tech Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Technologies We <span className="gradient-text">Use</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div 
                  key={i} 
                  className={`${tech.bgColor} px-6 py-4 rounded-xl border border-border text-center hover:border-primary/50 hover:shadow-lg transition-all hover:-translate-y-1 hover:scale-105 group animate-float`}
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  <div className={`w-12 h-12 mx-auto mb-2 rounded-lg ${tech.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${tech.color}`} />
                  </div>
                  <span className="font-medium text-sm">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose <span className="gradient-text">Us</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
