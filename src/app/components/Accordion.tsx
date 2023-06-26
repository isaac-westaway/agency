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
        className={`border border-gray-300 rounded p-2 cursor-pointer ${
          isActive ? 'bg-black' : ''
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
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isActive ? 'max-h-48' : 'max-h-0'
          }`}
          style={{ pointerEvents: isActive ? 'auto' : 'none' }}
        >
          <div className="p-4 text-gray-700">{item.content}</div>
        </div>
      </div>
    );
  });

  return <div className="space-y-2">{renderedItems}</div>;
};

export default Accordion;
