'use client';
import {
  faDiscord,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

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
  {
    name: 'Login',
    href: '#',
  },
];

const socialLinks = [
  {
    name: 'Youtube',
    icon: faYoutube,
    href: '#',
  },
  {
    name: 'X',
    icon: faXTwitter,
    href: '#',
  },
  {
    name: 'Discord',
    icon: faDiscord,
    href: '#',
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container py-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <div className="text-2xl font-extrabold">spherium.ai</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-bold uppercase tracking-widest text-gray-400"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-16 flex flex-col items-center gap-8 md:flex-row-reverse md:justify-between">
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-gray-900">
                  <FontAwesomeIcon icon={link.icon} className="size-4" />
                </span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            &copy; Spherium Inc, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
