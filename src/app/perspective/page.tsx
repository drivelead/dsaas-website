import type { Metadata } from 'next';
import { Grid, Column } from '@carbon/react';
import { articles } from '@/data/articles';
import { PerspectiveCarousel } from '@/components/PerspectiveCarousel';

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

      <section
        className="dsaas-section dsaas-section--last"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <PerspectiveCarousel articles={articles} />
      </section>
    </>
  );
}
