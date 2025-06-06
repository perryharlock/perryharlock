import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { AnimatedElement } from "./Animated";

export const Hero = () => {
  return (
    <section className="hero print:hidden bg-blue-500 text-center md:text-left h-[420px] md:h-[765px] overflow-hidden relative bottom-clip md:bottom-clip-md lg:bottom-clip-lg">
      <div className="container-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-9 xl:col-span-7">
            <AnimatedElement animationClass="fade-9">
              <h1
                className={twMerge(
                  "text-[52px] text-white leading-[52px] md:leading-[110px] mb-[30px] pt-[30px] md:text-[110px] md:mb-[70px] md:pt-[70px] lg:mb-[70px] lg:pt-[120px] font-bold"
                )}
              >
                Hi, I&apos;m <span className="text-yellow-500">Perry</span>
              </h1>
            </AnimatedElement>

            <AnimatedElement animationClass="fade-9-delay-2">
              <h2 className="animated font-bold text-white leading-[27px] max-w-[375px] mx-auto md:text-[24px] md:leading-[36px] md:pr-[150px] md:max-w-none lg:pr-[190px] xl:pr-[150px] 2xl:pr-[210px]">
                I&apos;m a <span className="text-yellow-500">UI Developer</span> working in London. I{" "}
                <span className="text-yellow-500">design</span> and <span className="text-yellow-500">develop</span> for
                web and specialise in <span className="text-yellow-500">CSS</span>,{" "}
                <span className="text-yellow-500">HTML</span> and{" "}
                <span className="text-yellow-500">Responsive Design.</span> <br />
                <br />
                Did I mention I love <span className="text-yellow-500">CSS</span>?
              </h2>
            </AnimatedElement>
          </div>
        </div>
      </div>

      <AnimatedElement animationClass="fade-9">
        <figure className="animated hero__image absolute right-[-40px] bottom-[-155px] w-[310px] z-10 md:w-3/5 md:right-[-65px] md:bottom-0 lg:w-[675px] xl:right-[-15px]">
          <Image
            height="674"
            width="689"
            src="/perry.webp"
            className="w-full"
            alt="A smiling Perry Harlock!"
            loading="eager"
            priority
            unoptimized
          />
        </figure>
      </AnimatedElement>

      <a
        href="#portfolio"
        className="absolute hidden md:inline-block left-0 right-0 bottom-[130px] w-full h-[46px] bg-center bg-no-repeat bg-scroll-down animate-pulse"
      >
        <span className="sr-only">Click to jump to the portfolio section</span>
      </a>
    </section>
  );
};
