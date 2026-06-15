import type { Metadata } from 'next';
import { Grid, Column } from '@carbon/react';
import { DisciplineIcon, type DisciplineKey } from '@/components/DisciplineIcon';

export const metadata: Metadata = {
  title: 'Approach',
  description:
    'DSAAS defines the standard an organisation works to, and maintains it, independent of the technology used to deliver it.',
};

const introParagraphs = [
  'Most standards are set once and then left to decay. Guidelines fall out of date. Templates stop matching the decks people actually need. Fonts get substituted, logos get stretched, and departments quietly build their own versions because the original was too hard to find or too slow to use.',
  'DSAAS exists to prevent that. Together with the organisation, we define the standard it works to, and help keep it current as the organisation, its tools, and its teams change.',
  'This is not a technical exercise, and it doesn't require changing the tools already in place. Delivery teams keep using whatever stack, software, or vendor they choose. Custodianship of the standard itself is ours.',
  'Whether the engagement starts with a single template, a set of brand guidelines, or a complete design system, the relationship is built the same way: an ongoing retainer, not a one-off delivery.',
];

const disciplines = [
  {
    id: 'understand' as DisciplineKey,
    disciplineLabel: 'Understand',
    areaLabel: 'Audit & Analysis',
    short:
      'Before anything changes, we establish where the brand holds together, where it has fragmented, and why.',
    body: 'An audit maps the current state against the standard, or against what the standard should be, if one doesn't yet exist. We look at where templates and components diverge, where documentation has gone stale, where assets are hard to find, and where teams have quietly built workarounds because the original was too hard to use.',
    services: [
      'Design system and component audits',
      'Brand guideline and template reviews',
      'Brand consistency reviews across digital estates and document libraries',
      'Accessibility audits against WCAG and sector standards',
      'Governance and ownership gap analysis',
      'Documentation and asset-library review',
      'Multi-vendor and multi-agency consistency mapping',
      'Usability and interaction reviews',
    ],
  },
  {
    id: 'define' as DisciplineKey,
    disciplineLabel: 'Define',
    areaLabel: 'Governance & Operating Model',
    short:
      'Who owns the standard, how decisions get made, and how exceptions are handled. This is what makes consistency durable over time.',
    body: 'Most standards fail not because the guidelines or components are wrong, but because no one is responsible for keeping them current. Together with the organisation, we set out that responsibility: who approves changes, how requests are raised, and what happens when a team needs to deviate.',
    services: [
      'Standard and governance frameworks',
      'Ownership and decision-making models',
      'Contribution and change-request processes',
      'Versioning and release management',
      'Exception and deviation processes',
      'Vendor and supplier standards',
      'Cross-department adoption frameworks',
    ],
  },
  {
    id: 'build' as DisciplineKey,
    disciplineLabel: 'Build',
    areaLabel: 'Design & Development',
    short:
      'The standard itself, in whatever form it needs to take: guidelines, templates, components, documentation. Technology-agnostic, ready for any team or vendor to use.',
    body: 'Built from how people actually work, the decks they present, the dashboards they check daily, the assets they need to find quickly, not from how a platform assumes they will. Whether the deliverable is a brand guideline, a presentation template, a font and asset library, or a full design system, everything is specified clearly enough for any team, in any tool, to use without guesswork.',
    services: [
      'Brand guideline systems',
      'Presentation and document templates',
      'Font and asset libraries and distribution',
      'Component and pattern libraries',
      'Design token definition',
      'Accessible, technology-agnostic specifications',
      'Usage documentation and guidelines',
      'Responsive and cross-platform system design',
    ],
  },
  {
    id: 'keep' as DisciplineKey,
    disciplineLabel: 'Keep',
    areaLabel: 'Compliance & Evolution',
    short:
      'The standard is followed through approval, review, and ongoing monitoring, and refined through what that process reveals.',
    body: 'Adoption is supported directly: training, reviews, and a clear channel for questions. Every approval, audit, and flagged inconsistency is also information, about where delivery has drifted, and about where the standard itself needs to evolve. This isn't a phase that follows definition; it's an ongoing cycle that keeps the standard both followed and current.',
    services: [
      'Ongoing reviews and approvals',
      'Compliance audits and monitoring',
      'Deviation flagging and resolution',
      'Training and onboarding for delivery teams and vendors',
      'Feedback analysis and standard revision',
      'Adoption tracking and reporting',
      'Version management and release notes',
    ],
  },
];

export default function ApproachPage() {
  return (
    <>
      {/* Page headline */}
      <section className="dsaas-page-headline">
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            <p className="dsaas-eyebrow">Approach</p>
            <h1 className="cds--productive-heading-06">Standards outlast software.</h1>
          </Column>
        </Grid>
      </section>

      {/* Intro text */}
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

      {/* In-page anchor nav */}
      <section>
        <Grid fullWidth>
          <Column lg={{ span: 12, offset: 2 }} md={8} sm={4}>
            <nav className="dsaas-approach-nav" aria-label="Jump to discipline">
              {disciplines.map((d) => (
                <a key={d.id} href={`#${d.id}`} className="dsaas-approach-nav__link">
                  {d.disciplineLabel}
                </a>
              ))}
            </nav>
          </Column>
        </Grid>
      </section>

      {/* Discipline sections — alternating icon position */}
      {disciplines.map((d, i) => {
        const isReversed = i % 2 === 1;
        return (
          <section key={d.id} id={d.id} className="dsaas-discipline-section">
            {isReversed ? (
              <Grid fullWidth>
                <Column lg={{ span: 8, offset: 2 }} md={7} sm={4} className="dsaas-discipline-content-col">
                  <p className="dsaas-eyebrow">
                    {d.disciplineLabel}: {d.areaLabel}
                  </p>
                  <p className="cds--productive-heading-03 dsaas-discipline-section__short">
                    {d.short}
                  </p>
                  <p className="cds--body-long-02 dsaas-discipline-section__body">{d.body}</p>
                  <ul className="dsaas-service-list">
                    {d.services.map((s) => (
                      <li key={s} className="dsaas-service-list__item">{s}</li>
                    ))}
                  </ul>
                </Column>
                <Column lg={2} md={1} sm={4} className="dsaas-discipline-icon-col">
                  <DisciplineIcon discipline={d.id} size={40} />
                </Column>
              </Grid>
            ) : (
              <Grid fullWidth>
                <Column lg={{ span: 2, offset: 2 }} md={1} sm={4} className="dsaas-discipline-icon-col">
                  <DisciplineIcon discipline={d.id} size={40} />
                </Column>
                <Column lg={8} md={7} sm={4} className="dsaas-discipline-content-col">
                  <p className="dsaas-eyebrow">
                    {d.disciplineLabel}: {d.areaLabel}
                  </p>
                  <p className="cds--productive-heading-03 dsaas-discipline-section__short">
                    {d.short}
                  </p>
                  <p className="cds--body-long-02 dsaas-discipline-section__body">{d.body}</p>
                  <ul className="dsaas-service-list">
                    {d.services.map((s) => (
                      <li key={s} className="dsaas-service-list__item">{s}</li>
                    ))}
                  </ul>
                </Column>
              </Grid>
            )}
          </section>
        );
      })}
    </>
  );
}
