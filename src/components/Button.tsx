import React, { PropsWithChildren } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

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
  className,
  variant,
  block,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button className={button({ block, variant, className })} {...props}>
      {children}
    </button>
  );
}
