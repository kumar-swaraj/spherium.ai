'use client';
import React, { useEffect, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';

const button = cva(
  'text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg',
  {
    variants: {
      block: {
        true: 'w-full',
      },
      variant: {
        primary: 'border-gradient',
        secondary: 'bg-gray-100 text-gray-950',
        tertiary: 'bg-gray-800 text-gray-200',
      },
    },
    defaultVariants: {
      variant: 'primary',
      block: false,
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export default function Button({
  block = false,
  variant = 'primary',
  className,
  children,
  // ...props
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const angle = useMotionValue(45);
  const background = useMotionTemplate`
    linear-gradient(var(--color-gray-950),var(--color-gray-950)) padding-box, conic-gradient(from ${angle}deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400)) border-box
  `;

  useEffect(() => {
    if (isHovered) {
      animate(angle, angle.get() + 360, {
        duration: 1,
        ease: 'linear',
        repeat: Infinity,
      });
    } else {
      animate(angle, 45, { duration: 0.5 });
    }
  }, [isHovered, angle]);

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={button({ block, variant, className })}
      style={variant === 'primary' ? { background } : undefined}
      // {...props}
    >
      {children}
    </motion.button>
  );
}

// ...props ---> raising some type issues while using it with motion.button
