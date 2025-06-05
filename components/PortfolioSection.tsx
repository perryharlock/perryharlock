import { PortfolioItem } from "./PortfolioItem";
import { Section } from "./Section";

const portfolioItems = [
  {
    title: "Norton Studios",
    description: "Front end build",
    linkUrl: "https://www.norton-studios.co.uk",
    linkText: "Visit site",
    skills: ["NextJS / Typescript", "Tailwind CSS", "Responsive", "Figma"],
    imageSrc: "/norton-studios.webp",
    imageAlt: "Norton studios screenshot on laptop and phone",
    imageWidth: 1167,
    imageHeight: 671,
  },
  {
    title: "Benebox",
    description: "Front end build",
    linkUrl: "https://www.joinbenebox.com",
    linkText: "Visit site",
    skills: ["NextJS / Typescript", "Tailwind CSS", "Responsive", "Figma"],
    imageSrc: "/benebox.webp",
    imageAlt: "Benebox screenshot on laptop and phone",
    imageWidth: 1167,
    imageHeight: 671,
  },
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

export const PortfolioSection = () => {
  return (
    <Section id="portfolio" title="Portfolio" classNames="print:hidden">
      <ul>
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} {...{ ...item, index }} />
        ))}
      </ul>
    </Section>
  );
};
