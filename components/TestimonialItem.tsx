import { twMerge } from 'tailwind-merge';
import { AnimatedElement } from './Animated';
import React from 'react';

interface TestimonialItemProps {
  index: number;
  text: string[];
}

export const TestimonialItem = ({ index, text }: TestimonialItemProps) => {
  const isEven = (index + 1) % 2 === 0;

  const commaClasses = [
    'before:text-blue-500',
    'before:block',
    'before:absolute',
    'before:text-[80px]',
    'before:font-semibold',
    'before:h-[46px]',
    'before:leading-[80px]',
    'after:text-blue-500',
    'after:block',
    'after:absolute',
    'after:text-[80px]',
    'after:font-semibold',
    'after:h-[46px]',
    'after:leading-[80px]',
  ];

  const beforeClasses = [
    "before:content-['“']",
    'before:left-[50%]',
    'before:translate-x-[-50%]',
    'before:top-[10px]',
    'before:md:left-[10px]',
    'before:md:top-[5px]',
    'before:md:translate-none',
  ];

  const afterClasses = [
    "after:md:content-['”']",
    'after:md:bottom-[5px]',
    'after:md:right-[10px]',
  ];

  return (
    <AnimatedElement
      element="li"
      animationClass={twMerge(
        'fade-9',
        isEven ? 'md:fade-in-right-11' : 'md:fade-in-left-11-delay-2',
      )}
      classes={twMerge(
        commaClasses,
        beforeClasses,
        afterClasses,
        'bg-white mb-[30px] pt-[60px] px-[40px] pb-[30px] relative md:py-[30px] md:px-[60px] lg:items-center lg:flex lg:w-[calc(50%-30px)]',
      )}
    >
      <h4 className="text-[16px] font-semibold leading-[2] m-0">
        {text.map((text, index) => {
          const isLast = index === text.length - 1;
          return (
            <React.Fragment key={index}>
              {text} {!isLast ? <br /> : null}
            </React.Fragment>
          );
        })}
      </h4>
    </AnimatedElement>
  );
};
