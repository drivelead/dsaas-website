import type { Metadata } from 'next';
import { Grid, Column } from '@carbon/react';

export const metadata: Metadata = {
  title: 'Approach',
  description:
    'DSAAS defines the standard an organisation works to, and maintains it, independent of the technology used to deliver it.',
};

const introParagraphs = [
  'Most design systems are commissioned, built, and then left to decay. Components age. Documentation falls behind. The brand drifts, department by department, vendor by vendor.',
  'DSAAS exists to prevent that. We define the standard an organisation works to, and we maintain it, independent of the technology used to deliver it.',
  'This is not a technical exercise. Adherence is a matter for delivery teams, in whatever stack they choose. Custodianship of the standard itself is ours.',
  'Whether the work begins with a single component or a complete system, the relationship is built the same way: as an ongoing discipline, not a one-off delivery.',
];

const disciplines = [
  {
    id: 'understand',
    disciplineLabel: 'Understand',
    areaLabel: 'Audit & Analysis',
    short:
      'Before anything changes, we establish where the brand holds together, where it has fragmented, and why.',
    body: 'An audit maps the current state against the standard: where components diverge, where documentation has gone stale, and where teams have quietly built their own versions because the original was too hard to find or too slow to extend.',
  },
  {
    id: 'define',
    disciplineLabel: 'Define',
    areaLabel: 'Governance & Operating Model',
    short:
      'Who owns the standard. How decisions are made. How exceptions are handled. This is the operating model that makes consistency durable.',
    body: 'Most design systems fail not because the components are wrong, but because no one is responsible for keeping them right. We define that responsibility: who approves changes, how requests are raised, and what happens when a team needs to deviate.',
  },
  {
    id: 'build',
    disciplineLabel: 'Build',
    areaLabel: 'Design & Development',
    short:
      'The system itself: components, patterns, tokens, documentation. Technology-agnostic, ready for any delivery team to implement.',
    body: 'Built from how people actually use interfaces, not how a platform assumes they will. Every component is specified clearly enough for any delivery team, in any stack, to implement without guesswork.',
  },
  {
    id: 'keep',
    disciplineLabel: 'Keep',
    areaLabel: 'Adoption & Custodianship',
    short:
      'The standard is adopted across teams and vendors, then maintained as the organisation, channels, and context evolve.',
    body: 'Adoption is supported directly, through training, reviews, and a clear channel for questions. Custodianship means the standard keeps working as new teams, new vendors, and new tools arrive.',
  },
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

      <section className="dsaas-approach-intro">
        <Grid fullWidth>
          <Column lg={{ span: 8, offset: 2 }} md={8} sm={4}>
            {introParagraphs.map((para, i) => (
              <p key={i} className="cds--body-long-02">
                {para}
              </p>
            ))}
          </Column>
        </Grid>
      </section>

      <section>
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            {disciplines.map((d) => (
              <div key={d.id} id={d.id} className="dsaas-discipline-section">
                <p className="dsaas-eyebrow">
                  {d.disciplineLabel}: {d.areaLabel}
                </p>
                <p className="cds--productive-heading-03 dsaas-discipline-section__short">
                  {d.short}
                </p>
                <p className="cds--body-long-02 dsaas-discipline-section__body">{d.body}</p>
              </div>
            ))}
          </Column>
        </Grid>
      </section>
    </>
  );
}
