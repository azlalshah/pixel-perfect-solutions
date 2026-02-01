import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Code, Palette, Megaphone, Smartphone, Cloud, Video, Pen, Target, Server, Layout, ShoppingCart, Globe, Layers, FileCode, Package, BookOpen, ArrowRight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies for optimal performance and scalability.',
      features: ['React & Next.js', 'Node.js Backend', 'API Development', 'Database Design'],
      link: '/services/web-development',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that delight users and drive engagement with your product.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      link: '/services/ui-ux-design',
      gradient: 'from-pink-500 to-orange-500',
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Data-driven strategies to grow your online presence and reach your target audience effectively.',
      features: ['SEO Optimization', 'Social Media', 'PPC Campaigns', 'Content Strategy'],
      link: '/services/digital-marketing',
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
      link: '/services/mobile-development',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and DevOps practices for reliable, efficient operations.',
      features: ['AWS & Azure', 'CI/CD Pipelines', 'Containerization', 'Monitoring'],
      link: '/services/cloud-devops',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: Video,
      title: 'Video Animation',
      description: 'Captivating 2D/3D animations and motion graphics that tell your story effectively.',
      features: ['2D Animation', '3D Animation', 'Motion Graphics', 'Explainer Videos'],
      link: '/services/video-animation',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: Pen,
      title: 'Logo Design',
      description: 'Memorable, timeless logos that perfectly represent your brand identity and values.',
      features: ['Custom Designs', 'Multiple Concepts', 'Full Ownership', 'Brand Files'],
      link: '/services/logo-design',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Target,
      title: 'Branding',
      description: 'Comprehensive brand identity that resonates with your audience and stands out.',
      features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Marketing Assets'],
      link: '/services/branding',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Robust, scalable backend systems that power your applications reliably.',
      features: ['API Development', 'Database Design', 'Microservices', 'Security'],
      link: '/services/backend-development',
      gradient: 'from-slate-500 to-gray-700',
    },
    {
      icon: Layout,
      title: 'WordPress Development',
      description: 'Custom WordPress solutions with themes, plugins, and performance optimization.',
      features: ['Custom Themes', 'Plugin Development', 'WooCommerce', 'Maintenance'],
      link: '/services/wordpress',
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      icon: ShoppingCart,
      title: 'Shopify Development',
      description: 'High-converting Shopify stores that help you sell more and grow your business.',
      features: ['Store Setup', 'Custom Themes', 'Payment Integration', 'App Integration'],
      link: '/services/shopify',
      gradient: 'from-green-600 to-emerald-500',
    },
    {
      icon: Globe,
      title: 'Wix Development',
      description: 'Professional Wix websites that are beautiful and easy to manage.',
      features: ['Custom Design', 'E-commerce', 'SEO Setup', 'Training'],
      link: '/services/wix',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Layers,
      title: 'Webflow Development',
      description: 'Premium Webflow websites with advanced animations and CMS integration.',
      features: ['Visual Design', 'Interactions', 'CMS Setup', 'Hosting'],
      link: '/services/webflow',
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      icon: FileCode,
      title: 'Squarespace Development',
      description: 'Elegant Squarespace websites perfect for creatives and small businesses.',
      features: ['Template Customization', 'Portfolio Sites', 'E-commerce', 'Blog Setup'],
      link: '/services/squarespace',
      gradient: 'from-gray-700 to-black',
    },
    {
      icon: Package,
      title: 'Premade Templates',
      description: 'Ready-to-use website templates customized to your brand for quick launches.',
      features: ['Quick Setup', 'Customization', 'Multiple Categories', 'Support'],
      link: '/services/premade-templates',
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      icon: BookOpen,
      title: 'Ebook Design',
      description: 'Professional ebook design and formatting for all digital platforms.',
      features: ['Custom Layout', 'Cover Design', 'Multi-format Export', 'Print-Ready'],
      link: '/services/ebook-design',
      gradient: 'from-amber-500 to-yellow-500',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="container-custom relative z-10 text-center">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">
            Our Services
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Comprehensive IT
            <span className="gradient-text block">Solutions for Growth</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end technology solutions
            that help businesses thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom services-grid">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card glass rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-5`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 rounded-full gradient-bg flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <Button variant="outline" size="sm" className="w-full group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how we can help transform your business with our comprehensive IT solutions.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-bg">
              Get a Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
