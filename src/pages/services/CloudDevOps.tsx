import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const CloudDevOps = () => {
  const features = ['AWS & Azure Solutions', 'CI/CD Pipelines', 'Docker & Kubernetes', 'Infrastructure as Code', 'Monitoring & Logging', 'Security & Compliance'];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">Cloud & DevOps</span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Scalable Cloud <span className="gradient-text">Infrastructure</span></h1>
              <p className="text-lg text-muted-foreground mb-8">Modern cloud solutions and DevOps practices that ensure reliability, scalability, and efficiency.</p>
              <Link to="/contact"><Button size="lg" className="gradient-bg">Get Started</Button></Link>
            </div>
            <div className="flex-1">
              <div className="glass rounded-2xl p-8">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop" alt="Cloud & DevOps" className="rounded-xl w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Cloud Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="glass p-6 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center"><Check className="w-5 h-5 text-white" /></div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CloudDevOps;
