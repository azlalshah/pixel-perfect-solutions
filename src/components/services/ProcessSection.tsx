interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
}

const ProcessSection = ({ title = 'Our Process', subtitle = 'How We Work', steps }: ProcessSectionProps) => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="gradient-text">{title.split(' ').slice(-1)}</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center group">
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
