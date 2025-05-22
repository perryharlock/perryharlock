import { twMerge } from "tailwind-merge";

export const Footer = () => {
  const socialClasses = ["text-center", "mb-[60px]", "max-w-[320px]", "mx-auto", "md:mb-[150px]", "md:max-w-none"];
  const linkClasses = [
    "w-[90px]",
    "h-[90px]",
    "block",
    "bg-no-repeat",
    "bg-center",
    "bg-[length:70%]",
    "transition-colors",
    "duration-300",
    "ease-linear",
    "clip-path-supported-h-100",
    "clip-hexagon",
    "hover:bg-yellow-500",
  ];

  return (
    <footer
      className="bg-blue-500 text-grey-900 relative pt-[120px] md:pt-[200px] pb-[20px] footer-top md:footer-top-md lg:footer-top-lg"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-24">
            <ul className={twMerge(socialClasses)}>
              <li className="mr-[25px] md:mr-[30px] inline-block">
                <a
                  className={twMerge(linkClasses, "bg-linkedin bg-[length:60%]")}
                  target="_blank"
                  rel="me noreferrer"
                  href="https://uk.linkedin.com/pub/perry-harlock/12/1b7/170"
                  title="Find out about me on LinkedIn"
                >
                  <span className="sr-only">LinkedIn</span>
                </a>
              </li>
              <li className="md:ml-[30px] inline-block">
                <a
                  className={twMerge(linkClasses, "bg-github")}
                  target="_blank"
                  rel="me noreferrer"
                  href="https://github.com/perryharlock"
                  title="Check me out on GitHub"
                >
                  <span className="sr-only">GitHub</span>
                </a>
              </li>
            </ul>
            <div className="text-center font-semibold">&copy; Perry Harlock, 2025</div>
          </div>
        </div>
      </div>
      <a
        href="#top"
        className="absolute hidden md:inline-block left-0 right-0 bottom-[100px] w-full h-[46px] bg-center bg-no-repeat bg-scroll-up animate-pulse"
      >
        <span className="sr-only">Click to jump to the top of this page</span>
      </a>
    </footer>
  );
};
