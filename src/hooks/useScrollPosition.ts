
import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      
      if (position > prevScrollPosition) {
        setScrollDirection('down');
      } else if (position < prevScrollPosition) {
        setScrollDirection('up');
      }
      
      setPrevScrollPosition(position);
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPosition]);

  return { scrollPosition, scrollDirection };
}
  