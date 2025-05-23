"use client";
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export const AnimatedElement = ({
  animationClass = "fade-9",
  visibleClass = "will-animate",
  children,
}: {
  animationClass?: string;
  visibleClass?: string;
  children: React.ReactNode;
}) => {
  const { ref, isInView } = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    document.body.classList.remove("no-js");
  }, []);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div
      ref={ref}
      className={twMerge(
        visibleClass, // ensures visible for no-JS users
        hasAnimated ? animationClass : ""
      )}
    >
      {children}
    </div>
  );
};
