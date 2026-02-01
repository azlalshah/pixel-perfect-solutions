import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Package, Zap, DollarSign, Palette, Settings, Headphones, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/services/premade-templates.png';

gsap.registerPlugin(ScrollTrigger);

const PremadeTemplates = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
      gsap.fromTo('.hero-image', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' });
      gsap.fromTo('.template-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: '.templates-grid', start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  const benefits = [
    { icon: Zap, title: 'Quick Launch', description: 'Get your website live in days, not weeks or months.' },
    { icon: DollarSign, title: 'Cost Effective', description: 'Premium designs at a fraction of custom development cost.' },
    { icon: Palette, title: 'Customizable', description: 'Every template is fully customized to match your brand.' },
    { icon: Package, title: 'Ready to Use', description: 'All features included and ready for your content.' },
    { icon: Settings, title: 'Easy Updates', description: 'Simple editing tools to update content anytime.' },
    { icon: Headphones, title: 'Support Included', description: 'Setup assistance and ongoing support.' },
  ];

  const templates = [
    { name: 'Business Pro', category: 'Corporate', price: '$499', features: ['5+ Pages', 'Contact Forms', 'Team Section', 'Services Layout'] },
    { name: 'Portfolio Plus', category: 'Creative', price: '$399', features: ['Gallery Layouts', 'Project Pages', 'About Section', 'Contact Form'] },
    { name: 'Shop Starter', category: 'E-commerce', price: '$699', features: ['Product Catalog', 'Cart & Checkout', 'Payment Ready', 'Order Management'] },
    { name: 'Service Pro', category: 'Services', price: '$449', features: ['Service Pages', 'Booking Form', 'Testimonials', 'FAQ Section'] },
    { name: 'Blog Master', category: 'Blog', price: '$349', features: ['Blog Layout', 'Categories', 'Newsletter', 'Social Sharing'] },
    { name: 'Restaurant', category: 'Food & Dining', price: '$549', features: ['Menu Display', 'Reservations', 'Gallery', 'Location Map'] },
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
              <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">Premade Templates</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Launch Fast with <span className="gradient-text">Premade Templates</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Get online quickly with our professionally designed templates. Customized to your brand and ready to launch in days.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gradient-bg">Browse Templates <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">Request Custom</Button>
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="Premade Website Templates" className="w-full rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Choose Premade Templates?</h2>
            <p className="text-muted-foreground">The smart way to get a professional website quickly.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Available Templates</h2>
            <p className="text-muted-foreground">Choose from our collection of professionally designed templates.</p>
          </div>
          <div className="templates-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <div key={index} className="template-card glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold">{template.name}</h3>
                    <p className="text-sm text-primary">{template.category}</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">{template.price}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {template.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-4 h-4 rounded-full gradient-bg flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className="w-full" variant="outline">Get This Template</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">Simple process to get your website live.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Choose Template', description: 'Pick a template that fits your needs.' },
              { step: '2', title: 'Share Content', description: 'Send us your text, images, and branding.' },
              { step: '3', title: 'We Customize', description: 'We customize everything to your brand.' },
              { step: '4', title: 'Go Live', description: 'Review, approve, and launch your site!' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Choose a template and get your professional website live in just days.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-bg">Contact Us Today</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PremadeTemplates;
