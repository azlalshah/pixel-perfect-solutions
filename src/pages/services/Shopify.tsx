import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ShoppingCart, CreditCard, Package, BarChart3, Palette, Headphones, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/services/shopify.png';

gsap.registerPlugin(ScrollTrigger);

const Shopify = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
      gsap.fromTo('.hero-image', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' });
      gsap.fromTo('.feature-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: '.features-grid', start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  const features = [
    { icon: ShoppingCart, title: 'Store Setup', description: 'Complete Shopify store setup with products, collections, and navigation.' },
    { icon: Palette, title: 'Custom Themes', description: 'Unique, branded themes that convert visitors into customers.' },
    { icon: CreditCard, title: 'Payment Integration', description: 'Seamless payment gateway setup for smooth transactions.' },
    { icon: Package, title: 'Inventory Management', description: 'Efficient inventory systems to track and manage products.' },
    { icon: BarChart3, title: 'Analytics Setup', description: 'Data tracking and analytics to optimize your store performance.' },
    { icon: Headphones, title: 'Ongoing Support', description: 'Dedicated support for updates, issues, and optimizations.' },
  ];

  const packages = [
    { name: 'Starter Store', price: '$999', features: ['Theme Customization', 'Up to 50 Products', 'Payment Setup', 'Basic SEO', '2 Weeks Support'] },
    { name: 'Growth Store', price: '$2,499', features: ['Custom Theme Design', 'Unlimited Products', 'Advanced Integrations', 'Marketing Tools', '1 Month Support', 'Analytics Setup'], popular: true },
    { name: 'Enterprise', price: '$4,999+', features: ['Fully Custom Build', 'Advanced Features', 'Multi-channel Selling', 'Custom Apps', '3 Months Support', 'Priority Development'] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content">
              <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">Shopify Development</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Build Your <span className="gradient-text">Shopify Store</span> That Sells
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Launch a powerful e-commerce store with Shopify. We create beautiful, high-converting online stores that grow your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gradient-bg">Get Started <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline">View Portfolio</Button>
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="Shopify Development Services" className="w-full rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Shopify Services</h2>
            <p className="text-muted-foreground">Everything you need to launch and grow your online store.</p>
          </div>
          <div className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="feature-card glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Shopify Packages</h2>
            <p className="text-muted-foreground">Choose the right package for your e-commerce needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative p-8 rounded-2xl ${pkg.popular ? 'glass border-2 border-primary' : 'glass'}`}>
                {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 gradient-bg text-white text-sm rounded-full">Best Value</span>}
                <h3 className="text-2xl font-heading font-bold mb-2">{pkg.name}</h3>
                <p className="text-4xl font-bold text-primary mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className={`w-full ${pkg.popular ? 'gradient-bg' : ''}`} variant={pkg.popular ? 'default' : 'outline'}>Choose Plan</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Start Selling Online?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's build a Shopify store that showcases your products and drives sales.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-bg">Start Your Store</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shopify;
