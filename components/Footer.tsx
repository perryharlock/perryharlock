import { twMerge } from "tailwind-merge";

export const Footer = () => {
  const links = [
    {
      href: "https://uk.linkedin.com/pub/perry-harlock/12/1b7/170",
      text: "LinkedIn",
      title: "Find out about me on LinkedIn",
    },
    {
      href: "https://github.com/perryharlock",
      text: "GitHub",
      title: "Check me out on GitHub",
    },
  ];

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-24">
            <ul className="list-inline footer__social">
              {links.map((link) => (
                <li key={link.text}>
                  <a
                    className={twMerge("footer__link", `footer__link--${link.text.toLowerCase()}`)}
                    target="_blank"
                    rel="me noreferrer"
                    href={link.href}
                    title={link.title}
                  >
                    <span className="sr-only">{link.text}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  className="footer__link footer__link--linkedin"
                  target="_blank"
                  rel="me noreferrer"
                  href="https://uk.linkedin.com/pub/perry-harlock/12/1b7/170"
                  title="Find out about me on LinkedIn"
                >
                  <span className="sr-only">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  className="footer__link footer__link--github"
                  target="_blank"
                  rel="me noreferrer"
                  href="https://github.com/perryharlock"
                  title="Check me out on GitHub"
                >
                  <span className="sr-only">GitHub</span>
                </a>
              </li>
            </ul>
            <div className="text-center font-semi">&copy; Perry Harlock, 2025</div>
          </div>
        </div>
      </div>
      <a href="#top" className="footer__scroll js-nav__link hidden-xs">
        <span className="sr-only">Click to jump to the top of this page</span>
      </a>
    </footer>
  );
};
