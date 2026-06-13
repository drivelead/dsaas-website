import type { Metadata } from 'next';
import { Grid, Column } from '@carbon/react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'DSAAS was founded on a simple observation: brand identity is rarely the problem. Its application is.',
};

export default function AboutPage() {
  return (
    <>
      <section className="dsaas-page-headline">
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            <p className="dsaas-eyebrow">About</p>
            <h1 className="cds--productive-heading-07">DSAAS</h1>
          </Column>
        </Grid>
      </section>

      <section className="dsaas-body-section">
        <Grid fullWidth>
          <Column lg={{ span: 8, offset: 2 }} md={8} sm={4}>
            <p className="cds--body-long-02">
              DSAAS was founded on a simple observation: brand identity is rarely the problem. Its
              application is.
            </p>
            <p className="cds--body-long-02">
              We work with organisations whose brand must hold its shape across departments, vendors,
              and platforms, without becoming a constraint on any of them.
            </p>

            <div className="dsaas-about-footnote">
              <p className="dsaas-footnote-label">Note</p>
              <p className="cds--body-short-01">
                The name DSAAS began as a description of how we work: design systems, as a service.
                It has since become simply a name.
              </p>
            </div>
          </Column>
        </Grid>
      </section>
    </>
  );
}
