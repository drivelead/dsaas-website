import type { Metadata } from 'next';
import { Open_Sans, JetBrains_Mono, Domine } from 'next/font/google';
import './globals.scss';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const domine = Domine({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-domine',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'DSAAS',
    template: '%s | DSAAS',
  },
  description:
    'Brand consistency, governed at scale. DSAAS defines the standard and keeps it, regardless of who builds, or what they build it in.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${jetbrainsMono.variable} ${domine.variable}`}
    >
      <body data-carbon-theme="g100">
        <SiteHeader />
        <main className="dsaas-page">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
