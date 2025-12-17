import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Code, Palette, Megaphone, Smartphone, Cloud, ArrowRight, Check } from 'lucide-react';

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
          stagger: 0.15,
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
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card glass rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <Link to={service.link}>
                      <Button className="gradient-bg group">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                  <div className="lg:w-80">
                    <h4 className="text-sm font-semibold text-primary mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
