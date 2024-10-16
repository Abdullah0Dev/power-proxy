import { useState, useRef } from "react";
import { down } from "../assets";

export default function Accordion({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Function to handle toggle and close other accordions
  const toggleAccordion = () => {
    setIsActive((prev) => !prev);
  };

  const minuSign = (
    <img
      src={down}
      className={`w-4 object-cover h-4 transition-transform duration-300 ${
        isActive ? "rotate-180" : ""
      }`}
      alt="minus sign"
    />
  );

  const pluSign = (
    <img
      src={down}
      className={`w-4 object-cover h-4 transition-transform duration-300 ${
        isActive ? "hidden" : ""
      }`}
      alt="plus sign"
    />
  );

  return (
    <div className="shadow p-4 max-sm:mx-6 border border-secondary rounded-xl">
      <div
        className="flex gap-5 items-center select-none cursor-pointer justify-between"
        onClick={toggleAccordion}
      >
        <h1 className="text-black font-bold text-lg transition-all     duration-300 max-sm:text-base">
          {title}
        </h1>
        <div>{isActive ? minuSign : pluSign}</div>
      </div>
      <div
        ref={contentRef}
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isActive ? "max-h-40" : "max-h-0"
        }`}
        style={{
          maxHeight: isActive ? `${contentRef.current?.scrollHeight}px` : "0",
        }}
      >
        <p className="font-400 text-base mt-3 text-black/70 opacity-80 leading-normal max-w-[800px] transition-opacity duration-500">
          {content}
        </p>
      </div>
    </div>
  );
}
