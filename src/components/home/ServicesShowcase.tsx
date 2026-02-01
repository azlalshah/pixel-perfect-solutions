import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  Palette,
  TrendingUp,
  Smartphone,
  Cloud,
  ArrowRight,
  Star,
  Check,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import QuoteModal from '@/components/QuoteModal';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    path: '/services/web-development',
    color: 'from-primary to-blue-400',
    bgColor: 'bg-primary/10',
    iconColor: 'text-primary',
    startingPrice: '$999',
    popularPackage: 'Professional',
    popularPrice: '$2,499',
    features: ['React & Next.js', 'E-commerce', 'CMS Integration'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive digital experiences.',
    path: '/services/ui-ux-design',
    color: 'from-secondary to-teal-400',
    bgColor: 'bg-secondary/10',
    iconColor: 'text-secondary',
    startingPrice: '$799',
    popularPackage: 'Professional',
    popularPrice: '$1,999',
    features: ['User Research', 'Prototyping', 'Design Systems'],
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions including SEO and social media.',
    path: '/services/digital-marketing',
    color: 'from-accent to-orange-400',
    bgColor: 'bg-accent/10',
    iconColor: 'text-accent',
    startingPrice: '$599/mo',
    popularPackage: 'Professional',
    popularPrice: '$1,499/mo',
    features: ['SEO & PPC', 'Social Media', 'Content Marketing'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform apps for iOS and Android.',
    path: '/services/mobile-development',
    color: 'from-highlight to-purple-400',
    bgColor: 'bg-highlight/10',
    iconColor: 'text-highlight',
    startingPrice: '$1,499',
    popularPackage: 'Professional',
    popularPrice: '$3,999',
    features: ['iOS & Android', 'React Native', 'App Store Setup'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and DevOps automation.',
    path: '/services/cloud-devops',
    color: 'from-primary to-secondary',
    bgColor: 'bg-primary/10',
    iconColor: 'text-primary',
    startingPrice: '$799/mo',
    popularPackage: 'Professional',
    popularPrice: '$1,999/mo',
    features: ['AWS & Azure', 'CI/CD Pipelines', 'Kubernetes'],
  },
];

const ServicesShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeService, setActiveService] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState({ name: '', package: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.showcase-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.showcase-header',
            start: 'top 80%',
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        '.showcase-card',
        { opacity: 0, y: 60, rotateY: -15 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.showcase-grid',
            start: 'top 75%',
          },
        }
      );

      // Featured card animation
      gsap.fromTo(
        '.featured-preview',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.featured-preview',
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-rotate active service
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleGetQuote = (serviceName: string, packageName: string) => {
    setSelectedService({ name: serviceName, package: packageName });
    setIsModalOpen(true);
  };

  const activeServiceData = services[activeService];

  return (
    <>
      <section ref={sectionRef} className="section-padding bg-muted/30 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <div className="showcase-header text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Services & Pricing
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Comprehensive Solutions with{' '}
              <span className="gradient-text">Transparent Pricing</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose from our range of professional services. All packages include dedicated support and satisfaction guarantee.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Package Preview - First on mobile/tablet */}
            <div className="featured-preview order-first lg:order-last">
              <div className="sticky top-32">
                <div className="relative bg-card rounded-3xl border-2 border-primary shadow-2xl overflow-visible">
                  {/* Popular Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full gradient-bg text-white text-sm font-semibold flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                    <Star className="w-4 h-4 fill-current" />
                    Popular Choice
                  </div>

                  {/* Gradient Background */}
                  <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br ${activeServiceData.color} opacity-10 rounded-t-3xl`} />

                  <div className="relative p-6 pt-10 md:p-8 md:pt-12">
                    {/* Service Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg ${activeServiceData.bgColor} flex items-center justify-center`}>
                        <activeServiceData.icon className={`w-5 h-5 ${activeServiceData.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold">{activeServiceData.title}</h3>
                        <p className="text-xs text-muted-foreground">{activeServiceData.popularPackage} Package</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-4xl font-heading font-bold gradient-text">{activeServiceData.popularPrice}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-6">
                      {activeServiceData.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {activeServiceData.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                            <Check className="w-3 h-3 text-secondary" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                      <li className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-secondary" />
                        </div>
                        <span className="text-sm">Dedicated Support</span>
                      </li>
                    </ul>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <Button
                        onClick={() => handleGetQuote(activeServiceData.title, activeServiceData.popularPackage)}
                        className="w-full gradient-bg glow"
                        size="lg"
                      >
                        Get Quote
                      </Button>
                      <Link to={activeServiceData.path} className="block">
                        <Button variant="outline" className="w-full" size="lg">
                          View All Packages
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Animated Dots */}
                  <div className="flex justify-center gap-2 pb-6">
                    {services.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveService(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          activeService === i ? 'bg-primary w-6' : 'bg-border hover:bg-primary/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Services List */}
            <div className="lg:col-span-2 order-last lg:order-first">
              <div className="showcase-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  const isActive = activeService === index;
                  
                  return (
                    <div
                      key={index}
                      className={`showcase-card group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                        isActive
                          ? 'bg-card border-primary shadow-xl scale-[1.02]'
                          : 'bg-card/50 border-border hover:border-primary/50 hover:bg-card'
                      }`}
                      onMouseEnter={() => setActiveService(index)}
                    >
                      {/* Active Indicator */}
                      {isActive && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
                      )}

                      {/* Gradient Top Border */}
                      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${service.color} transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`} />

                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 ${service.iconColor}`} />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-2xl font-bold text-foreground">{service.startingPrice}</span>
                        <span className="text-xs text-muted-foreground">starting</span>
                      </div>

                      {/* Quick Features */}
                      <div className="space-y-1.5">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Check className="w-3 h-3 text-secondary" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Link Arrow */}
                      <Link
                        to={service.path}
                        className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-white"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Not sure which service fits your needs?
            </p>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName={selectedService.name}
        packageName={selectedService.package}
      />
    </>
  );
};

export default ServicesShowcase;
