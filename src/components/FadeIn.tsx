import { motion } from 'framer-motion';
import { useMemo } from 'react';
import type { ElementType, ReactNode } from 'react';

interface FadeInProps {
  children?: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  [key: string]: unknown;
}

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className = '',
  ...rest
}: FadeInProps) => {
  // Keep the motion component stable between renders.
  // Creating a new motion component on every render causes React to
  // remount the wrapper, which makes inputs inside it lose focus and
  // visibly disappear/reappear on every keystroke.
  const MotionComponent = useMemo(() => motion.create(as), [as]);

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};

export default FadeIn;
