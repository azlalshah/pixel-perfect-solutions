import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Palette,
  Layers,
  TrendingUp,
  Megaphone,
  Cloud,
  Server,
  Braces,
  FileCode,
  MousePointer,
  BarChart3,
  Mail,
  Settings,
} from 'lucide-react';

type ServiceType = 'web' | 'design' | 'marketing' | 'mobile' | 'cloud';

interface FloatingElementsProps {
  type: ServiceType;
}

const serviceElements = {
  web: [
    { Icon: Code, color: 'text-primary', position: 'top-20 left-[5%]' },
    { Icon: Braces, color: 'text-secondary', position: 'top-32 right-[8%]' },
    { Icon: Database, color: 'text-accent', position: 'bottom-40 left-[10%]' },
    { Icon: Globe, color: 'text-primary', position: 'top-48 left-[15%]' },
    { Icon: FileCode, color: 'text-secondary', position: 'bottom-32 right-[5%]' },
    { Icon: Settings, color: 'text-accent', position: 'top-60 right-[15%]' },
  ],
  design: [
    { Icon: Palette, color: 'text-primary', position: 'top-20 left-[5%]' },
    { Icon: Layers, color: 'text-secondary', position: 'top-32 right-[8%]' },
    { Icon: MousePointer, color: 'text-accent', position: 'bottom-40 left-[10%]' },
    { Icon: Palette, color: 'text-primary', position: 'top-48 left-[15%]' },
    { Icon: Layers, color: 'text-secondary', position: 'bottom-32 right-[5%]' },
  ],
  marketing: [
    { Icon: TrendingUp, color: 'text-primary', position: 'top-20 left-[5%]' },
    { Icon: Megaphone, color: 'text-secondary', position: 'top-32 right-[8%]' },
    { Icon: BarChart3, color: 'text-accent', position: 'bottom-40 left-[10%]' },
    { Icon: Mail, color: 'text-primary', position: 'top-48 left-[15%]' },
    { Icon: TrendingUp, color: 'text-secondary', position: 'bottom-32 right-[5%]' },
  ],
  mobile: [
    { Icon: Smartphone, color: 'text-primary', position: 'top-20 left-[5%]' },
    { Icon: Code, color: 'text-secondary', position: 'top-32 right-[8%]' },
    { Icon: Globe, color: 'text-accent', position: 'bottom-40 left-[10%]' },
    { Icon: Settings, color: 'text-primary', position: 'top-48 left-[15%]' },
    { Icon: Smartphone, color: 'text-secondary', position: 'bottom-32 right-[5%]' },
  ],
  cloud: [
    { Icon: Cloud, color: 'text-primary', position: 'top-20 left-[5%]' },
    { Icon: Server, color: 'text-secondary', position: 'top-32 right-[8%]' },
    { Icon: Database, color: 'text-accent', position: 'bottom-40 left-[10%]' },
    { Icon: Settings, color: 'text-primary', position: 'top-48 left-[15%]' },
    { Icon: Cloud, color: 'text-secondary', position: 'bottom-32 right-[5%]' },
  ],
};

const FloatingElements = ({ type }: FloatingElementsProps) => {
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementsRef.current) return;

    const elements = elementsRef.current.children;

    Array.from(elements).forEach((element, index) => {
      const duration = 4 + Math.random() * 3;
      const delay = index * 0.5;

      gsap.to(element, {
        y: 'random(-25, 25)',
        x: 'random(-15, 15)',
        rotation: 'random(-15, 15)',
        duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay,
      });
    });

    return () => {
      gsap.killTweensOf(elements);
    };
  }, [type]);

  const elements = serviceElements[type] || serviceElements.web;

  return (
    <div ref={elementsRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => {
        const { Icon, color, position } = element;
        return (
          <div
            key={index}
            className={`absolute ${position} hidden lg:flex items-center justify-center`}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className={`absolute inset-0 ${color} opacity-20 blur-xl`} />
              
              {/* Icon container */}
              <div className={`relative w-12 h-12 rounded-xl bg-card/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
            </div>
          </div>
        );
      })}

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-[20%] w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-32 left-[25%] w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-[10%] w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
    </div>
  );
};

export default FloatingElements;
