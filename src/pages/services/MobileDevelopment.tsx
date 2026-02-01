import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, Smartphone, Code, Zap, Bell, Download, Shield } from 'lucide-react';
import PricingPackages, { PricingPackage } from '@/components/PricingPackages';
import FloatingElements from '@/components/FloatingElements';

const MobileDevelopment = () => {
  const features = [
    { icon: Smartphone, title: 'iOS Development', description: 'Native Swift & SwiftUI apps' },
    { icon: Code, title: 'Android Development', description: 'Native Kotlin applications' },
    { icon: Zap, title: 'React Native Apps', description: 'Cross-platform efficiency' },
    { icon: Shield, title: 'Flutter Development', description: 'Beautiful, fast apps' },
    { icon: Download, title: 'App Store Optimization', description: 'Maximize visibility' },
    { icon: Bell, title: 'Maintenance & Support', description: 'Ongoing app care' },
  ];

  const packages: PricingPackage[] = [
    {
      name: 'Starter',
      price: '$1,499',
      description: 'MVP for startups and validation',
      features: [
        'Single platform (iOS or Android)',
        '5-7 screens',
        'Basic UI/UX design',
        'Push notifications',
        'App store submission',
        '1-month support',
      ],
    },
    {
      name: 'Professional',
      price: '$3,999',
      description: 'Full-featured mobile app',
      isPopular: true,
      features: [
        'Cross-platform (React Native)',
        '15+ screens',
        'Custom UI/UX design',
        'API integration',
        'Analytics dashboard',
        '3-month support',
      ],
    },
    {
      name: 'Enterprise',
      price: '$7,999',
      description: 'Complex, scalable solutions',
      features: [
        'Native apps for both platforms',
        'Unlimited screens',
        'Advanced features (AI, AR, etc.)',
        'Backend development included',
        'Admin panel',
        '12-month priority support',
      ],
    },
  ];

  const technologies = [
    { name: 'Swift', icon: '🍎' },
    { name: 'Kotlin', icon: '🤖' },
    { name: 'React Native', icon: '⚛️' },
    { name: 'Flutter', icon: '🦋' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'AWS Amplify', icon: '☁️' },
  ];

  const appTypes = [
    'E-commerce Apps',
    'Social Media Apps',
    'Fitness & Health',
    'Food Delivery',
    'Fintech Apps',
    'On-Demand Services',
    'Education Apps',
    'Enterprise Solutions',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <FloatingElements type="mobile" />
        
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Mobile Development
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Native & Cross-Platform <span className="gradient-text">Mobile Apps</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                High-performance mobile applications for iOS and Android that deliver exceptional user experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gradient-bg glow">
                    Start Your App
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                    View Apps
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 gradient-bg rounded-2xl blur-2xl opacity-20" />
                <div className="relative bg-card rounded-2xl p-2 shadow-2xl border border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop" 
                    alt="Mobile Development" 
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
              Mobile Services
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What We <span className="gradient-text">Build</span>
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
      <PricingPackages serviceName="Mobile Development" packages={packages} />

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
            {technologies.map((tech, i) => (
              <div 
                key={i} 
                className="bg-card px-6 py-4 rounded-xl border border-border text-center hover:border-primary/50 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <span className="text-3xl mb-2 block">{tech.icon}</span>
                <span className="font-medium text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Apps We <span className="gradient-text">Specialize In</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {appTypes.map((type, i) => (
              <div 
                key={i} 
                className="px-6 py-3 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary hover:text-white transition-colors"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '50+ Apps Launched', description: 'Across App Store & Play Store' },
              { title: '4.8 Average Rating', description: 'User satisfaction guaranteed' },
              { title: 'Agile Development', description: 'Sprints with regular updates' },
              { title: 'Post-Launch Support', description: 'Continuous maintenance' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-card rounded-2xl border border-border">
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

export default MobileDevelopment;
