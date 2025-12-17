import { useEffect } from 'react';
import gsap from 'gsap';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, DollarSign, ArrowRight, Coffee, Heart, Laptop, Users } from 'lucide-react';

const Careers = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.job-card',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, stagger: 0.15, duration: 0.6, ease: 'power3.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  const benefits = [
    { icon: Laptop, title: 'Remote Friendly', description: 'Work from anywhere in the world' },
    { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive health insurance' },
    { icon: Coffee, title: 'Flexible Hours', description: 'Work when you\'re most productive' },
    { icon: Users, title: 'Great Team', description: 'Collaborate with talented people' },
  ];

  const jobs = [
    {
      title: 'Senior React Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'We\'re looking for an experienced React developer to lead frontend development on exciting projects.',
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90k - $130k',
      description: 'Join our design team to create beautiful, intuitive interfaces for web and mobile applications.',
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'San Francisco',
      type: 'Full-time',
      salary: '$130k - $170k',
      description: 'Help us build and maintain our cloud infrastructure and CI/CD pipelines.',
    },
    {
      title: 'Digital Marketing Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80k - $110k',
      description: 'Lead our digital marketing efforts and help clients achieve their growth goals.',
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      salary: '$100k - $140k',
      description: 'Manage complex projects and ensure successful delivery for our clients.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />

        <div className="container-custom relative z-10 text-center">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">
            Careers
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Join Our
            <span className="gradient-text block">Amazing Team</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're building the future of technology and we want you to be part of it.
            Explore our open positions and find your perfect role.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <h2 className="text-2xl font-heading font-bold text-center mb-12">
            Why Work With Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold mb-12">Open Positions</h2>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="job-card glass rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                  <div className="flex-1">
                    <span className="text-sm text-primary font-medium">{job.department}</span>
                    <h3 className="text-xl font-heading font-bold mt-1 mb-3">{job.title}</h3>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <Button className="gradient-bg group w-full lg:w-auto">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Match CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Don't See a Perfect Match?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We're always looking for talented individuals. Send us your resume
            and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Send Your Resume
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
