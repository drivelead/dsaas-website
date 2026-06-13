import type { Metadata } from 'next';
import Link from 'next/link';
import { Grid, Column } from '@carbon/react';
import { articles, formatDate } from '@/data/articles';

export const metadata: Metadata = {
  title: 'Perspective',
  description:
    'Notes on consistency, governance, and the discipline of design systems at scale.',
};

export default function PerspectivePage() {
  return (
    <>
      <section className="dsaas-page-headline">
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            <p className="dsaas-eyebrow">Perspective</p>
            <h1 className="cds--productive-heading-05">
              Notes on consistency, governance, and the discipline of design systems at scale.
            </h1>
          </Column>
        </Grid>
      </section>

      <section>
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/perspective/${article.slug}`}
                className="dsaas-article-card"
              >
                <div className="dsaas-article-card__meta">
                  <span className="dsaas-eyebrow" style={{ marginBottom: 0 }}>
                    {article.category}
                  </span>
                  <span className="dsaas-eyebrow" style={{ marginBottom: 0 }}>
                    {formatDate(article.date)}
                  </span>
                </div>
                <h2 className="cds--productive-heading-04 dsaas-article-card__title">
                  {article.title}
                </h2>
                <p className="cds--body-long-01 dsaas-article-card__abstract">
                  {article.abstract}
                </p>
              </Link>
            ))}
          </Column>
        </Grid>
      </section>
    </>
  );
}
