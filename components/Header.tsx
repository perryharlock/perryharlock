import { twMerge } from "tailwind-merge";

export const Header = () => {
  const menuItems = [
    {
      label: "Portfolio",
      url: "#portfolio",
    },
    {
      label: "CV",
      url: "#cv",
    },
    {
      label: "Kind words",
      url: "#testimonials",
    },
    {
      label: "Contact",
      url: "#contact",
    },
  ];

  const linkClasses = twMerge([
    "transition-colors",
    "duration-200",
    "ease-linear",
    "cursor-pointer",
    "font-bold",
    "uppercase",
    "py-[10px]",
    "px-0",
    "border-2",
    "border-transparent",
    "text-white",
    "text-[16px]",
    "md:text-[22px]",
    "hover:border-b-yellow-500",
    "hover:text-yellow-500",
    "active:text-yellow-500",
    "focus:text-yellow-500",
    "active:border-dashed",
    "active:border-2",
    "active:border-yellow-500",
    "focus:border-b-yellow-500",
    "focus:border-2",
  ]);

  const lastItem = menuItems.length;

  return (
    <header id="top" className="py-[15px] pb-0 md:py-[40px] md:pb-0 bg-blue-500">
      <div className="container-auto md:flex md:justify-between">
        <img
          className="block w-[50px] h-[46px] my-0 mx-auto md:w-[70px] md:h-[65px] md:inline-block md:m-0"
          src="/logo.svg"
          alt="Perry Harlock logo"
        />

        <nav className="text-center mt-[30px] md:mt-[10px]">
          <ul className="pl-0 list-none m-0 md:ml-[-5px]">
            {menuItems.map((item, i) => (
              <li
                key={item.label}
                className={twMerge(
                  "nav__item inline-block pl-[5px] pr-[5px] mx-[5px] md:mx-[20px]",
                  lastItem === i + 1 && "mr-0 md:mr-0",
                  i === 0 && "ml-0"
                )}
              >
                <a href={item.url} className={linkClasses}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
