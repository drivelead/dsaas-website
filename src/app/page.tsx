import type { Metadata } from 'next';
import { Grid, Column, ClickableTile, Button } from '@carbon/react';
import { ThemeSection } from '@/components/ThemeSection';
import { DisciplineIcon, type DisciplineKey } from '@/components/DisciplineIcon';
import { HomeInsightsCarousel, type InsightSlide } from '@/components/HomeInsightsCarousel';
import { articles, areaGroups, getArticleBySlug } from '@/data/articles';

export const metadata: Metadata = {
  title: 'DSAAS',
  description:
    'Brand consistency, governed at scale. DSAAS defines the standard and keeps it, regardless of who builds, or what they build it in.',
};

const homeDisciplines = [
  {
    disciplineLabel: 'Understand',
    areaLabel: 'Audit & Analysis',
    short: 'Where consistency has already broken down, and why.',
    anchor: 'understand' as DisciplineKey,
  },
  {
    disciplineLabel: 'Define',
    areaLabel: 'Governance & Operating Model',
    short: 'Who owns the standard, and how decisions get made.',
    anchor: 'define' as DisciplineKey,
  },
  {
    disciplineLabel: 'Build',
    areaLabel: 'Design & Development',
    short: 'Components, patterns, and documentation that any team can implement.',
    anchor: 'build' as DisciplineKey,
  },
  {
    disciplineLabel: 'Keep',
    areaLabel: 'Adoption & Custodianship',
    short: 'Adopted, then maintained, as the organisation evolves.',
    anchor: 'keep' as DisciplineKey,
  },
];

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

  const insightSlides: InsightSlide[] = [
    ...teaserArticles.map((article) => ({
      kind: 'article' as const,
      article,
      group: areaGroups.find((g) => g.slug === article.areaSlug)!,
    })),
    { kind: 'see-all' as const },
  ];

  return (
    <>
      {/* ── 1. Hero (g100) ────────────────────────────────────────────────── */}
      <ThemeSection theme="g100" className="dsaas-hero">
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
      </ThemeSection>

      {/* ── 2. Observation (white) ────────────────────────────────────────── */}
      <ThemeSection theme="white" className="dsaas-observation">
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
      </ThemeSection>

      {/* ── 3. Approach brief + 4-up tile grid (g100) ────────────────────── */}
      <ThemeSection theme="g100" className="dsaas-approach-brief">
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            <p className="cds--body-long-02 dsaas-approach-brief__intro">
              Our approach moves through four disciplines.
            </p>
          </Column>
          <Column lg={{ span: 12, offset: 2 }} md={8} sm={4}>
            <div className="dsaas-tile-grid">
              <Grid>
                {homeDisciplines.map((d) => (
                  <Column key={d.anchor} lg={8} md={4} sm={4}>
                    <ClickableTile href={`/approach#${d.anchor}`}>
                      <div className="dsaas-discipline-tile">
                        <div className="dsaas-discipline-tile__icon">
                          <DisciplineIcon discipline={d.anchor} size={32} />
                        </div>
                        <p className="dsaas-eyebrow">{d.disciplineLabel}</p>
                        <p className="cds--productive-heading-03 dsaas-discipline-tile__area">
                          {d.areaLabel}
                        </p>
                        <p className="cds--body-long-01 dsaas-discipline-tile__short">{d.short}</p>
                      </div>
                    </ClickableTile>
                  </Column>
                ))}
              </Grid>
            </div>
            <div className="dsaas-approach-brief__cta">
              <Button kind="secondary" href="/approach">
                See the full approach.
              </Button>
            </div>
          </Column>
        </Grid>
      </ThemeSection>

      {/* ── 4. Continuum pull-quote (white) ───────────────────────────────── */}
      <ThemeSection theme="white" className="dsaas-continuum">
        <Grid fullWidth>
          <Column lg={{ span: 8, offset: 2 }} md={8} sm={4}>
            <p className="dsaas-pull-quote">
              Engage DSAAS for a single component, a complete system, or its ongoing custodianship.
              The relationship is the same. Only the scope changes.
            </p>
          </Column>
        </Grid>
      </ThemeSection>

      {/* ── 5. Insights carousel (g100) ───────────────────────────────────── */}
      <ThemeSection theme="g100" className="dsaas-insights-teaser">
        <Grid fullWidth>
          <Column lg={{ span: 12, offset: 2 }} md={8} sm={4}>
            <div className="dsaas-insights-band__header">
              <p className="cds--body-long-02">Recent thinking, by discipline.</p>
              <a href="/perspective" className="dsaas-insights-band__all-link">
                All perspectives
              </a>
            </div>
          </Column>
        </Grid>
        <HomeInsightsCarousel slides={insightSlides} />
      </ThemeSection>

      {/* ── 6. Final CTA (white) ──────────────────────────────────────────── */}
      <ThemeSection theme="white" className="dsaas-final-cta">
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            <Button kind="primary" href="/contact">
              Start a conversation.
            </Button>
          </Column>
        </Grid>
      </ThemeSection>
    </>
  );
}
