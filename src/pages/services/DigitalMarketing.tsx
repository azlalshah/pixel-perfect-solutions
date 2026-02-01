import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, TrendingUp, Megaphone, BarChart3, Mail, Search, Share2 } from 'lucide-react';
import PricingPackages, { PricingPackage } from '@/components/PricingPackages';
import FloatingElements from '@/components/FloatingElements';

const DigitalMarketing = () => {
  const features = [
    { icon: Search, title: 'SEO Optimization', description: 'Rank higher on search engines' },
    { icon: Share2, title: 'Social Media Marketing', description: 'Engage your audience everywhere' },
    { icon: TrendingUp, title: 'PPC Campaigns', description: 'Targeted paid advertising' },
    { icon: Megaphone, title: 'Content Marketing', description: 'Compelling stories that convert' },
    { icon: Mail, title: 'Email Marketing', description: 'Nurture leads effectively' },
    { icon: BarChart3, title: 'Analytics & Reporting', description: 'Data-driven decisions' },
  ];

  const packages: PricingPackage[] = [
    {
      name: 'Starter',
      price: '$599/mo',
      description: 'Essential marketing for small businesses',
      features: [
        'Basic SEO optimization',
        '2 social media platforms',
        'Monthly performance report',
        '5 blog posts per month',
        'Google Business setup',
        'Email support',
      ],
    },
    {
      name: 'Professional',
      price: '$1,499/mo',
      description: 'Comprehensive marketing strategy',
      isPopular: true,
      features: [
        'Advanced SEO & local SEO',
        '4 social media platforms',
        'PPC campaign management',
        '10 blog posts per month',
        'Email marketing campaigns',
        'Weekly strategy calls',
      ],
    },
    {
      name: 'Enterprise',
      price: '$3,999/mo',
      description: 'Full-scale digital dominance',
      features: [
        'Complete SEO strategy',
        'All social platforms',
        'Advanced PPC & retargeting',
        'Unlimited content creation',
        'Marketing automation',
        'Dedicated account manager',
      ],
    },
  ];

  const platforms = [
    { name: 'Google Ads', icon: '🎯' },
    { name: 'Facebook', icon: '📘' },
    { name: 'Instagram', icon: '📸' },
    { name: 'LinkedIn', icon: '💼' },
    { name: 'TikTok', icon: '🎵' },
    { name: 'YouTube', icon: '▶️' },
    { name: 'Twitter/X', icon: '🐦' },
    { name: 'Pinterest', icon: '📌' },
  ];

  const results = [
    { metric: '250%', label: 'Average ROI Increase' },
    { metric: '150K+', label: 'Leads Generated' },
    { metric: '50M+', label: 'Social Impressions' },
    { metric: '98%', label: 'Client Retention' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <FloatingElements type="marketing" />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Digital Marketing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Grow Your <span className="gradient-text">Online Presence</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Data-driven marketing strategies that increase visibility, drive traffic, and convert visitors into loyal customers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gradient-bg glow">
                    Get Started
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                    See Results
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 gradient-bg rounded-2xl blur-2xl opacity-20" />
                <div className="relative bg-card rounded-2xl p-2 shadow-2xl border border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop" 
                    alt="Digital Marketing" 
                    className="rounded-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-muted/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">
                  {result.metric}
                </div>
                <div className="text-sm text-muted-foreground">{result.label}</div>
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
              Marketing Services
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What We <span className="gradient-text">Deliver</span>
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
      <PricingPackages serviceName="Digital Marketing" packages={packages} />

      {/* Platforms Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Platforms
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              We Advertise <span className="gradient-text">Everywhere</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, i) => (
              <div 
                key={i} 
                className="bg-card px-6 py-4 rounded-xl border border-border text-center hover:border-primary/50 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <span className="text-3xl mb-2 block">{platform.icon}</span>
                <span className="font-medium text-sm">{platform.name}</span>
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
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Why Partner With <span className="gradient-text">Us</span>?
                </h2>
                <ul className="space-y-4">
                  {[
                    'Transparent reporting with real-time dashboards',
                    'No long-term contracts - month-to-month flexibility',
                    'Dedicated team of certified marketing experts',
                    'Proven strategies that deliver measurable results',
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
              <div className="relative">
                <div className="absolute inset-0 gradient-bg rounded-2xl blur-2xl opacity-10" />
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop" 
                  alt="Marketing Analytics"
                  className="rounded-2xl w-full relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
