import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  Palette,
  TrendingUp,
  Smartphone,
  Cloud,
  Video,
  Pen,
  Target,
  Server,
  Layout,
  ShoppingCart,
  Globe,
  Layers,
  FileCode,
  Package,
  ArrowRight,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance.',
    color: 'primary',
    path: '/services/web-development',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive and engaging digital experiences.',
    color: 'secondary',
    path: '/services/ui-ux-design',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions including SEO, PPC, and social media management.',
    color: 'accent',
    path: '/services/digital-marketing',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    color: 'highlight',
    path: '/services/mobile-development',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and DevOps practices for reliable deployments.',
    color: 'primary',
    path: '/services/cloud-devops',
  },
  {
    icon: Video,
    title: 'Video Animation',
    description: 'Captivating 2D/3D animations and motion graphics that tell your story.',
    color: 'secondary',
    path: '/services/video-animation',
  },
  {
    icon: Pen,
    title: 'Logo Design',
    description: 'Memorable logos that perfectly represent your brand identity and values.',
    color: 'accent',
    path: '/services/logo-design',
  },
  {
    icon: Target,
    title: 'Branding',
    description: 'Comprehensive brand identity that resonates with your audience.',
    color: 'highlight',
    path: '/services/branding',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Robust, scalable backend systems that power your applications.',
    color: 'primary',
    path: '/services/backend-development',
  },
  {
    icon: Layout,
    title: 'WordPress',
    description: 'Custom WordPress solutions with themes, plugins, and optimization.',
    color: 'secondary',
    path: '/services/wordpress',
  },
  {
    icon: ShoppingCart,
    title: 'Shopify',
    description: 'High-converting Shopify stores that help you sell more online.',
    color: 'accent',
    path: '/services/shopify',
  },
  {
    icon: Globe,
    title: 'Wix',
    description: 'Professional Wix websites that are beautiful and easy to manage.',
    color: 'highlight',
    path: '/services/wix',
  },
  {
    icon: Layers,
    title: 'Webflow',
    description: 'Premium Webflow websites with advanced animations and CMS.',
    color: 'primary',
    path: '/services/webflow',
  },
  {
    icon: FileCode,
    title: 'Squarespace',
    description: 'Elegant Squarespace websites perfect for creatives and businesses.',
    color: 'secondary',
    path: '/services/squarespace',
  },
  {
    icon: Package,
    title: 'Premade Templates',
    description: 'Ready-to-use templates customized to your brand for quick launches.',
    color: 'accent',
    path: '/services/premade-templates',
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
          stagger: 0.08,
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
        <div className="services-grid grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.path}
                className="service-card group relative p-5 rounded-xl glass border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden"
                data-cursor="link"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div
                  className={`relative w-10 h-10 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-5 h-5 text-${service.color}`} />
                </div>

                {/* Content */}
                <h3 className="relative text-sm font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="relative text-xs text-muted-foreground line-clamp-2">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="relative flex items-center text-primary mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
