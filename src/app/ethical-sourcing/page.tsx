import type { Metadata } from 'next';
import { Grid, Column } from '@carbon/react';

export const metadata: Metadata = {
  title: 'Ethical Sourcing and Modern Slavery Statement',
  description:
    "DSAAS's position on modern slavery and fair labour practices, published voluntarily and reviewed annually.",
};

export default function EthicalSourcingPage() {
  return (
    <>
      <section className="dsaas-page-headline">
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            <p className="dsaas-eyebrow">Legal</p>
            <h1 className="cds--productive-heading-06">
              Ethical Sourcing and Modern Slavery Statement
            </h1>
          </Column>
        </Grid>
      </section>

      <section>
        <Grid fullWidth>
          <Column lg={{ span: 8, offset: 2 }} md={8} sm={4}>
            <div className="dsaas-legal-section">
              <p className="cds--body-long-02">
                This statement sets out DSAAS&apos;s position on modern slavery and fair labour
                practices. It is published voluntarily and reviewed annually, in addition to any
                obligations that may apply to our business under the Modern Slavery Act 2015.
              </p>
            </div>

            <div className="dsaas-legal-section">
              <h2 className="cds--productive-heading-03">Fair pay and fair work</h2>
              <p className="cds--body-long-02">
                DSAAS works with skilled people in many parts of the world. Where work on our
                projects is carried out by individuals or teams based outside the UK, including in
                regions with a lower cost of living, we pay rates that reflect the value of the
                work, not the minimum a local market will accept. We do not choose partners on cost
                alone, and we do not work with individuals or organisations that we believe underpay
                or exploit the people doing the work.
              </p>
            </div>

            <div className="dsaas-legal-section">
              <h2 className="cds--productive-heading-03">Due diligence</h2>
              <p className="cds--body-long-02">
                We carry out due diligence before engaging any subcontractor or partner, and we
                review these relationships on an ongoing basis. Where we cannot satisfy ourselves
                that a partner&apos;s labour practices meet our standards, we do not proceed.
              </p>
            </div>

            <div className="dsaas-legal-section">
              <h2 className="cds--productive-heading-03">Scope</h2>
              <p className="cds--body-long-02">
                This statement applies to our own conduct as much as to anyone we work with. It is
                reviewed and approved annually by [Name], [Title].
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
