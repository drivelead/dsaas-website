'use client';

import { Carousel } from './Carousel/Carousel';
import { type Article, formatDate } from '@/data/articles';
import styles from './PerspectiveCarousel.module.scss';

// ─── Article card ─────────────────────────────────────────────────────────────

function ArticleCard({ article }: { article: Article }) {
  return (
    <a href={`/perspective/${article.slug}`} className={styles.cardLink}>
      <div className={styles.cardInner}>
        <div className={styles.cardMeta}>
          <span className={`dsaas-eyebrow ${styles.cardEyebrow}`}>{article.category}</span>
          <span className={`dsaas-eyebrow ${styles.cardEyebrow}`}>{formatDate(article.date)}</span>
        </div>
        {/* dsaas-article__title applies IBM Plex Serif — Perspective articles only */}
        <h3 className={`cds--productive-heading-04 dsaas-article__title ${styles.cardTitle}`}>
          {article.title}
        </h3>
        <p className={`cds--body-long-01 ${styles.cardAbstract}`}>{article.abstract}</p>
      </div>
    </a>
  );
}

// ─── Carousel wrapper ─────────────────────────────────────────────────────────

interface PerspectiveCarouselProps {
  articles: Article[];
}

export function PerspectiveCarousel({ articles }: PerspectiveCarouselProps) {
  return (
    <Carousel
      items={articles}
      renderItem={(article) => <ArticleCard article={article} />}
      label="Perspective articles"
    />
  );
}
