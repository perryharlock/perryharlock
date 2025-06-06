import { AnchorHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href' | 'target' | 'rel'
> & {
  linkText: string;
  classNames?: string;
};

export const Button = ({
  linkText,
  classNames,
  href,
  target,
  rel,
}: ButtonProps) => {
  const commonClasses = [
    `inline-block uppercase font-bold text-grey-900`,
    `px-[30px] py-[15px]`,
    `border-2 border-blue-500 bg:transparent`,
    `transition-all duration-300 ease-linear`,
    `hover:bg-blue-500 hover:text-white`,
    `focus:bg-blue-500 focus:text-white`,
    `active:bg-blue-500 active:text-white`,
  ];

  return (
    <a
      className={twMerge(commonClasses, classNames)}
      href={href}
      target={target}
      rel={rel}
    >
      {linkText}
    </a>
  );
};
