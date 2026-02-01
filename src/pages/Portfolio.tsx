import { useState, useEffect } from 'react';
import gsap from 'gsap';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ExternalLink, X } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'animation', label: 'Video Animation' },
    { id: 'logo', label: 'Logo Design' },
    { id: 'branding', label: 'Branding' },
    { id: 'backend', label: 'Backend' },
    { id: 'wordpress', label: 'WordPress' },
    { id: 'shopify', label: 'Shopify' },
    { id: 'wix', label: 'Wix' },
    { id: 'webflow', label: 'Webflow' },
    { id: 'squarespace', label: 'Squarespace' },
    { id: 'templates', label: 'Templates' },
  ];

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
      title: 'Tech Startup Branding',
      category: 'branding',
      description: 'Complete brand identity including logo, color palette, typography, and brand guidelines.',
      tech: ['Illustrator', 'Brand Strategy', 'Guidelines'],
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format&fit=crop',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 7,
      title: 'SEO Campaign - Tech Co',
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
    {
      id: 9,
      title: 'Product Explainer Video',
      category: 'animation',
      description: '2D animated explainer video showcasing SaaS product features and benefits.',
      tech: ['After Effects', '2D Animation', 'Motion Graphics'],
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop',
      color: 'from-red-500 to-pink-500',
    },
    {
      id: 10,
      title: 'Fintech Logo Design',
      category: 'logo',
      description: 'Modern, minimalist logo design for a financial technology startup.',
      tech: ['Illustrator', 'Logo Design', 'Brand Mark'],
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      id: 11,
      title: 'API Gateway System',
      category: 'backend',
      description: 'Scalable API gateway with rate limiting, authentication, and monitoring.',
      tech: ['Node.js', 'Redis', 'PostgreSQL', 'Docker'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
      color: 'from-slate-600 to-gray-800',
    },
    {
      id: 12,
      title: 'Law Firm Website',
      category: 'wordpress',
      description: 'Professional WordPress website with case studies, attorney profiles, and contact forms.',
      tech: ['WordPress', 'Custom Theme', 'SEO'],
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop',
      color: 'from-blue-700 to-indigo-700',
    },
    {
      id: 13,
      title: 'Fashion E-commerce Store',
      category: 'shopify',
      description: 'High-converting Shopify store with custom theme and product recommendations.',
      tech: ['Shopify', 'Liquid', 'Custom Apps'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop',
      color: 'from-green-600 to-emerald-500',
    },
    {
      id: 14,
      title: 'Photography Portfolio',
      category: 'wix',
      description: 'Stunning Wix portfolio site for a professional photographer with gallery and booking.',
      tech: ['Wix', 'Wix Bookings', 'Custom Design'],
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&auto=format&fit=crop',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 15,
      title: 'Creative Agency Site',
      category: 'webflow',
      description: 'Award-winning Webflow site with complex animations and CMS integration.',
      tech: ['Webflow', 'Animations', 'CMS'],
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop',
      color: 'from-violet-500 to-purple-600',
    },
    {
      id: 16,
      title: 'Restaurant Website',
      category: 'squarespace',
      description: 'Elegant Squarespace site for upscale restaurant with menu and reservations.',
      tech: ['Squarespace', 'OpenTable', 'Custom CSS'],
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop',
      color: 'from-gray-700 to-black',
    },
    {
      id: 17,
      title: 'Business Starter Kit',
      category: 'templates',
      description: 'Ready-to-use business website template with all essential pages and features.',
      tech: ['React', 'Tailwind', 'Pre-built'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      id: 18,
      title: '3D Product Animation',
      category: 'animation',
      description: 'Stunning 3D product visualization and animation for marketing campaign.',
      tech: ['Cinema 4D', '3D Animation', 'Rendering'],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop',
      color: 'from-purple-600 to-pink-600',
    },
    {
      id: 19,
      title: 'Cafe Logo & Branding',
      category: 'logo',
      description: 'Warm, inviting logo and brand identity for artisan coffee shop.',
      tech: ['Illustrator', 'Branding', 'Packaging'],
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop',
      color: 'from-amber-600 to-orange-600',
    },
    {
      id: 20,
      title: 'Microservices Architecture',
      category: 'backend',
      description: 'Enterprise microservices backend with event-driven architecture.',
      tech: ['Go', 'Kubernetes', 'RabbitMQ', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
      color: 'from-cyan-600 to-blue-600',
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
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  filter === cat.id
                    ? 'gradient-bg text-white'
                    : 'glass hover:bg-muted'
                }`}
              >
                {cat.label}
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
