import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  image: string;
  results: string[];
}

interface CaseStudySectionProps {
  title?: string;
  subtitle?: string;
  cases: CaseStudy[];
}

const CaseStudySection = ({ title = 'Case Studies', subtitle = 'Our Work', cases }: CaseStudySectionProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="gradient-text">{title.split(' ').slice(-1)}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.results.map((result, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <ArrowRight className="w-3 h-3 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button variant="outline" size="lg">
              View All Projects <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
