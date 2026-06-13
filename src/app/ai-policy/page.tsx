import type { Metadata } from 'next';
import { Grid, Column } from '@carbon/react';

export const metadata: Metadata = {
  title: 'AI Policy',
  description: 'How DSAAS uses AI tools in its work and on client engagements.',
};

export default function AIPolicyPage() {
  return (
    <>
      <section className="dsaas-page-headline">
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            <p className="dsaas-eyebrow">Legal</p>
            <h1 className="cds--productive-heading-06">AI Policy</h1>
          </Column>
        </Grid>
      </section>

      <section>
        <Grid fullWidth>
          <Column lg={{ span: 8, offset: 2 }} md={8} sm={4}>
            <div className="dsaas-legal-section">
              <p className="cds--body-long-02">
                We use AI tools in our work, primarily to support research, drafting, and the
                exploration of patterns and options. AI assists our practitioners. It does not
                replace their judgement, and nothing produced with its help reaches a client without
                review.
              </p>
            </div>

            <div className="dsaas-legal-section">
              <h2 className="cds--productive-heading-03">Client data</h2>
              <p className="cds--body-long-02">
                Client information is not submitted to public AI tools. Where AI supports work on a
                client engagement, including audits and analysis, we use private or self-hosted
                models, particularly for government and enterprise clients whose data sensitivity
                requires it.
              </p>
            </div>

            <div className="dsaas-legal-section">
              <h2 className="cds--productive-heading-03">Human review</h2>
              <p className="cds--body-long-02">
                Every deliverable is reviewed and approved by a person before it is sent, regardless
                of whether AI was used at any stage in producing it.
              </p>
            </div>

            <div className="dsaas-legal-section">
              <h2 className="cds--productive-heading-03">Engagement-specific terms</h2>
              <p className="cds--body-long-02">
                If an engagement requires specific terms around AI use, including not using it at
                all, we agree this with the client before work begins.
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
