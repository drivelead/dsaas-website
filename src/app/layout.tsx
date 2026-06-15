import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { JetBrains_Mono, Domine } from 'next/font/google';
import './globals.scss';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

const roobert = localFont({
  src: [
    { path: '../../public/fonts/Roobert-TRIAL-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Roobert-TRIAL-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Roobert-TRIAL-SemiBold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-roobert',
  display: 'swap',
});

const roobertMono = localFont({
  src: [
    { path: '../../public/fonts/RoobertMono-TRIAL-HeavyItalic.woff2', weight: '900', style: 'italic' },
  ],
  variable: '--font-roobert-mono',
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
      className={`${roobert.variable} ${roobertMono.variable} ${jetbrainsMono.variable} ${domine.variable}`}
    >
      <body data-carbon-theme="g100">
        <SiteHeader />
        <main className="dsaas-page">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
