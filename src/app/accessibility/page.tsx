import type { Metadata } from 'next';
import { Grid, Column } from '@carbon/react';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'DSAAS accessibility statement and conformance information.',
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="dsaas-page-headline">
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            <p className="dsaas-eyebrow">Legal</p>
            <h1 className="cds--productive-heading-06">Accessibility Statement</h1>
          </Column>
        </Grid>
      </section>

      <section>
        <Grid fullWidth>
          <Column lg={{ span: 8, offset: 2 }} md={8} sm={4}>
            <div className="dsaas-legal-section">
              <p className="cds--body-long-02">
                This website is built on the Carbon Design System, an open-source component library
                developed to meet WCAG 2.2 AA. We have followed Carbon&apos;s accessibility
                guidance throughout, including for the typographic and layout choices specific to
                this site.
              </p>
            </div>

            <div className="dsaas-legal-section">
              <h2 className="cds--productive-heading-03">Conformance status</h2>
              <p className="cds--body-long-01">
                [State one of the following once verified: &ldquo;We believe this website conforms
                to WCAG 2.2 AA.&rdquo; / &ldquo;This website is partially conformant with WCAG 2.2
                AA. Known limitations are listed below.&rdquo;]
              </p>
            </div>

            <div className="dsaas-legal-section">
              <h2 className="cds--productive-heading-03">Known limitations</h2>
              <p className="cds--body-long-01">
                [List any, or state &ldquo;None known at the time of publication.&rdquo;]
              </p>
            </div>

            <div className="dsaas-legal-section">
              <h2 className="cds--productive-heading-03">Our approach</h2>
              <p className="cds--body-long-02">
                Accessibility is not something added to a design system afterwards. It is a property
                the system either has or does not, and the same standard applies to this site as to
                the systems we build for clients.
              </p>
            </div>

            <div className="dsaas-legal-section">
              <h2 className="cds--productive-heading-03">Contact</h2>
              <p className="cds--body-long-01">
                If you encounter an accessibility barrier on this site, contact [contact email
                address]. We aim to respond within [X] working days.
              </p>
            </div>

            <div className="dsaas-legal-meta">
              <p className="cds--body-short-01">Last reviewed: [date]</p>
            </div>
          </Column>
        </Grid>
      </section>
    </>
  );
}
