import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        'reveal',
        isVisible && 'active',
        delay === 1 && 'reveal-delay-1',
        delay === 2 && 'reveal-delay-2',
        delay === 3 && 'reveal-delay-3',
        delay === 4 && 'reveal-delay-4',
        delay === 5 && 'reveal-delay-5',
        className
      )}
    >
      {children}
    </div>
  );
}
