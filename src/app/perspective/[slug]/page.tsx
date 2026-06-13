import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Grid, Column, Button } from '@carbon/react';
import { articles, getArticleBySlug, formatDate, areaGroups } from '@/data/articles';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.abstract,
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const group = areaGroups.find((g) => g.slug === article.areaSlug);

  return (
    <article className="dsaas-article">
      <Grid fullWidth>
        <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
          <header className="dsaas-article__header">
            <div className="dsaas-article-card__meta">
              {group && (
                <span className="dsaas-eyebrow" style={{ marginBottom: 0 }}>
                  {group.disciplineLabel}: {group.label}
                </span>
              )}
              <span className="dsaas-eyebrow" style={{ marginBottom: 0 }}>
                {formatDate(article.date)}
              </span>
            </div>
            <h1 className="cds--productive-heading-07 dsaas-article__title">{article.title}</h1>
            <p className="cds--body-long-02 dsaas-article__abstract">{article.abstract}</p>
          </header>

          <div className="dsaas-article__coming-soon">
            <p className="cds--body-long-01">The full piece is in progress.</p>
          </div>

          <div
            style={{
              paddingTop: 'var(--cds-spacing-09)',
              paddingBottom: 'var(--cds-spacing-13)',
            }}
          >
            <Button kind="ghost" href="/perspective">
              Back to Perspective
            </Button>
          </div>
        </Column>
      </Grid>
    </article>
  );
}
