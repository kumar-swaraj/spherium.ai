'use client';

import Button from '@/components/Button';
import Logo from '@/components/Logo';
import Orbit from '@/components/Orbit';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const navItems = [
  {
    name: 'Features',
    href: '#features',
  },
  {
    name: 'Pricing',
    href: '#pricing',
  },
  {
    name: 'Testimonials',
    href: '#testimonials',
  },
];

const loginItems = [
  {
    buttonVariant: 'tertiary',
    name: 'Login',
    href: '#login',
  },
  {
    buttonVariant: 'primary',
    name: 'Sign Up',
    href: '#sign-up',
  },
] satisfies {
  buttonVariant: 'primary' | 'secondary' | 'tertiary';
  name: string;
  href: string;
}[];

export default function Header() {
  const router = useRouter();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <header className="relative z-40 border-b border-[var(--color-border)]">
        <div className="container">
          <div className="flex h-18 items-center justify-between lg:h-20">
            <div className="flex items-center gap-4">
              <Logo />
              <div className="text-2xl font-extrabold">spherium.ai</div>
            </div>
            <div className="hidden h-full lg:block">
              <nav className="h-full">
                {navItems.map(({ name, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="relative inline-flex h-full items-center px-10 text-xs font-bold uppercase tracking-widest text-gray-400 before:absolute before:bottom-0 before:left-0 before:h-2 before:w-px before:bg-gray-200/20 before:content-[''] last:after:absolute last:after:bottom-0 last:after:right-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:content-['']"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="hidden gap-4 lg:flex">
              {loginItems.map(({ buttonVariant, href, name }) => (
                <Button
                  key={href}
                  variant={buttonVariant}
                  onClick={() => router.push(href)}
                >
                  {name}
                </Button>
              ))}
            </div>
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileNavOpen((open) => !open)}
                className="relative size-10 rounded-lg border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]"
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span
                    className={twMerge(
                      'block h-0.5 w-4 -translate-y-1 bg-gray-100 transition duration-300',
                      isMobileNavOpen && 'translate-y-0 rotate-45'
                    )}
                  ></span>
                </span>
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span
                    className={twMerge(
                      'block h-0.5 w-4 translate-y-1 bg-gray-100 transition duration-300',
                      isMobileNavOpen && 'translate-y-0 -rotate-45'
                    )}
                  ></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isMobileNavOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-18 z-30 overflow-hidden bg-gray-950">
          <div className="absolute-center isolate -z-10">
            <Orbit />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[350px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[500px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[650px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[800px]" />
          </div>
          <div className="container h-full">
            <nav className="flex h-full flex-col items-center justify-center gap-4 py-8">
              {navItems.map(({ href, name }) => (
                <Link
                  key={name}
                  href={href}
                  className="h-10 text-xs font-bold uppercase tracking-widest text-gray-400"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(href);
                    if (element) {
                      setIsMobileNavOpen(false);
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {name}
                </Link>
              ))}

              {loginItems.map(({ buttonVariant, href, name }) => (
                <Button
                  key={name}
                  block={true}
                  variant={buttonVariant}
                  className="max-w-xs"
                  onClick={() => router.push(`/${href}`)}
                >
                  {name}
                </Button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
