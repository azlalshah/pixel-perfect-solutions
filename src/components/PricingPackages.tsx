import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import gsap from 'gsap';
import QuoteModal from './QuoteModal';

export interface PricingPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

interface PricingPackagesProps {
  serviceName: string;
  packages: PricingPackage[];
}

const PricingPackages = ({ serviceName, packages }: PricingPackagesProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        }
      );

      // Hover animations
      Array.from(cards).forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -10, duration: 0.3, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
        });
      });
    }
  }, []);

  const handleGetQuote = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Pricing Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Choose Your <span className="gradient-text">Package</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Choose the package that best fits your needs.
            </p>
          </div>

          <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  pkg.isPopular
                    ? 'bg-card shadow-2xl border-2 border-primary scale-105 z-10'
                    : 'bg-card shadow-lg border border-border hover:border-primary/50'
                }`}
              >
                {/* Popular Badge */}
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full gradient-bg text-white text-sm font-semibold flex items-center gap-1.5 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                )}

                {/* Gradient Top Border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${
                    pkg.isPopular ? 'gradient-bg' : 'bg-primary/30'
                  }`}
                />

                {/* Package Name */}
                <h3 className="text-xl font-heading font-bold mb-2 mt-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-heading font-bold text-foreground">{pkg.price}</span>
                  {pkg.price.includes('/mo') ? null : (
                    <span className="text-muted-foreground ml-1">starting</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-secondary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => handleGetQuote(pkg.name)}
                  className={`w-full ${
                    pkg.isPopular
                      ? 'gradient-bg glow hover:opacity-90'
                      : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                  }`}
                  size="lg"
                >
                  Get Quote
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName={serviceName}
        packageName={selectedPackage}
      />
    </>
  );
};

export default PricingPackages;
