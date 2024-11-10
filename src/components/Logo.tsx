import logoImg from '@/assets/images/spherium-logo.svg?url';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Logo({
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        'size-10 bg-gray-200 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]',
        className
      )}
      style={{
        maskImage: `url(${logoImg.src})`,
        maskSize: 'contain',
        ...style,
      }}
      {...props}
    />
  );
}
