import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GoogleG = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const testimonials = [
  {
    quote:
      'TechNova transformed our online presence completely. Their team delivered a stunning website that exceeded our expectations and significantly increased our conversion rates.',
    author: 'Sarah Johnson',
    role: 'CEO, Startup Hub',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    date: '2 weeks ago',
  },
  {
    quote:
      'The mobile app they built for us is phenomenal. User engagement has increased by 200% since launch. Their attention to detail and user experience is unmatched.',
    author: 'Michael Chen',
    role: 'Product Manager, TechFlow',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 4.5,
    date: '1 month ago',
  },
  {
    quote:
      'Working with TechNova on our digital marketing strategy was a game-changer. Our organic traffic grew by 300% in just six months.',
    author: 'Emily Rodriguez',
    role: 'Marketing Director, GrowthCo',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 4,
    date: '3 weeks ago',
  },
  {
    quote:
      'Their UI/UX design team created an intuitive dashboard that our customers love. The feedback has been overwhelmingly positive.',
    author: 'David Park',
    role: 'CTO, DataDriven',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 3,
    date: '2 months ago',
  },
  {
    quote:
      'Exceptional service and outstanding results. The team is highly professional and delivered our project ahead of schedule.',
    author: 'Aisha Khan',
    role: 'Founder, BloomBoutique',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    date: '1 week ago',
  },
  {
    quote:
      'Best decision we made for our business. Their SEO expertise brought us to the first page of Google in months.',
    author: 'James Wilson',
    role: 'Owner, WilsonTrade',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    rating: 3.5,
    date: '5 days ago',
  },
];

const overall = { rating: 4.9, count: 128 };

const RatingStars = ({ rating, size = 'w-4 h-4' }: { rating: number; size?: string }) => {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.25 && rating - full < 0.75;
  const fullCount = rating - full >= 0.75 ? full + 1 : full;
  const empty = 5 - fullCount - (hasHalf ? 1 : 0);
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: fullCount }).map((_, i) => (
        <Star key={`f${i}`} className={size} style={{ fill: '#facc15', color: '#facc15' }} />
      ))}
      {hasHalf && (
        <div className={`relative ${size}`}>
          <Star className={`${size} absolute inset-0`} style={{ fill: 'rgba(148,163,184,0.25)', color: 'rgba(148,163,184,0.5)' }} />
          <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            <Star className={size} style={{ fill: '#facc15', color: '#facc15' }} />
          </div>
        </div>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e${i}`} className={size} style={{ fill: 'rgba(148,163,184,0.25)', color: 'rgba(148,163,184,0.5)' }} />
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  useEffect(() => {
    if (activeIndex > maxIndex) setActiveIndex(maxIndex);
  }, [maxIndex, activeIndex]);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [maxIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonials-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.testimonials-header', start: 'top 80%' },
        }
      );
      gsap.fromTo(
        '.google-review-panel',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.google-review-panel', start: 'top 85%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const next = () => setActiveIndex((p) => (p >= maxIndex ? 0 : p + 1));
  const prev = () => setActiveIndex((p) => (p <= 0 ? maxIndex : p - 1));
  const slidePct = 100 / visibleCount;

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="testimonials-header text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>

        <div className="google-review-panel max-w-6xl mx-auto glass rounded-3xl p-6 md:p-10 border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <GoogleG className="w-10 h-10" />
              <div>
                <div className="font-heading font-semibold text-lg">Google Reviews</div>
                <div className="text-sm text-muted-foreground">Verified customer reviews</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-4xl font-heading font-bold">{overall.rating}</div>
              <div>
                <RatingStars rating={overall.rating} size="w-5 h-5" />
                <div className="text-sm text-muted-foreground mt-1">
                  Based on {overall.count} reviews
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/search?q=technova+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors text-sm font-medium"
              data-cursor="pointer"
            >
              <GoogleG className="w-4 h-4" />
              Write a review
            </a>
          </div>

          <div className="relative mt-8">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeIndex * slidePct}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="shrink-0 px-3" style={{ width: `${slidePct}%` }}>
                    <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:border-primary/40 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={t.avatar}
                          alt={t.author}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold truncate">{t.author}</div>
                          <div className="text-xs text-muted-foreground truncate">{t.role}</div>
                        </div>
                        <GoogleG className="w-5 h-5 shrink-0" />
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <RatingStars rating={t.rating} />
                        <span className="text-xs text-muted-foreground">{t.date}</span>
                      </div>

                      <p className="text-sm text-foreground/85 leading-relaxed">{t.quote}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      index === activeIndex
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    data-cursor="pointer"
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous review"
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
                  data-cursor="pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next review"
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
                  data-cursor="pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;