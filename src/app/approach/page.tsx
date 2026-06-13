import type { Metadata } from 'next';
import { Grid, Column } from '@carbon/react';

export const metadata: Metadata = {
  title: 'Approach',
  description:
    'DSAAS defines the standard an organisation works to, and maintains it, independent of the technology used to deliver it.',
};

const bodyParagraphs = [
  'Most design systems are commissioned, built, and then left to decay. Components age. Documentation falls behind. The brand drifts, department by department, vendor by vendor.',
  'DSAAS exists to prevent that. We define the standard an organisation works to, and we maintain it, independent of the technology used to deliver it.',
  'This is not a technical exercise. Adherence is a matter for delivery teams, in whatever stack they choose. Custodianship of the standard itself is ours.',
  'Whether the work begins with a single component or a complete system, the relationship is built the same way: as an ongoing discipline, not a one-off delivery.',
];

export default function ApproachPage() {
  return (
    <>
      <section className="dsaas-page-headline">
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            <p className="dsaas-eyebrow">Approach</p>
            <h1 className="cds--productive-heading-07">Standards outlast software.</h1>
          </Column>
        </Grid>
      </section>

      <section className="dsaas-body-section">
        <Grid fullWidth>
          <Column lg={{ span: 8, offset: 2 }} md={8} sm={4}>
            {bodyParagraphs.map((para, i) => (
              <p key={i} className="cds--body-long-02">
                {para}
              </p>
            ))}
          </Column>
        </Grid>
      </section>
    </>
  );
}
