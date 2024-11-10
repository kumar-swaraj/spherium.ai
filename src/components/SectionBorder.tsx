import React from 'react';
import { twMerge } from 'tailwind-merge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function SectionBorder({
  borderTop,
  children,
  className,
  ...props
}: { borderTop?: boolean } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        'relative border-l border-r border-[var(--color-border)]',
        borderTop && 'border-t',
        className
      )}
      {...props}
    >
      {borderTop && (
        <>
          <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faPlus} className="size-4 text-gray-200" />
          </div>
          <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2">
            <FontAwesomeIcon icon={faPlus} className="size-4 text-gray-200" />
          </div>
        </>
      )}
      {children}
    </div>
  );
}
