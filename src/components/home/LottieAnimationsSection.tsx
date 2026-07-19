import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import designerAnim from '@/assets/lottie-designer.json';
import webdevAnim from '@/assets/lottie-webdev.json';
import seoAnim from '@/assets/lottie-seo.json';
import marketingAnim from '@/assets/lottie-marketing.json';
import mobileAnim from '@/assets/lottie-mobile.json';

const services = [
  {
    title: 'Web Development',
    description: 'Pixel-perfect, blazing-fast websites and web apps built with modern frameworks.',
    animation: webdevAnim,
    link: '/services/web-development',
    accent: 'from-primary/20 to-primary/5',
  },
  {
    title: 'SEO Optimization',
    description: 'Rank higher on Google with technical SEO, content strategy, and link building.',
    animation: seoAnim,
    link: '/services/digital-marketing',
    accent: 'from-accent/20 to-accent/5',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven campaigns across social, PPC, and email that drive real ROI.',
    animation: marketingAnim,
    link: '/services/digital-marketing',
    accent: 'from-secondary/20 to-secondary/5',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps for iOS and Android with delightful UX.',
    animation: mobileAnim,
    link: '/services/mobile-development',
    accent: 'from-primary/20 to-accent/5',
  },
];

const LottieAnimationsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden section-padding bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Hero animation + intro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent blur-3xl" />
            <Lottie
              animationData={designerAnim}
              loop
              className="relative w-full max-w-lg mx-auto drop-shadow-2xl"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-foreground/80">Animated Service Experiences</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Bringing Every Service to Life with{' '}
              <span className="gradient-text">Motion & Storytelling</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From designers crafting pixel-perfect layouts to SEO specialists climbing rankings —
              every service we offer is powered by creativity, precision, and a passion for detail.
              Watch our craft come alive.
            </p>
            <Link to="/services">
              <Button size="lg" className="gradient-bg group">
                Explore All Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Animated service cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group relative glass rounded-3xl p-6 md:p-8 border border-border/50 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative flex flex-col sm:flex-row items-center gap-6">
                <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                  <Lottie animationData={service.animation} loop className="w-full h-full" />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LottieAnimationsSection;