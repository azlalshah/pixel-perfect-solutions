import { useState, useEffect } from 'react';
import gsap from 'gsap';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ExternalLink, X } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = ['all', 'web', 'mobile', 'design', 'marketing'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      category: 'mobile',
      description: 'Patient management app with appointment scheduling, health tracking, and telemedicine features.',
      tech: ['React Native', 'Firebase', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
      color: 'from-green-500 to-teal-500',
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      category: 'design',
      description: 'Modern analytics dashboard design with data visualization and real-time reporting capabilities.',
      tech: ['Figma', 'Design System', 'Prototyping'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      color: 'from-blue-500 to-purple-500',
    },
    {
      id: 4,
      title: 'Restaurant Booking System',
      category: 'web',
      description: 'Online reservation system with table management, customer notifications, and admin panel.',
      tech: ['Next.js', 'PostgreSQL', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Comprehensive fitness app with workout plans, progress tracking, and social features.',
      tech: ['Flutter', 'Firebase', 'ML Kit'],
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop',
      color: 'from-pink-500 to-orange-500',
    },
    {
      id: 6,
      title: 'Brand Identity Design',
      category: 'design',
      description: 'Complete brand identity including logo, color palette, typography, and brand guidelines.',
      tech: ['Illustrator', 'Brand Strategy', 'Guidelines'],
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format&fit=crop',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 7,
      title: 'SEO Campaign',
      category: 'marketing',
      description: 'Comprehensive SEO strategy that increased organic traffic by 300% in 6 months.',
      tech: ['SEO', 'Content Strategy', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
      color: 'from-teal-500 to-green-500',
    },
    {
      id: 8,
      title: 'Real Estate Platform',
      category: 'web',
      description: 'Property listing platform with virtual tours, mortgage calculator, and agent portal.',
      tech: ['React', 'Node.js', 'Three.js'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  useEffect(() => {
    gsap.fromTo(
      '.project-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power3.out' }
    );
  }, [filter]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-blob" />

        <div className="container-custom relative z-10 text-center">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">
            Our Work
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Featured
            <span className="gradient-text block">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects that have helped businesses
            achieve their digital transformation goals.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'gradient-bg text-white'
                    : 'glass hover:bg-muted'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden rounded-2xl glass">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${project.color} mb-2`}>
                      {project.category}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-foreground">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass max-w-2xl w-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const project = projects.find(p => p.id === selectedProject);
              if (!project) return null;
              return (
                <>
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-video object-cover"
                    />
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="p-8">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${project.color} mb-4`}>
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-heading font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full bg-muted text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 text-primary hover:underline">
                      View Live Project <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Portfolio;
