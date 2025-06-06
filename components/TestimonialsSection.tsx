'use client';
import { AnimatedElement } from './Animated';
import { Section } from './Section';
import { TestimonialItem } from './TestimonialItem';
import { Button } from './Button';
import testimonialItems from '../data/testimonials.json';

export const TestimonialsSection = () => {
  return (
    <Section
      id="testimonials"
      title="Testimonials"
      classNames="bg-grey-100 clip-testimonials md:clip-testimonials lg:clip-testimonials mb-[-30px] pt-[30px] pb-[80px] text-center md:mb-[-100px] md:pt-[120px] md:pb-[180px]"
    >
      <>
        <div className="container-auto">
          <p className="text-blue-500 text-[20px] font-bold leading-[1.3] md:text-[30px]">
            Nice things people I have worked with have said about me.
          </p>
          <ul className="flex flex-wrap justify-between mt-[40px] md:mt-[80px]">
            {testimonialItems.map((item, index) => {
              return <TestimonialItem key={index} {...{ ...item, index }} />;
            })}
          </ul>
          <AnimatedElement animationClass="fade-9-delay-4">
            <Button
              href="https://www.linkedin.com/in/perry-harlock-1701b712/details/recommendations"
              classNames="my-[30px] md:mb-0"
              linkText="See more testimonials"
              target="_blank"
            />
          </AnimatedElement>
        </div>
      </>
    </Section>
  );
};
