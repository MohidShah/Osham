'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  className?: string;
}

export function TypewriterEffect({ text, speed = 100, className }: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let i = 0;
    // Reset completion state when text changes
    setIsCompleted(false);
    setDisplayedText('');
    
    const intervalId = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
        setIsCompleted(true);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <span className={cn(className)}>
      {displayedText}
      {!isCompleted && <span className="animate-blink border-r-2 border-primary" aria-hidden="true"></span>}
    </span>
  );
}
