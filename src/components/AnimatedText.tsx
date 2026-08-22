import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const characters = text.split('');

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  return (
    <p ref={ref} className={`relative ${className}`}>
      {characters.map((_, index) => (
        <span key={index} className="invisible">
          {text[index]}
        </span>
      ))}
      <span className="absolute inset-0 flex flex-wrap">
        {characters.map((char, index) => {
          const progress = useTransform(
            scrollYProgress,
            [0, 1],
            [
              Math.max(0.2, index / characters.length),
              Math.min(1, (index + 1) / characters.length),
            ]
          );
          const opacity = useTransform(progress, [0, 1], [0.2, 1]);

          return (
            <motion.span
              key={index}
              style={{ opacity }}
            >
              {char}
            </motion.span>
          );
        })}
      </span>
    </p>
  );
};

export default AnimatedText;
