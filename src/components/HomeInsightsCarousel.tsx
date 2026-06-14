'use client';

import { Carousel } from './Carousel/Carousel';
import { type Article, type AreaGroup } from '@/data/articles';
import styles from './HomeInsightsCarousel.module.scss';

// ─── Slide union type ─────────────────────────────────────────────────────────

export type InsightSlide =
  | { kind: 'article'; article: Article; group: AreaGroup }
  | { kind: 'see-all' };

// ─── Article slide ────────────────────────────────────────────────────────────

function ArticleSlide({ article, group }: { article: Article; group: AreaGroup }) {
  return (
    <a href={`/perspective/${article.slug}`} className={styles.cardLink}>
      <div className={styles.cardInner}>
        <p className={`dsaas-eyebrow ${styles.cardEyebrow}`}>
          {group.disciplineLabel}: {group.label}
        </p>
        <h3 className={`cds--productive-heading-03 ${styles.cardTitle}`}>{article.title}</h3>
        <p className={`cds--body-long-01 ${styles.cardAbstract}`}>{article.abstract}</p>
      </div>
    </a>
  );
}

// ─── See-all slide ────────────────────────────────────────────────────────────

function SeeAllSlide() {
  return (
    <a href="/perspective" className={styles.cardLink}>
      <div className={`${styles.cardInner} ${styles.seeAllInner}`}>
        <p className={`cds--productive-heading-03 ${styles.seeAllLabel}`}>All perspectives</p>
        <span className={styles.seeAllArrow} aria-hidden="true">
          →
        </span>
      </div>
    </a>
  );
}

// ─── Carousel wrapper ─────────────────────────────────────────────────────────

interface HomeInsightsCarouselProps {
  slides: InsightSlide[];
}

export function HomeInsightsCarousel({ slides }: HomeInsightsCarouselProps) {
  return (
    <Carousel
      items={slides}
      renderItem={(slide) =>
        slide.kind === 'article' ? (
          <ArticleSlide article={slide.article} group={slide.group} />
        ) : (
          <SeeAllSlide />
        )
      }
      label="Perspectives carousel"
    />
  );
}
