import type { Metadata } from 'next';
import { Sora, Space_Grotesk } from 'next/font/google';
import './globals.css';

const soraFont = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: 'variable',
});
const spaceGroteskFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: 'variable',
});

export const metadata: Metadata = {
  title: 'Spherium AI - Discover the Power of AI for Your Business',
  description:
    'Explore Spherium.ai, an advanced AI SaaS platform that delivers intelligent solutions to transform your business processes and elevate your operational success.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${soraFont.variable} ${spaceGroteskFont.variable} bg-gray-950 font-body text-gray-300 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
