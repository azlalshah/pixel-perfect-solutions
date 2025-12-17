import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      name: 'Jennifer Smith',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop',
      content: 'TechNova transformed our entire digital presence. Their team delivered a stunning website that increased our conversions by 150%. Exceptional work!',
      rating: 5,
    },
    {
      name: 'Robert Chen',
      role: 'Founder, GreenLeaf Co.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop',
      content: 'The mobile app they built for us exceeded all expectations. User engagement increased dramatically and our customers love the new features.',
      rating: 5,
    },
    {
      name: 'Maria Garcia',
      role: 'Marketing Director, Retail Plus',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop',
      content: 'Their digital marketing strategy helped us reach new markets we never thought possible. ROI increased by 300% in just six months.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'CTO, FinanceHub',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop',
      content: 'The DevOps transformation TechNova implemented reduced our deployment time by 80%. Their expertise in cloud architecture is unmatched.',
      rating: 5,
    },
    {
      name: 'Emily Watson',
      role: 'Product Manager, HealthTech',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop',
      content: 'Working with TechNova was a pleasure from start to finish. They understood our vision and delivered a product that our users absolutely love.',
      rating: 5,
    },
    {
      name: 'Michael Brown',
      role: 'Owner, Local Eats Restaurant',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop',
      content: 'The booking system they built streamlined our operations completely. We can now manage reservations effortlessly and focus on what we do best.',
      rating: 5,
    },
  ];

  const stats = [
    { number: '98%', label: 'Client Satisfaction' },
    { number: '500+', label: 'Projects Delivered' },
    { number: '150+', label: 'Happy Clients' },
    { number: '4.9/5', label: 'Average Rating' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-blob" />

        <div className="container-custom relative z-10 text-center">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">
            Testimonials
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            What Our Clients
            <span className="gradient-text block">Say About Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with TechNova.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="glass rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container-custom testimonials-grid">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
              >
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-heading font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
