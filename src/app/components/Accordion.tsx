"use client"

import { useState } from 'react';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const renderedItems = items.map((item, index) => {
    const isActive = activeIndex === index;

    return (
      <div
        key={index}
        className={`border border-gray-300 rounded p-2 cursor-pointer ${
          isActive ? 'active' : ''
        }`}
        onClick={() => handleClick(index)}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">{item.title}</h3>
          <svg
            className={`w-4 h-4 transition-transform transform ${
              isActive ? 'rotate-180' : ''
            }`}
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {isActive && (
          <div className="overflow-hidden">
            <div className="p-4 text-gray-700">{item.content}</div>
          </div>
        )}
      </div>
    );
  });

  return <div className="space-y-2">{renderedItems}</div>;
};

export default Accordion;
