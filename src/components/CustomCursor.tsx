import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.5,
        ease: 'power3.out',
      });

      gsap.to(cursorDot, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1.5,
        borderColor: 'hsl(var(--primary))',
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        borderColor: 'hsl(var(--foreground))',
        duration: 0.3,
      });
    };

    const handleLinkEnter = () => {
      gsap.to(cursor, {
        scale: 2,
        backgroundColor: 'hsl(var(--primary) / 0.2)',
        mixBlendMode: 'difference',
        duration: 0.3,
      });
    };

    const handleLinkLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: 'transparent',
        mixBlendMode: 'normal',
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [data-cursor="pointer"]');
    const linkElements = document.querySelectorAll('a, [data-cursor="link"]');

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    linkElements.forEach((el) => {
      el.addEventListener('mouseenter', handleLinkEnter);
      el.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      linkElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleLinkEnter);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-foreground pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999] hidden md:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default CustomCursor;
