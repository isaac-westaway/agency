"use client"

import { useEffect, useState } from 'react';

interface TypedTextProps {
  texts: string[];
  typingDelay?: number;
  erasingDelay?: number;
  loop?: boolean;
}

const TypedText: React.FC<TypedTextProps> = ({
  texts,
  typingDelay = 100,
  erasingDelay = 50,
  loop = false,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedString, setTypedString] = useState('');

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const typeText = (index: number) => {
      if (index === texts[currentTextIndex].length) {
        // Finished typing
        if (loop || currentTextIndex === texts.length - 1) {
          timeout = setTimeout(() => {
            eraseText(texts[currentTextIndex].length);
          }, typingDelay);
        }
        return;
      }

      timeout = setTimeout(() => {
        setTypedString((prevTypedString) => prevTypedString + texts[currentTextIndex][index]);
        typeText(index + 1);
      }, typingDelay);
    };

    const eraseText = (index: number) => {
      if (index === 0) {
        // Finished erasing
        setCurrentTextIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
        timeout = setTimeout(() => {
          typeText(0);
        }, typingDelay);
        return;
      }

      timeout = setTimeout(() => {
        setTypedString((prevTypedString) => prevTypedString.slice(0, -1));
        eraseText(index - 1);
      }, erasingDelay);
    };

    timeout = setTimeout(() => {
      typeText(0);
    }, typingDelay);

    return () => {
      clearTimeout(timeout);
    };
  }, [texts, typingDelay, erasingDelay, loop, currentTextIndex]);

  return <span>{typedString}</span>;
};

export default TypedText;
