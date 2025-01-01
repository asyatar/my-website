// src/components/TypingEffect.js
'use client';

import { useEffect, useState } from 'react';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const fullText = "Hello, I'm Asya!";  // The text that will be typed out

  useEffect(() => {
    let index = 0;  // Start from the first character
    const interval = setInterval(() => {
      // Only update the text when the next character is available
      setText((prev) => {
        if (index < fullText.length) {
          return prev + fullText.charAt(index);
        }
        return prev;  // Do nothing once we reach the end of the text
      });
      index += 1;
      if (index === fullText.length) {
        clearInterval(interval);  // Stop the interval once all characters are typed
      }
    }, 100);  // Adjust speed of typing by changing this value

    return () => clearInterval(interval);  // Clean up on component unmount
  }, [fullText]);

  return (
    <h1 className="text-4xl font-bold">{text}</h1>
  );
};

export default TypingEffect;
