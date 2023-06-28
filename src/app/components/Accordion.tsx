"use client";

import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
  contentClassName?: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const handleClick = (index: number) => {
    setActiveIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter((i) => i !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isActive = activeIndices.includes(index);

    return (
      <div
        key={index}
        className={`border border-gray-300 rounded-2xl p-2 cursor-pointer ${
          isActive ? "bg-black" : ""
        }`}
      >
        <div
          className="flex justify-between items-center"
          onClick={() => handleClick(index)}
        >
          <h3
            className={`text-lg sm:text-md font-medium py-4 px-4 ${
              isActive ? "text-[#4463e2]" : "text-white"
            }`}
          >
            {item.title}
          </h3>
          <svg
            className={`w-4 h-4 shrink-0 transition-transform transform ${
              isActive ? "rotate-180" : ""
            }`}
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div
          className={`overflow-hidden transition-all duration-[1200ms] ease-in-out ${
            isActive ? "max-h-[1000px]" : "max-h-0"
          }`}
          style={{ pointerEvents: isActive ? "auto" : "none" }}
        >
          <div
            className={`mx-4 py-4 border-t-[1px] text-white cursor-text ${
              item.contentClassName || ""
            }`}
          >
            {item.content}
          </div>
        </div>
      </div>
    );
  });

  return <div className="space-y-2 mb-4">{renderedItems}</div>;
};

export default Accordion;
