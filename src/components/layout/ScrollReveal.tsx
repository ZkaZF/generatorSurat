'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  animation?: 'fade-up' | 'fade-in';
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  style = {},
  animation = 'fade-up',
  delay = 0,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        root: null,
        rootMargin: '50px', // Trigger sedikit lebih awal sebelum elemen benar-benar masuk layar
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Kita manfaatkan CSS animation class yang sudah dibuat di globals.css
  const animClass = isVisible ? (animation === 'fade-up' ? 'animate-fade-up' : 'animate-fade-in') : '';

  return (
    <div
      ref={ref}
      className={`${className} ${animClass}`}
      style={{
        ...style,
        opacity: isVisible ? undefined : 0, // Sembunyikan sebelum discroll
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
