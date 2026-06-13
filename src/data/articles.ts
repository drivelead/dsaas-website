export interface Article {
  slug: string;
  title: string;
  abstract: string;
  date: string;
  area: string;
  areaSlug: string;
}

export interface AreaGroup {
  slug: string;
  label: string;
  disciplineLabel: string;
  approachAnchor: string;
}

export const areaGroups: AreaGroup[] = [
  {
    slug: 'audit-analysis',
    label: 'Audit & Analysis',
    disciplineLabel: 'Understand',
    approachAnchor: 'understand',
  },
  {
    slug: 'governance-operating-model',
    label: 'Governance & Operating Model',
    disciplineLabel: 'Define',
    approachAnchor: 'define',
  },
  {
    slug: 'design-development',
    label: 'Design & Development',
    disciplineLabel: 'Build',
    approachAnchor: 'build',
  },
  {
    slug: 'adoption-custodianship',
    label: 'Adoption & Custodianship',
    disciplineLabel: 'Keep',
    approachAnchor: 'keep',
  },
];

export const articles: Article[] = [
  // Audit & Analysis
  {
    slug: 'what-an-audit-actually-finds',
    title: 'What an audit actually finds',
    abstract: 'Most fragmentation is invisible until someone goes looking for it.',
    date: '2026-01-10',
    area: 'Audit & Analysis',
    areaSlug: 'audit-analysis',
  },
  {
    slug: 'the-cost-of-inconsistency-measured',
    title: 'The cost of inconsistency, measured',
    abstract: 'Every divergent pattern is a decision someone has to make again.',
    date: '2026-01-24',
    area: 'Audit & Analysis',
    areaSlug: 'audit-analysis',
  },
  // Governance & Operating Model
  {
    slug: 'governance-gap-multi-agency-services',
    title: 'The governance gap in multi-agency services',
    abstract:
      'When ten departments each commission their own interfaces, the brand becomes ten brands.',
    date: '2026-02-07',
    area: 'Governance & Operating Model',
    areaSlug: 'governance-operating-model',
  },
  {
    slug: 'who-owns-the-standard',
    title: 'Who owns the standard?',
    abstract: 'A design system without an owner is a design system without a future.',
    date: '2026-02-21',
    area: 'Governance & Operating Model',
    areaSlug: 'governance-operating-model',
  },
  // Design & Development
  {
    slug: 'what-tech-agnostic-means',
    title: "What 'tech-agnostic' actually means for a design system",
    abstract:
      'A standard that depends on one platform is not a standard. It is a feature of that platform.',
    date: '2026-03-07',
    area: 'Design & Development',
    areaSlug: 'design-development',
  },
  {
    slug: 'accessibility-and-brand-consistency',
    title: 'Why accessibility and brand consistency are the same problem',
    abstract: 'A system that excludes users is, by definition, inconsistent with itself.',
    date: '2026-03-21',
    area: 'Design & Development',
    areaSlug: 'design-development',
  },
  // Adoption & Custodianship
  {
    slug: 'why-design-systems-fail-after-launch',
    title: 'Why design systems fail after launch',
    abstract: 'The hardest part of a design system is not building it. It is keeping it true.',
    date: '2026-04-04',
    area: 'Adoption & Custodianship',
    areaSlug: 'adoption-custodianship',
  },
  {
    slug: 'documentation-delivery-teams-actually-use',
    title: 'Documentation that delivery teams actually use',
    abstract: 'A standard nobody reads is not a standard. It is a record.',
    date: '2026-04-18',
    area: 'Adoption & Custodianship',
    areaSlug: 'adoption-custodianship',
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByArea(areaSlug: string): Article[] {
  return articles.filter((a) => a.areaSlug === areaSlug);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
