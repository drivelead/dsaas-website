export interface Article {
  slug: string;
  title: string;
  abstract: string;
  date: string;
  category: string;
}

export const articles: Article[] = [
  {
    slug: 'governance-gap-multi-agency-services',
    title: 'The governance gap in multi-agency services',
    abstract:
      'When ten departments each commission their own interfaces, the brand becomes ten brands.',
    date: '2026-01-15',
    category: 'Governance',
  },
  {
    slug: 'accessibility-and-brand-consistency',
    title: 'Why accessibility and brand consistency are the same problem',
    abstract: 'A system that excludes users is, by definition, inconsistent with itself.',
    date: '2026-02-20',
    category: 'Accessibility',
  },
  {
    slug: 'what-tech-agnostic-means',
    title: "What 'tech-agnostic' actually means for a design system",
    abstract:
      'A standard that depends on one platform is not a standard. It is a feature of that platform.',
    date: '2026-03-10',
    category: 'Standards',
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
