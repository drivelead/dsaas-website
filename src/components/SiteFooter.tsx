import Link from 'next/link';
import { Grid, Column } from '@carbon/react';

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
              <li>
                <Link href="/approach">Approach</Link>
              </li>
              <li>
                <Link href="/perspective">Perspective</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </Column>
      </Grid>
    </footer>
  );
}
