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
        { name: 'Mobile App Development', path: '/services/mobile-development' },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops' },
      ],
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-3' : 'py-5 bg-transparent'
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

                {/* Submenu */}
                {link.submenu && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-56 glass rounded-lg overflow-hidden transition-all duration-300 ${
                      servicesOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.path}
                        className="block px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
                      >
                        {sublink.name}
                      </Link>
                    ))}
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
            className="lg:hidden relative z-[60] p-2 glass rounded-lg hover:bg-muted/50 transition-colors"
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

      {/* Mobile Navigation - Outside nav for full screen coverage */}
      <div
        className={`fixed inset-0 z-[55] bg-background lg:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Close button inside mobile menu */}
        <button
          className="absolute top-5 right-4 p-2 glass rounded-lg hover:bg-muted/50 transition-colors z-10"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-foreground" />
        </button>
        
        <div className="flex flex-col items-center justify-center h-full gap-4 px-6">
          {navLinks.map((link) => (
            <div key={link.name} className="mobile-nav-item w-full max-w-xs text-center">
              {link.submenu ? (
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-center gap-2 text-2xl font-heading font-semibold text-foreground hover:text-primary transition-colors w-full"
                  >
                    {link.name}
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-300 ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {/* Mobile Submenu */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileServicesOpen ? 'max-h-80 mt-3' : 'max-h-0'
                    }`}
                  >
                    <div className="flex flex-col gap-2 py-2 px-4 glass rounded-lg">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.path}
                          onClick={() => setIsOpen(false)}
                          className="text-base text-foreground/80 hover:text-primary transition-colors py-2"
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
                  className="text-2xl font-heading font-semibold text-foreground hover:text-primary transition-colors block"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="mobile-nav-item mt-4">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="gradient-bg hover:opacity-90 transition-opacity text-lg px-8 py-6">
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
