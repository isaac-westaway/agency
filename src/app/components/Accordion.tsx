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

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded p-2 cursor-pointer"
        >
          <div
            className="flex justify-between items-center"
            onClick={() => handleClick(index)}
          >
            <h3 className="text-lg font-medium">{item.title}</h3>
            <svg
              className={`w-4 h-4 transition-transform transform ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div
            className="overflow-hidden"
            style={{
              maxHeight: activeIndex === index ? '48px' : '0',
              transition: 'max-height 0.3s ease-out',
            }}
          >
            <div className="p-4 text-gray-700">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
