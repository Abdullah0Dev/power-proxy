import React, { ReactNode } from "react";

type SectionProps = {
  className?: string;
  id?: string;
  crosses?: string;
  crossesOffset?: string;
  customPaddings?: string;
  children: ReactNode;
};
const Section: React.FC<SectionProps> = ({
  className,
  id,
  crosses,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Section;
