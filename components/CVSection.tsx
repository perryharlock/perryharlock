import { AnimatedElement } from './Animated';
import { Section } from './Section';
import { CVItem } from './CVItem';
import cvItems from '../data/cv.json';

export const CVSection = () => {
  return (
    <Section id="cv" title="CV">
      <>
        <div className="hidden print:block text-center">
          <p>
            Perry Harlock – UI Developer / Designer <br />
            web: www.perryharlock.co.uk <br />
            email: admin@perryharlock.co.uk
          </p>
        </div>
        <div className="container-auto">
          <div className="md:grid md:grid-cols-12 md:gap-4">
            <div className="md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
              <div className="text-center mt-[30px] mb-[65px] md:mb-[100px]">
                <AnimatedElement animationClass="fade-9-delay-2">
                  <p className="mb-4">
                    I&apos;m a{' '}
                    <span className="font-bold">Front-end of front-end</span>{' '}
                    focused UI developer with over 10 years of experience.
                  </p>
                  <p className="mb-4">
                    I love <span className="font-bold">CSS</span> and also enjoy
                    spending time in Sketch or Figma. I&apos;m into bringing
                    designs to life in code and writing accessible, semantic and
                    performant components / pages.
                  </p>
                  <p className="mb-4 font-bold">
                    HTML(5), CSS(3), LESS, Sass, NextJS, Typescript, React,
                    Figma, Sketch, Git, Agile
                  </p>
                </AnimatedElement>
              </div>
            </div>
          </div>
          <ul className="relative mt-[20px] mb-[30px] md:mt-0 md:mb-[100px] before:content-[''] before:absolute before:top-0 before:left-[50%] before:w-[3px] before:h-full before:bg-grey-500 before:ml-[-2px] before:md:h-[97%]">
            {cvItems.map((item, index) => {
              const isLast = index === cvItems.length - 1;
              return <CVItem key={index} {...{ ...item, index, isLast }} />;
            })}
          </ul>
        </div>
      </>
    </Section>
  );
};
