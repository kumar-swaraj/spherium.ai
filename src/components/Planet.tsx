import { cva, type VariantProps } from 'class-variance-authority';

const planet = cva('rounded-full bg-gradient-to-b to-gray-950', {
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-6',
      lg: 'size-8',
    },
    mainColor: {
      violet: 'from-violet-400',
      teal: 'from-teal-400',
      fuchsia: 'from-fuchsia-400',
    },
  },
  defaultVariants: {
    size: 'lg',
    mainColor: 'violet',
  },
});

interface PlanetProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof planet> {}

export default function Planet({
  size,
  mainColor,
  className,
  ...props
}: PlanetProps) {
  return (
    <div className={planet({ size, mainColor, className })} {...props}></div>
  );
}
