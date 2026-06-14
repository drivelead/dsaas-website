import type { Metadata } from 'next';
import { Grid, Column } from '@carbon/react';
import { areaGroups, getArticlesByArea } from '@/data/articles';
import { DisciplineIcon, type DisciplineKey } from '@/components/DisciplineIcon';

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
            {areaGroups.map((group) => {
              const groupArticles = getArticlesByArea(group.slug);
              return (
                <div key={group.slug} id={group.slug} className="dsaas-area-section">
                  <div className="dsaas-area-section__header">
                    <DisciplineIcon discipline={group.approachAnchor as DisciplineKey} size={24} />
                    <p className="dsaas-eyebrow" style={{ marginTop: 'var(--cds-spacing-04)' }}>
                      {group.disciplineLabel}
                    </p>
                    <h2 className="cds--productive-heading-04">{group.label}</h2>
                  </div>
                  {groupArticles.map((article) => (
                    <a
                      key={article.slug}
                      href={`/perspective/${article.slug}`}
                      className="dsaas-area-article"
                    >
                      <h3 className="cds--productive-heading-03 dsaas-area-article__title">
                        {article.title}
                      </h3>
                      <p className="cds--body-long-01 dsaas-area-article__abstract">
                        {article.abstract}
                      </p>
                    </a>
                  ))}
                </div>
              );
            })}
          </Column>
        </Grid>
      </section>
    </>
  );
}
