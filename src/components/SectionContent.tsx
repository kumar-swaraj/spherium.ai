import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function SectionContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        'container overflow-hidden py-24 md:py-36 lg:py-48',
        className
      )}
      {...props}
    />
  );
}
