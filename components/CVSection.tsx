"use client";
import { twMerge } from "tailwind-merge";
import { AnimatedElement } from "./Animated";
import { Section } from "./Section";

const portfolioItems = [
  {
    title: "Hussle",
    description: "Front end build",
    linkUrl: "https://www.hussle.com",
    linkText: "Visit site",
    skills: [
      "HTML / CSS / Sass",
      "JS / jQuery / React / Typescript / NextJS",
      "Responsive / Adaptive",
      "Sketch / Figma / Photoshop",
    ],
    imageSrc: "/hussle.webp",
    imageAlt: "Hussle screenshot on laptop",
    imageWidth: 1167,
    imageHeight: 671,
  },
  {
    title: "Assertis",
    description: "Front end build / design",
    linkUrl: "https://www.assertis.co.uk",
    linkText: "Visit site",
    skills: ["HTML / CSS / Sass", "JS / jQuery", "Responsive", "Sketch / Photoshop"],
    imageSrc: "/assertis.webp",
    imageAlt: "Assertis screenshot on laptop",
    imageWidth: 1182,
    imageHeight: 646,
  },
  {
    title: "Gatwick Express",
    description: "iOS / Android app production design",
    linkUrl: "https://itunes.apple.com/us/app/gatwick-express/id1134559254?mt=8",
    linkText: "iTunes App Store",
    skills: ["Production Design", "Sketch / Photoshop", "Wireframing"],
    imageSrc: "/gex.webp",
    imageAlt: "Gatwick Express screenshot on phones",
    imageWidth: 1182,
    imageHeight: 646,
  },
  {
    title: "Caledonian Sleeper",
    description: "Front end development",
    linkUrl:
      "https://new.sleeper.scot/?origin=LON&destination=GLA&outDate=2019-12-12&railcards=&males=1&females=0&children=0&pets=0&cycles=0",
    linkText: "Visit site",
    skills: ["HTML / CSS / LESS", "React", "Responsive", "Sketch / Photoshop"],
    imageSrc: "/sleeper.webp",
    imageAlt: "Caledonian Sleeper screenshot on laptop and phone",
    imageWidth: 1162,
    imageHeight: 646,
  },
  {
    title: "Planar Network",
    description: "Front end build",
    linkUrl: "https://planar.network",
    linkText: "Visit site",
    skills: ["HTML / CSS / LESS", "JS / jQuery", "Responsive", "Sketch / Photoshop"],
    imageSrc: "/planar-network.webp",
    imageAlt: "Planar Network screenshot on tablet and phone",
    imageWidth: 1162,
    imageHeight: 646,
  },
  {
    title: "pa11y.org",
    description: "Core contributor",
    linkUrl: "http://pa11y.org/",
    linkText: "Visit site",
    skills: ["Front end contributor", "pa11y dashboard design", "pa11y dashboard build", "HTML / CSS / LESS / JS"],
    imageSrc: "/pa11y.webp",
    imageAlt: "Pa11y screenshot on laptop",
    imageWidth: 1162,
    imageHeight: 646,
  },
];

const buttonClasses =
  "py-[15px] inline-block border-2 border-blue-500 bg:transparent max-w-[160px] m-0 uppercase w-[48%] cursor-pointer font-bold transition-all duration-300 ease-linear hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white active:bg-blue-500 active:text-white";

export const CVSection = () => {
  const handlePrint = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.print();
  };

  return (
    <Section id="cv" title="CV">
      <>
        <div className="hidden print:block text-center">
          <p>
            Perry Harlock – UI Developer / Designer <br />
            web: www.perryharlock.co.uk <br />
            email: hi@perryharlock.co.uk
          </p>
        </div>
        <div className="container-auto">
          <div className="md:grid md:grid-cols-12 md:gap-4">
            <div className="md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
              <div className="text-center mt-[30px] mb-[65px] md:mb-[100px]">
                <AnimatedElement animationClass="fade-9-delay-2">
                  <p className="mb-4">
                    I'm a <span className="font-bold">Front-end of front-end</span> focused UI developer with over 10
                    years of experience.
                  </p>
                  <p className="mb-4">
                    I love <span className="font-bold">CSS</span> and also enjoy spending time in Sketch or Figma. I'm
                    into bringing designs to life in code and writing accessible, semantic and performant components /
                    pages.
                  </p>
                  <p className="mb-4 font-bold">
                    HTML(5), CSS(3), LESS, Sass, NextJS, Typescript, React, Figma, Sketch, Git, Agile
                  </p>
                </AnimatedElement>
                <AnimatedElement animationClass="fade-9-delay-4">
                  <div className="flex justify-between mt-[45px] mx-auto max-w-[400px] print:hidden">
                    <button onClick={(e) => handlePrint(e)} className={twMerge(buttonClasses, "js-print")}>
                      Print CV
                    </button>
                    <a className={buttonClasses} target="_blank" href="/docs/Perry-Harlock-CV.pdf">
                      Download CV
                    </a>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </div>
      </>
    </Section>
  );
};
