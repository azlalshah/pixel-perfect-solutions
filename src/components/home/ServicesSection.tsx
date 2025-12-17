import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  Palette,
  TrendingUp,
  Smartphone,
  Cloud,
  Shield,
  ArrowRight,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Custom websites and web applications built with modern technologies for optimal performance.',
    color: 'primary',
    path: '/services/web-development',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'User-centered design that creates intuitive and engaging digital experiences.',
    color: 'secondary',
    path: '/services/ui-ux-design',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description:
      'Strategic marketing solutions including SEO, PPC, and social media management.',
    color: 'accent',
    path: '/services/digital-marketing',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    color: 'highlight',
    path: '/services/mobile-development',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'Scalable cloud infrastructure and DevOps practices for reliable deployments.',
    color: 'primary',
    path: '/services/cloud-devops',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Comprehensive security solutions to protect your digital assets and data.',
    color: 'secondary',
    path: '/services/cybersecurity',
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.services-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-header',
            start: 'top 80%',
          },
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-muted/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="services-header text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Comprehensive IT Solutions for{' '}
            <span className="gradient-text">Modern Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a full spectrum of digital services to help your business
            thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.path}
                className="service-card group relative p-8 rounded-2xl glass border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden"
                data-cursor="link"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-7 h-7 text-${service.color}`} />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="relative text-muted-foreground mb-4">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="relative flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span className="text-sm font-medium mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
