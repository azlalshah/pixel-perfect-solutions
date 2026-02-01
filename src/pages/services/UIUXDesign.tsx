import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, Palette, Layers, MousePointer, PenTool, Eye, Sparkles } from 'lucide-react';
import PricingPackages, { PricingPackage } from '@/components/PricingPackages';
import FloatingElements from '@/components/FloatingElements';

const UIUXDesign = () => {
  const features = [
    { icon: MousePointer, title: 'User Research & Analysis', description: 'Deep understanding of user needs' },
    { icon: PenTool, title: 'Wireframing & Prototyping', description: 'Interactive design concepts' },
    { icon: Palette, title: 'Visual Design', description: 'Stunning, brand-aligned aesthetics' },
    { icon: Layers, title: 'Design Systems', description: 'Scalable component libraries' },
    { icon: Eye, title: 'Usability Testing', description: 'Data-driven design decisions' },
    { icon: Sparkles, title: 'Responsive Design', description: 'Flawless on every device' },
  ];

  const packages: PricingPackage[] = [
    {
      name: 'Starter',
      price: '$799',
      description: 'Great for MVP and small projects',
      features: [
        '5 screen designs',
        'Wireframes included',
        'Basic interactive prototype',
        '2 revision rounds',
        'Design handoff files',
        '1-week delivery',
      ],
    },
    {
      name: 'Professional',
      price: '$1,999',
      description: 'Complete design solution',
      isPopular: true,
      features: [
        '15 screen designs',
        'User research & personas',
        'Interactive Figma prototype',
        'Component design system',
        '5 revision rounds',
        '2-week delivery',
      ],
    },
    {
      name: 'Enterprise',
      price: '$4,499',
      description: 'Full-scale design overhaul',
      features: [
        'Unlimited screen designs',
        'Full UX audit & strategy',
        'Usability testing sessions',
        'Complete design system',
        'Unlimited revisions',
        'Dedicated designer',
      ],
    },
  ];

  const tools = [
    { name: 'Figma', icon: '🎨' },
    { name: 'Adobe XD', icon: '💎' },
    { name: 'Sketch', icon: '✏️' },
    { name: 'Framer', icon: '🔲' },
    { name: 'Principle', icon: '🎬' },
    { name: 'InVision', icon: '🖼️' },
  ];

  const whyChooseUs = [
    { title: '200+ Designs Delivered', description: 'Award-winning design portfolio' },
    { title: 'User-Centered Approach', description: 'Design decisions backed by research' },
    { title: 'Quick Turnaround', description: 'Fast delivery without compromising quality' },
    { title: 'Full Handoff', description: 'Developer-ready design files' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <FloatingElements type="design" />
        
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                UI/UX Design
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Design That <span className="gradient-text">Delights Users</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Beautiful, intuitive interfaces that enhance user experience and drive engagement with your digital products.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gradient-bg glow">
                    Start Your Project
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 gradient-bg rounded-2xl blur-2xl opacity-20" />
                <div className="relative bg-card rounded-2xl p-2 shadow-2xl border border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop" 
                    alt="UI/UX Design" 
                    className="rounded-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Our Design Services
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What We <span className="gradient-text">Create</span>
            </h2>
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
      <PricingPackages serviceName="UI/UX Design" packages={packages} />

      {/* Tools Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Design Tools
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Tools We <span className="gradient-text">Master</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, i) => (
              <div 
                key={i} 
                className="bg-card px-6 py-4 rounded-xl border border-border text-center hover:border-primary/50 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <span className="text-3xl mb-2 block">{tool.icon}</span>
                <span className="font-medium text-sm">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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

export default UIUXDesign;
