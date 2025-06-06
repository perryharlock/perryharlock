import { twMerge } from "tailwind-merge";
import { AnimatedElement } from "./Animated";

interface CVItemProps {
  index: number;
  employer: string;
  role: string;
  date: string;
  linkUrl: string;
  linkText: string;
  description: string[];
  isLast?: boolean;
}

export const CVItem = ({ index, employer, role, date, linkUrl, linkText, description, isLast }: CVItemProps) => {
  const isEven = (index + 1) % 2 === 0;
  const isFirst = index === 0;

  return (
    <li className={twMerge("relative my-[120px] md:my-[160px]", isFirst && "mt-0 md:mt-0", isLast && "!mb-0")}>
      <div className="container">
        <div className="md:grid md:grid-cols-12 md:gap-4">
          <AnimatedElement
            animationClass="fade-9-delay-2"
            classes="absolute top-[-24px] left-[50%] -translate-x-1/2 z-10 md:top-[7px]"
          >
            <span className="inline-block bg-grey-500 rotate-45 w-[50px] h-[50px] border-3 border-white" />
          </AnimatedElement>

          <AnimatedElement
            animationClass={twMerge(
              "fade-9-delay-2",
              isEven ? "md:fade-in-right-11-delay-2" : "md:fade-in-left-11-delay-2"
            )}
            classes={twMerge(
              "row-start-1 relative bg-grey-100 py-[45px] px-[15px] text-center md:py-[15px] md:px-[25px] md:text-left before:content-[''] before:top-[24px] before:h-0 before:w-0 before:absolute before:border-8 before:border-transparent",
              isEven
                ? "md:col-start-7 md:col-span-6 md:ml-10 before:left-[-14px] before:right-auto before:border-r-grey-100"
                : "md:col-span-6 md:mr-10 before:left-full before:border-l-grey-100"
            )}
          >
            <>
              <h4 className="text-[30px] text-blue-600 leading-[30px] font-bold mt-[10px] mb-[5px] md:text-[22px] md:m-0 md:mb-[10px]">
                {employer}
              </h4>
              <h5 className="m-0 font-bold md:mt-[10px] md:hidden">{role}</h5>
              <h6 className="md:hidden text-[16px] leading-[16px] my-[5px] font-semibold text-grey-800 md:text-[22px] md:leading-[30px] md:mt-0 md:text-blue-500">
                {date}
              </h6>
              <a
                className="text-[16px] text-blue-700 hover:text-blue-500 active:text-blue-500 focus:text-blue-500 md:hidden"
                href={linkUrl}
                target="_blank"
                rel="noreferrer"
              >
                {linkText}
              </a>
              {description.map((desc, i) => (
                <p key={i} className="mt-[20px] leading-[26px] md:text-[16px] md:leading-[32px]">
                  {desc}
                </p>
              ))}
            </>
          </AnimatedElement>

          <AnimatedElement
            animationClass={twMerge(isEven ? "md:fade-in-left-11" : "md:fade-in-right-11")}
            classes={twMerge(
              "row-start-1 mt-[17px] hidden md:block print:hidden",
              isEven ? "md:col-start-1 md:col-span-6 md:ml-auto md:mr-10 text-right" : "md:col-span-6 md:ml-10"
            )}
          >
            <>
              <h5 className="text-[16px] leading-[16px] my-[5px] font-semibold text-grey-800 md:text-[22px] md:leading-[30px] md:mt-0 md:text-blue-500">
                {date}
              </h5>
              <h6 className="m-0 font-bold md:mt-[6px]">{role}</h6>
              <a
                className="text-[16px] text-blue-700 hover:text-blue-500 active:text-blue-500 focus:text-blue-500"
                href={linkUrl}
                target="_blank"
                rel="noreferrer"
              >
                {linkText}
              </a>
            </>
          </AnimatedElement>
        </div>
      </div>
    </li>
  );
};
