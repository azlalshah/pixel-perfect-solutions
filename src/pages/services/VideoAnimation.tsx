import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Video, Play, Film, Sparkles, Zap, Clock, ArrowRight, Check } from 'lucide-react';
import heroImage from '@/assets/services/video-animation.png';

gsap.registerPlugin(ScrollTrigger);

const VideoAnimation = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
      gsap.fromTo('.hero-image', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' });
      gsap.fromTo('.feature-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: '.features-grid', start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  const features = [
    { icon: Play, title: '2D Animation', description: 'Engaging 2D animations for explainer videos, ads, and social media content.' },
    { icon: Film, title: '3D Animation', description: 'Stunning 3D animations and visual effects for immersive experiences.' },
    { icon: Video, title: 'Motion Graphics', description: 'Dynamic motion graphics that bring your brand story to life.' },
    { icon: Sparkles, title: 'Character Animation', description: 'Memorable animated characters that connect with your audience.' },
    { icon: Zap, title: 'Explainer Videos', description: 'Clear, concise explainer videos that simplify complex concepts.' },
    { icon: Clock, title: 'Quick Turnaround', description: 'Fast delivery without compromising on quality or creativity.' },
  ];

  const processSteps = [
    { step: '01', title: 'Concept & Script', description: 'We develop the creative concept and script for your animation.' },
    { step: '02', title: 'Storyboarding', description: 'Visual storyboards outline every scene and transition.' },
    { step: '03', title: 'Design & Style', description: 'We create the visual style, characters, and assets.' },
    { step: '04', title: 'Animation', description: 'Bringing everything to life with smooth, professional animation.' },
    { step: '05', title: 'Sound & Music', description: 'Adding voiceover, sound effects, and background music.' },
    { step: '06', title: 'Final Delivery', description: 'Polished final video in your preferred format and resolution.' },
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
              <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">Video Animation</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Captivating <span className="gradient-text">Video Animation</span> That Tells Your Story
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                From explainer videos to complex 3D animations, we create visually stunning content that engages your audience and communicates your message effectively.
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
              <img src={heroImage} alt="Video Animation Services" className="w-full rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Animation Services</h2>
            <p className="text-muted-foreground">Comprehensive video animation solutions for every need.</p>
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Animation Process</h2>
            <p className="text-muted-foreground">A streamlined workflow that delivers exceptional results.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="relative p-6 glass rounded-2xl">
                <span className="text-5xl font-bold text-primary/20">{item.step}</span>
                <h3 className="text-xl font-heading font-semibold mt-2 mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Bring Your Ideas to Life?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's create stunning animations that captivate your audience and tell your story.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-bg">Start Your Project</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VideoAnimation;
