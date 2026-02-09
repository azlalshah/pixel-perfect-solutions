import { type LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  benefits: Benefit[];
  image?: string;
}

const BenefitsSection = ({ title = 'Why Choose Us', subtitle = 'Benefits', description, benefits, image }: BenefitsSectionProps) => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {image && (
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 gradient-bg rounded-2xl blur-2xl opacity-15" />
                <div className="relative bg-card rounded-2xl p-2 shadow-xl border border-border">
                  <img src={image} alt={title} className="rounded-xl w-full" />
                </div>
              </div>
            </div>
          )}
          <div className={image ? 'flex-1' : 'w-full'}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="gradient-text">{title.split(' ').slice(-1)}</span>
            </h2>
            {description && (
              <p className="text-muted-foreground mb-8">{description}</p>
            )}
            <div className={`grid ${image ? 'grid-cols-1 md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
