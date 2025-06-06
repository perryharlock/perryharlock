"use client";
import { twMerge } from "tailwind-merge";
import { AnimatedElement } from "./Animated";
import { Section } from "./Section";
import { TestimonialItem } from "./TestimonialItem";
import { Button } from "./Button";

const testimonialItems = [
  {
    text: (
      <>
        Perry is a great co-worker. He is always happy to help with whatever task you ask him, communicates very clearly
        and is very precise in the tasks he does. Perry also cares a lot about the design and code he produces and code
        reviews.
        <br />
        PS He is smiling like on his avatar all the time :)
      </>
    ),
  },
  {
    text: (
      <>
        Perry is a pragmatic and meticulous worker. His attention to detail in either design or CSS helps him produce
        high quality products. <br /> He&apos;s an excellent communicator and is in his element discussing the technical
        detail with the team. His many years working in the industry give him that extra level of experience to draw on
        when evaluating ideas.
      </>
    ),
  },
  {
    text: (
      <>
        Perry is a brilliant developer to work with, not only for his HTML and CSS skills and eye for design, but also
        his deep understanding of best practice and effective team processes. I really enjoyed our time working together
        and learnt a lot from him as well!
      </>
    ),
  },
  {
    text: (
      <>
        Perry is a talented and knowledgeable front end developer and designer. As well as his technical expertise and
        eye for design, he also brings a wide range of professional best practice with him which certainly helped us at
        Hire Space. He is also a pleasure to work with and I would thoroughly recommend him.
      </>
    ),
  },
];

const buttonClasses =
  "py-[15px] px-[30px] inline-block border-2 border-blue-500 bg:transparent my-[30px] md:mb-0 uppercase cursor-pointer font-bold transition-all duration-300 ease-linear hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white active:bg-blue-500 active:text-white";

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
