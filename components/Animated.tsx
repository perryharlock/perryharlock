'use client';
import { useInView } from '@/hooks/useInView';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface AnimatedElementProps {
  animationClass?: string;
  classes?: string;
  children: React.ReactNode;
  testId?: string;
  element?: React.ElementType;
}

export const AnimatedElement = ({
  animationClass = 'fade-9',
  classes,
  children,
  testId,
  element: Element = 'div',
}: AnimatedElementProps) => {
  const { ref, isInView } = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    document.body.classList.remove('no-js');
  }, []);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <Element
      ref={ref}
      data-testid={testId ?? 'animated-element'}
      className={twMerge(
        'will-animate', // ensures visible for no-JS users
        classes,
        hasAnimated ? animationClass : '',
      )}
    >
      {children}
    </Element>
  );
};
