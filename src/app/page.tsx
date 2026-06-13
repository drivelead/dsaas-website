import type { Metadata } from 'next';
import { Grid, Column, Button } from '@carbon/react';
import { articles, areaGroups, getArticleBySlug } from '@/data/articles';

export const metadata: Metadata = {
  title: 'DSAAS',
  description:
    'Brand consistency, governed at scale. DSAAS defines the standard and keeps it, regardless of who builds, or what they build it in.',
};

// Locked copy for the approach brief on the home page
const homeDisciplines = [
  {
    disciplineLabel: 'Understand',
    areaLabel: 'Audit & Analysis',
    short: 'Where consistency has already broken down, and why.',
    anchor: 'understand',
  },
  {
    disciplineLabel: 'Define',
    areaLabel: 'Governance & Operating Model',
    short: 'Who owns the standard, and how decisions get made.',
    anchor: 'define',
  },
  {
    disciplineLabel: 'Build',
    areaLabel: 'Design & Development',
    short: 'Components, patterns, and documentation that any team can implement.',
    anchor: 'build',
  },
  {
    disciplineLabel: 'Keep',
    areaLabel: 'Adoption & Custodianship',
    short: 'Adopted, then maintained, as the organisation evolves.',
    anchor: 'keep',
  },
];

// One article per discipline area for the insights teaser
const teaserSlugs = [
  'what-an-audit-actually-finds',
  'governance-gap-multi-agency-services',
  'what-tech-agnostic-means',
  'why-design-systems-fail-after-launch',
];

export default function HomePage() {
  const teaserArticles = teaserSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter(Boolean) as typeof articles;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="dsaas-hero">
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            <h1 className="cds--productive-heading-07 dsaas-hero__headline">
              Brand consistency, governed at scale.
            </h1>
            <p className="cds--productive-heading-03 dsaas-hero__subline">
              Every interface is an extension of your organisation. DSAAS defines the standard and
              keeps it, regardless of who builds, or what they build it in.
            </p>
          </Column>
        </Grid>
      </section>

      {/* ── Observation ───────────────────────────────────────────────────── */}
      <section className="dsaas-observation">
        <Grid fullWidth>
          <Column lg={{ span: 8, offset: 2 }} md={8} sm={4}>
            <p className="cds--body-long-02">
              Building an interface has never been easier. Frameworks generate components in
              seconds. AI tools draft entire screens from a single prompt. The barrier to entry for
              front-end development has nearly disappeared.
            </p>
            <p className="cds--body-long-02">
              The barrier to consistency has not moved. Every shortcut, every new tool, every
              well-intentioned team produces another small divergence from the standard. Across a
              large organisation, those divergences compound.
            </p>
            <p className="cds--body-long-02 dsaas-observation__thesis">
              A design system is the only mechanism built to keep pace. It is the discipline DSAAS
              specialises in, and nothing else.
            </p>
          </Column>
        </Grid>
      </section>

      {/* ── Approach brief ────────────────────────────────────────────────── */}
      <section className="dsaas-approach-brief">
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            <p className="cds--body-long-02 dsaas-approach-brief__intro">
              Our approach moves through four disciplines.
            </p>
            {homeDisciplines.map((d) => (
              <div key={d.anchor} className="dsaas-discipline-brief-item">
                <a
                  href={`/approach#${d.anchor}`}
                  className="dsaas-discipline-brief-item__label"
                >
                  {d.disciplineLabel}: {d.areaLabel}
                </a>
                <p className="cds--body-long-01 dsaas-discipline-brief-item__short">{d.short}</p>
              </div>
            ))}
            <div className="dsaas-approach-brief__cta">
              <Button kind="secondary" href="/approach">
                See the full approach.
              </Button>
            </div>
          </Column>
        </Grid>
      </section>

      {/* ── Continuum statement ───────────────────────────────────────────── */}
      <section className="dsaas-continuum">
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            <p className="cds--productive-heading-04 dsaas-continuum__text">
              Engage DSAAS for a single component, a complete system, or its ongoing custodianship.
              The relationship is the same. Only the scope changes.
            </p>
          </Column>
        </Grid>
      </section>

      {/* ── Insights teaser ───────────────────────────────────────────────── */}
      <section className="dsaas-insights-teaser">
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            <p className="cds--body-long-02 dsaas-insights-teaser__intro">
              Recent thinking, by discipline.
            </p>
            {teaserArticles.map((article, i) => {
              const group = areaGroups.find((g) => g.slug === article.areaSlug)!;
              return (
                <div key={article.slug} className="dsaas-insight-entry">
                  <p className="dsaas-eyebrow">
                    {group.disciplineLabel}: {group.label}
                  </p>
                  <a
                    href={`/perspective/${article.slug}`}
                    className="dsaas-insight-entry__title-link"
                  >
                    <h2 className="cds--productive-heading-03">{article.title}</h2>
                  </a>
                  <p className="cds--body-long-01 dsaas-insight-entry__abstract">
                    {article.abstract}
                  </p>
                  <div className="dsaas-insight-entry__links">
                    <a
                      href={`/perspective#${article.areaSlug}`}
                      className="dsaas-insight-entry__area-link"
                    >
                      More on {group.label}
                    </a>
                  </div>
                </div>
              );
            })}
          </Column>
        </Grid>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="dsaas-final-cta">
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            <Button kind="primary" href="/contact">
              Start a conversation.
            </Button>
          </Column>
        </Grid>
      </section>
    </>
  );
}
