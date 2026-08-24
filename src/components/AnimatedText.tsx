import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface AnimatedWordProps {
  word: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}

const AnimatedWord = ({ word, index, total, scrollYProgress }: AnimatedWordProps) => {
  const progress = useTransform(
    scrollYProgress,
    [0, 1],
    [
      Math.max(0, index / total),
      Math.min(1, (index + 1) / total),
    ]
  );

  const opacity = useTransform(progress, [0, 1], [0.2, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block"
    >
      {word}
    </motion.span>
  );
};

const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.trim().split(/\s+/);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  return (
    <p
      ref={ref}
      className={`relative ${className}`}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <AnimatedWord
            word={word}
            index={index}
            total={words.length}
            scrollYProgress={scrollYProgress}
          />
          {index < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </p>
  );
};

export default AnimatedText;
