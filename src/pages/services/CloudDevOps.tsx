import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, Cloud, Server, Shield, Zap, Lock, BarChart3 } from 'lucide-react';
import PricingPackages, { PricingPackage } from '@/components/PricingPackages';
import FloatingElements from '@/components/FloatingElements';

const CloudDevOps = () => {
  const features = [
    { icon: Cloud, title: 'AWS & Azure Solutions', description: 'Multi-cloud architecture' },
    { icon: Zap, title: 'CI/CD Pipelines', description: 'Automated deployment workflows' },
    { icon: Server, title: 'Docker & Kubernetes', description: 'Container orchestration' },
    { icon: Shield, title: 'Infrastructure as Code', description: 'Terraform & CloudFormation' },
    { icon: BarChart3, title: 'Monitoring & Logging', description: 'Real-time observability' },
    { icon: Lock, title: 'Security & Compliance', description: 'Enterprise-grade security' },
  ];

  const packages: PricingPackage[] = [
    {
      name: 'Starter',
      price: '$799/mo',
      description: 'Essential cloud infrastructure',
      features: [
        'Basic cloud setup (AWS/Azure)',
        'CI/CD pipeline configuration',
        'Container deployment',
        'Basic monitoring',
        '8x5 email support',
        'Monthly reports',
      ],
    },
    {
      name: 'Professional',
      price: '$1,999/mo',
      description: 'Scalable cloud architecture',
      isPopular: true,
      features: [
        'Multi-cloud architecture',
        'Kubernetes orchestration',
        'Advanced monitoring & alerts',
        'Auto-scaling configuration',
        '24/5 support',
        'Weekly optimization reviews',
      ],
    },
    {
      name: 'Enterprise',
      price: '$4,999/mo',
      description: 'Enterprise-grade DevOps',
      features: [
        'Full infrastructure management',
        'Custom automation solutions',
        'Security compliance (SOC2, HIPAA)',
        'Disaster recovery setup',
        '24/7 dedicated support',
        'SLA guarantees',
      ],
    },
  ];

  const cloudProviders = [
    { name: 'AWS', icon: '☁️' },
    { name: 'Azure', icon: '🔷' },
    { name: 'Google Cloud', icon: '🌐' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚙️' },
    { name: 'Terraform', icon: '🏗️' },
    { name: 'Jenkins', icon: '🔧' },
    { name: 'GitHub Actions', icon: '🐙' },
  ];

  const benefits = [
    { metric: '99.99%', label: 'Uptime Guarantee' },
    { metric: '40%', label: 'Cost Reduction' },
    { metric: '10x', label: 'Faster Deployments' },
    { metric: '24/7', label: 'Monitoring' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <FloatingElements type="cloud" />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Cloud & DevOps
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Scalable Cloud <span className="gradient-text">Infrastructure</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Modern cloud solutions and DevOps practices that ensure reliability, scalability, and efficiency for your applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gradient-bg glow">
                    Get Started
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 gradient-bg rounded-2xl blur-2xl opacity-20" />
                <div className="relative bg-card rounded-2xl p-2 shadow-2xl border border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop" 
                    alt="Cloud & DevOps" 
                    className="rounded-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">
                  {benefit.metric}
                </div>
                <div className="text-sm text-muted-foreground">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Cloud Services
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What We <span className="gradient-text">Provide</span>
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
      <PricingPackages serviceName="Cloud & DevOps" packages={packages} />

      {/* Cloud Providers Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Tech Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Platforms We <span className="gradient-text">Work With</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {cloudProviders.map((provider, i) => (
              <div 
                key={i} 
                className="bg-card px-6 py-4 rounded-xl border border-border text-center hover:border-primary/50 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <span className="text-3xl mb-2 block">{provider.icon}</span>
                <span className="font-medium text-sm">{provider.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 gradient-bg rounded-2xl blur-2xl opacity-10" />
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&auto=format&fit=crop" 
                  alt="Server Infrastructure"
                  className="rounded-2xl w-full relative z-10"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Why Choose <span className="gradient-text">Us</span>?
                </h2>
                <ul className="space-y-4">
                  {[
                    'Certified AWS & Azure architects',
                    'Infrastructure as Code best practices',
                    'Zero-downtime deployment strategies',
                    'Cost optimization and resource management',
                    'Security-first approach with compliance',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudDevOps;
