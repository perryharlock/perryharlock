"use client";
import { twMerge } from "tailwind-merge";
import { AnimatedElement } from "./Animated";
import { Section } from "./Section";
import { CVItem } from "./CVItem";

const cvItems = [
  {
    employer: "Hussle",
    role: "Senior Front End Developer",
    date: "Dec 2018 - present",
    linkUrl: "https://www.hussle.com",
    linkText: "www.hussle.com",
    description: [
      "I was responsible for overhauling the front end part of the legacy system to improve accessibility, HTML, perfomance, CSS (introduced BEM), responsiveness.",
      "I implemented a rebrand/redesign and created a component based design system in Figma from the page designs as a guide and reference for the engineering team to use and acted as go between from Design / Product to Engineering.",
      "I was involved in the migration of the legacy system to NextJS/Typescript/React and SASS adding new components to the ui-library which was becoming our central repository for our UI in Storybook.",
    ],
  },
  {
    employer: "Assertis",
    role: "UI Developer / Designer",
    date: "Mar 2015 - Dec 2018",
    linkUrl: "https://www.assertis.co.uk",
    linkText: "www.assertis.co.uk",
    description: [
      "I spent my days on UI design of websites and apps as well as front end web builds.",
      "I built and had involvement with the design of the company website www.assertis.co.uk and front end development of the new Caledonian Sleeper trains booking site. I was also responsible for the production design of the Gatwick Express App.",
      "I was part of the team that built the Train Ticket Purchasing system for ThamesLink, Southern, Southeastern, Gatwick Express and other major train operators.",
    ],
  },
  {
    employer: "Hirespace",
    role: "Front End Developer",
    date: "May 2014 - Mar 2015",
    linkUrl: "https://hirespace.com",
    linkText: "www.hirespace.com",
    description: [
      "I was responsible for re-designing and re-building the public facing web site, the Hire Space Blog site in addition to refining and adding functionality to the booking system used by customers.",
      "Making the site responsive and friendlier for smaller devices was one of my main tasks as well as improving performance.",
    ],
  },
  {
    employer: "Nature Publishing Group",
    role: "Front End Developer",
    date: "Dec 2012 - Apr 2014",
    linkUrl: "https://www.nature.com",
    linkText: "www.nature.com",
    description: [
      "My work consisted of front end design and development of an internal tool to give greater visibility of the huge amount of data being stored on the new triplestore.",
      "I was also responsible for the design and front end code for the accessibility tool pa11y.",
    ],
  },
  {
    employer: "BraveNewTalent",
    role: "Front End Developer",
    date: "Nov 2011 - Dec 2012",
    linkUrl: "https://www.bravenewtalent.com",
    linkText: "www.bravenewtalent.com",
    description: [
      "My initial responsibility was for the redesign and build of the Enterprise section of the site. Working from BDD’s and wireframes I coded the HTML and CSS.",
      "I then worked across the whole site ensuring that our HTML and CSS was clean, concise and well structured, utilising Less to make our CSS as modular and re-useable as possible and model it on the 'OO' methodology of CSS. From a design perspective I regularly created wireframes using Balsamiq and designs using Photoshop for new features being added to the site.",
    ],
  },
  {
    employer: "Assertis",
    role: "Front End Developer",
    date: "Mar 2011 - Nov 2011",
    linkUrl: "https://www.assertis.co.uk",
    linkText: "www.assertis.co.uk",
    description: [
      "Development of the front end for the MyTrainTicket site and other white label sites for third parties including Travel Supermarket and Northern Rail.",
      "Taking Photoshop / Fireworks designs and hand-coding XHTML, CSS (with a helping hand from Sass), XSLT, Javascript / jQuery.",
      "Responsible for molding the strategy of front end development practices including the choice of tools, standards and methods used within Assertis.",
      "My experience with Sass led to a case study I submitted being printed in the December issue of .net magazine in December 2011.",
    ],
  },
  {
    employer: "Eonic Ltd",
    role: "Front End Developer / Company Trainer",
    date: "Feb 2008 - Feb 2011",
    linkUrl: "https://www.eonic.co.uk",
    linkText: "www.eonic.co.uk",
    description: [
      "Responsible for developing W3C compliant websites from a layered PSD utilising XHTML, XSLT, CSS and jQuery / Javascript combined with an in-house developed CMS.",
      "Developed as company trainer responsible for training clients on the use of the in-house CMS and to give advice on best practices for updating their newly developed web sites.",
    ],
  },
  {
    employer: "Freelance",
    role: "Front End Developer / Web Designer",
    date: "Sep 2007 - present",
    linkUrl: "#portfolio",
    linkText: "My portfolio",
    description: [
      "I decided to master a more communications based technology and took a role as a Freelance Junior Web Developer with Positive Change Creations.",
      "I received basic training in .NET 2.0 and SQL Server 2005 and also completed work in HTML 4.0 (XHTML compliant) and CSS.",
      "It was at this time that I also started as a freelancer offering web sites to small businesses to gain experience and knowledge of XHTML, CSS and jQuery and to build a portfolio.",
      "I still provide front end development services to projects in my spare time which can be seen in my portfolio section of this site.",
    ],
  },
  {
    employer: "Various",
    role: "Various roles",
    date: "Before...",
    linkUrl: "#portfolio",
    linkText: "My portfolio",
    description: [
      "Various roles including HR Systems Support Analyst, IT Systems Support and just for a change Martial Arts Instructor.",
    ],
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
