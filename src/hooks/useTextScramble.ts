import { useState, useEffect, useRef } from 'react';

const CHARS = '!<>-_\/[]{}—=+*^?#________';

export const useTextScramble = (phrases: string[], cycleDelay = 5000) => {
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    let iteration = 0;
    setIsDone(false);

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        phrase
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return phrase[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= phrase.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsDone(true);

        // Schedule next phrase after it's fully revealed
        timeoutRef.current = setTimeout(() => {
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, cycleDelay);
      }

      iteration += 1; // Faster resolution: 1 character per step
    }, 40); // Slightly slower interval for better readability during scramble

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [phraseIndex, phrases, cycleDelay]);

  return { displayText, isDone };
};
