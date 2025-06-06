import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { AnimatedElement } from "./Animated";

interface PortfolioItemProps {
  index: number;
  title: string;
  description: string;
  linkUrl: string;
  linkText: string;
  skills: string[];
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export const PortfolioItem = ({
  index,
  title,
  description,
  linkUrl,
  linkText,
  skills,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
}: PortfolioItemProps) => {
  const isEven = (index + 1) % 2 === 0;
  const evenClasses = isEven
    ? "before:bg-white before:top-[-8px] before:md:top-[34px] before:lg:top-[38px] bg-grey-100 py-[120px] md:py-[220px] lg:py-[260px] xl:py-[260px] text-right overflow-visible clip-portfolio md:clip-portfolio lg:clip-portfolio"
    : "";
  const isFirst = index === 0;
  const beforeContent = [
    "before:content-['']",
    "before:block",
    "before:mx-auto",
    "before:w-[50px]",
    "before:h-[50px]",
    "before:bg-grey-100",
    "before:absolute",
    "before:top-[-48px]",
    "before:md:top-[-90px]",
    "before:lg:top-[-95px]",
    "before:left-[50%]",
    "before:z-5",
    "before:rotate-[41deg]",
    "before:md:rotate-[36deg]",
    "before:lg:rotate-[38deg]",
    "before:ml-[-25px]",
  ];

  return (
    <li
      className={twMerge(
        "pt-[60px] pb-[80px] leading-[1rem] relative lg:text-left lg:pt-[100px] xl:py-[140px]",
        isFirst && "pt-[30px] md:pt-0 lg:pt-[30px] xl:pt-[60px]",
        !isFirst && beforeContent,
        evenClasses
      )}
    >
      <div className="container-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-4">
          <div
            className={twMerge(
              "text-center",
              isEven ? "lg:col-start-7 lg:text-right" : "lg:text-left",
              "row-start-1 lg:col-span-6"
            )}
          >
            <AnimatedElement animationClass={`fade-9 ${isEven ? "lg:fade-in-right" : "lg:fade-in-left"}`}>
              <h4 className="text-[38px] uppercase mb-[10px] md:text-[45px] md:mb-[20px] font-bold leading-[38px] md:leading-[45px]">
                {title}
              </h4>
              <h5 className="italic text-[24px] mb-[10px] leading-[24px]">{description}</h5>
              <a
                className="text-[16px] font-semibold uppercase no-underline inline-block border-2 border-primary text-blue-500 px-[25px] py-[15px] my-[10px] mt-[10px] mb-[20px] transition-all duration-300 ease-linear hover:bg-blue-500 hover:text-white hover:no-underline md:my-[20px] md:mb-[30px]"
                href={linkUrl}
                target="_blank"
                rel="noreferrer"
              >
                {linkText}
              </a>
              <ul
                className={twMerge(
                  "text-[16px] leading-[1.5] text-blue-700 uppercase mx-auto mb-[30px] mt-0 lg:m-0 lg:text-[18px]",
                  isEven && "lg:m-0 lg:ml-auto"
                )}
              >
                {skills.map((skill, index) => (
                  <li key={index} className="m-0 mb-[5px] md:mb-[10px]">
                    {skill}
                  </li>
                ))}
              </ul>
            </AnimatedElement>
          </div>
          <div className={twMerge(isEven && "lg:col-start-1 lg:m-0 lg:ml-auto", "row-start-1 lg:col-span-6")}>
            <AnimatedElement animationClass={`fade-9 ${isEven ? "lg:fade-in-left" : "lg:fade-in-right"}`}>
              <Image
                src={imageSrc}
                height={imageHeight}
                width={imageWidth}
                className="img-responsive lazy"
                alt={imageAlt}
                unoptimized
              />
            </AnimatedElement>
          </div>
        </div>
      </div>
    </li>
  );
};
