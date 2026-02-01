import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, Layout, FileText, Layers, Palette, Download, ArrowRight, Check, Star } from 'lucide-react';
import QuoteModal from '@/components/QuoteModal';

gsap.registerPlugin(ScrollTrigger);

const EbookDesign = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
      gsap.fromTo('.hero-image', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' });
      gsap.fromTo('.feature-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: '.features-grid', start: 'top 80%' } });
      gsap.fromTo('.pricing-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.15, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: '.pricing-grid', start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  const features = [
    { icon: Layout, title: 'Custom Layouts', description: 'Professional, eye-catching layouts tailored to your content and brand.' },
    { icon: FileText, title: 'Typography', description: 'Carefully selected fonts and text styling for maximum readability.' },
    { icon: Layers, title: 'Multi-Format Export', description: 'Delivered in PDF, EPUB, MOBI, and other formats for all platforms.' },
    { icon: Palette, title: 'Cover Design', description: 'Stunning cover designs that grab attention and boost sales.' },
    { icon: BookOpen, title: 'Interior Design', description: 'Chapter headers, pull quotes, and visual elements throughout.' },
    { icon: Download, title: 'Print-Ready Files', description: 'High-resolution files ready for print-on-demand services.' },
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$299',
      description: 'Perfect for short ebooks and lead magnets.',
      features: [
        'Up to 30 pages',
        'Basic layout design',
        'Cover design',
        'PDF format',
        'One revision round',
        '7-day delivery',
      ],
      isPopular: false,
    },
    {
      name: 'Professional',
      price: '$799',
      description: 'Ideal for full-length ebooks and guides.',
      features: [
        'Up to 100 pages',
        'Premium layout design',
        'Custom cover design',
        'PDF, EPUB & MOBI formats',
        'Interactive elements',
        'Three revision rounds',
        'Custom graphics included',
        '14-day delivery',
      ],
      isPopular: true,
    },
    {
      name: 'Enterprise',
      price: '$1,499',
      description: 'Complete solution for book series or complex projects.',
      features: [
        'Unlimited pages',
        'Bespoke layout design',
        'Premium cover + variations',
        'All digital formats',
        'Print-ready files',
        'Unlimited revisions',
        'Custom illustrations',
        'ISBN & metadata setup',
        'Priority 10-day delivery',
      ],
      isPopular: false,
    },
  ];

  const deliverables = [
    'Professional Layout Design',
    'Custom Cover Artwork',
    'Table of Contents',
    'Chapter Heading Designs',
    'PDF Export (Web & Print)',
    'EPUB & MOBI Formats',
    'Source Files (upon request)',
    'Style Guide Document',
  ];

  const handleGetQuote = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content">
              <span className="inline-block px-4 py-2 rounded-full glass text-amber-500 text-sm font-medium mb-6">
                Ebook Design
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Professional <span className="text-amber-500">Ebook Design</span> That Sells
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Transform your content into beautifully designed ebooks that captivate readers and elevate your brand. From lead magnets to full-length books.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white" onClick={() => handleGetQuote('Professional')}>
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline">View Portfolio</Button>
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-3xl blur-2xl" />
                <div className="relative glass p-8 rounded-3xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-amber-500/10 rounded-xl p-6 text-center">
                      <BookOpen className="w-10 h-10 text-amber-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold">500+</p>
                      <p className="text-sm text-muted-foreground">Ebooks Designed</p>
                    </div>
                    <div className="bg-amber-500/10 rounded-xl p-6 text-center">
                      <Star className="w-10 h-10 text-amber-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold">4.9/5</p>
                      <p className="text-sm text-muted-foreground">Client Rating</p>
                    </div>
                    <div className="bg-amber-500/10 rounded-xl p-6 text-center col-span-2">
                      <Layers className="w-10 h-10 text-amber-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold">All Formats</p>
                      <p className="text-sm text-muted-foreground">PDF, EPUB, MOBI & More</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Complete Ebook Design Services</h2>
            <p className="text-muted-foreground">Everything you need to publish a professional ebook.</p>
          </div>
          <div className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="feature-card glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Transparent Pricing</h2>
            <p className="text-muted-foreground">Choose the package that fits your project needs.</p>
          </div>
          <div className="pricing-grid grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`pricing-card relative p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${
                  pkg.isPopular
                    ? 'bg-card border-2 border-amber-500 shadow-2xl'
                    : 'glass border border-border'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-amber-500 text-white text-sm font-semibold flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-heading font-bold mb-2">{pkg.name}</h3>
                <p className="text-4xl font-bold text-amber-500 mb-2">{pkg.price}</p>
                <p className="text-muted-foreground mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-amber-500" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleGetQuote(pkg.name)}
                  className={`w-full ${
                    pkg.isPopular
                      ? 'bg-amber-500 hover:bg-amber-600 text-white'
                      : ''
                  }`}
                  variant={pkg.isPopular ? 'default' : 'outline'}
                  size="lg"
                >
                  Get Quote
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">What You'll Receive</h2>
              <p className="text-muted-foreground mb-8">
                Every ebook project includes comprehensive deliverables to ensure your content looks professional across all platforms and devices.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-heading font-bold mb-4">Need a Custom Quote?</h3>
              <p className="text-muted-foreground mb-6">
                Have a unique project or specific requirements? We'd love to hear about it and provide a tailored solution.
              </p>
              <Link to="/contact">
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Create Your Ebook?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's transform your content into a beautifully designed ebook that readers will love.
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white" onClick={() => handleGetQuote('Professional')}>
            Start Your Ebook Project
          </Button>
        </div>
      </section>

      <Footer />

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="Ebook Design"
        packageName={selectedPackage}
      />
    </div>
  );
};

export default EbookDesign;