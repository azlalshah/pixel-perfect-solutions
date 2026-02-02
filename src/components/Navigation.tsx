import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        '.mobile-nav-item',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.4, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      submenu: [
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'UI/UX Design', path: '/services/ui-ux-design' },
        { name: 'Digital Marketing', path: '/services/digital-marketing' },
        { name: 'Mobile Development', path: '/services/mobile-development' },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops' },
        { name: 'Video Animation', path: '/services/video-animation' },
        { name: 'Logo Design', path: '/services/logo-design' },
        { name: 'Branding', path: '/services/branding' },
        { name: 'Backend Development', path: '/services/backend-development' },
        { name: 'WordPress', path: '/services/wordpress' },
        { name: 'Shopify', path: '/services/shopify' },
        { name: 'Wix', path: '/services/wix' },
        { name: 'Webflow', path: '/services/webflow' },
        { name: 'Squarespace', path: '/services/squarespace' },
        { name: 'Premade Templates', path: '/services/premade-templates' },
        { name: 'Ebook Design', path: '/services/ebook-design' },
      ],
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? 'top-4 mx-4 md:mx-8 lg:mx-16 xl:mx-32 bg-background/95 backdrop-blur-lg py-3 rounded-2xl border border-border shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.25),0_4px_16px_-4px_hsl(var(--primary)/0.15)]' 
            : 'top-0 mx-0 py-5 bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <span className="text-2xl font-heading font-bold gradient-text">
              TechNova
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname.includes(link.path)
                        ? 'text-primary'
                        : 'text-foreground/80'
                    }`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-foreground/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Submenu - Mega Menu Style */}
                {link.submenu && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-card rounded-xl overflow-hidden transition-all duration-300 shadow-xl border border-border p-4 ${
                      servicesOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="grid grid-cols-3 gap-1">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.path}
                          className="block px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-border">
                      <Link
                        to="/services"
                        className="block text-center text-sm text-primary hover:underline"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="gradient-bg hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-[60] p-2 bg-card rounded-lg hover:bg-muted transition-colors border border-border shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-[54] bg-background/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Off-Canvas Mobile Navigation - Slides from right, half width */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[55] w-1/2 min-w-[280px] max-w-[400px] bg-background border-l border-border shadow-2xl lg:hidden transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="text-lg font-heading font-bold gradient-text">Menu</span>
          <button
            className="p-2 bg-card rounded-lg hover:bg-muted transition-colors border border-border"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>
        
        {/* Scrollable menu content */}
        <div className="flex flex-col h-[calc(100%-80px)] overflow-y-auto py-4 px-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="mobile-nav-item">
                {link.submenu ? (
                  <div className="flex flex-col">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between gap-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-colors w-full py-3 px-3 rounded-lg"
                    >
                      {link.name}
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          mobileServicesOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {/* Mobile Submenu */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileServicesOpen ? 'max-h-[500px]' : 'max-h-0'
                      }`}
                    >
                      <div className="flex flex-col gap-1 pl-4 py-1">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.path}
                            onClick={() => setIsOpen(false)}
                            className="text-sm text-foreground/70 hover:text-primary hover:bg-muted/50 transition-colors py-2.5 px-3 rounded-lg"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-colors block py-3 px-3 rounded-lg"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          {/* CTA Button at bottom */}
          <div className="mt-auto pt-4 border-t border-border">
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block">
              <Button className="gradient-bg hover:opacity-90 transition-opacity w-full py-5">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
