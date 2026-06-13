import Link from 'next/link';
import { Grid, Column } from '@carbon/react';

const mainNav = [
  { href: '/approach', label: 'Approach' },
  { href: '/perspective', label: 'Perspective' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const legalNav = [
  { href: '/terms', label: 'Terms of Use' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/accessibility', label: 'Accessibility Statement' },
  { href: '/ai-policy', label: 'AI Policy' },
  { href: '/ethical-sourcing', label: 'Ethical Sourcing and Modern Slavery' },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="dsaas-footer">
      <Grid fullWidth>
        <Column lg={8} md={4} sm={4}>
          <p className="dsaas-footer__text">DSAAS &copy; {year}</p>
        </Column>
        <Column lg={8} md={4} sm={4}>
          <nav aria-label="Footer navigation">
            <ul className="dsaas-footer__nav">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </Column>
        <Column lg={16} md={8} sm={4}>
          <div className="dsaas-footer__legal-row">
            <nav aria-label="Legal and policy pages">
              <ul className="dsaas-footer__legal-nav">
                {legalNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Column>
      </Grid>
    </footer>
  );
}
