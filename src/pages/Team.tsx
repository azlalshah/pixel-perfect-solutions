import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Linkedin, Twitter, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.team-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.team-grid',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop',
      bio: 'Visionary leader with 15+ years in tech industry.',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop',
      bio: 'Tech expert specializing in scalable architectures.',
      social: { linkedin: '#', github: '#' },
    },
    {
      name: 'Michael Roberts',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop',
      bio: 'Award-winning designer with passion for UX.',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Emily Davis',
      role: 'Head of Marketing',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop',
      bio: 'Growth strategist who drives results.',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'David Kim',
      role: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop',
      bio: 'Full-stack wizard with love for clean code.',
      social: { linkedin: '#', github: '#' },
    },
    {
      name: 'Lisa Wang',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&auto=format&fit=crop',
      bio: 'Keeps projects on track and teams aligned.',
      social: { linkedin: '#' },
    },
    {
      name: 'James Wilson',
      role: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop',
      bio: 'Infrastructure expert ensuring 99.9% uptime.',
      social: { linkedin: '#', github: '#' },
    },
    {
      name: 'Anna Martinez',
      role: 'UI Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop',
      bio: 'Creates beautiful interfaces users love.',
      social: { linkedin: '#', twitter: '#' },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob" />

        <div className="container-custom relative z-10 text-center">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">
            Our Team
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Meet the
            <span className="gradient-text block">Innovators</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of experts brings together decades of experience
            in technology, design, and business strategy.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container-custom team-grid">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="team-card group"
              >
                <div className="glass rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold">{member.name}</h3>
                    <p className="text-primary text-sm mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Join Our Team
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We're always looking for talented individuals to join our growing team.
            Check out our open positions.
          </p>
          <a href="/careers" className="inline-block gradient-bg px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
            View Open Positions
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
