import type { Metadata } from 'next';
import { Grid, Column } from '@carbon/react';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Tell us what you're working on. We'll tell you how DSAAS fits.",
};

export default function ContactPage() {
  return (
    <>
      <section className="dsaas-page-headline">
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            <p className="dsaas-eyebrow">Contact</p>
          </Column>
        </Grid>
      </section>

      <section className="dsaas-contact-body">
        <Grid fullWidth>
          <Column lg={{ span: 5, offset: 2 }} md={4} sm={4}>
            <h1 className="cds--productive-heading-06">Start a conversation.</h1>
            <p
              className="cds--body-long-02"
              style={{ marginTop: 'var(--cds-spacing-06)', color: 'var(--cds-text-secondary)' }}
            >
              Tell us what you&apos;re working on. We&apos;ll tell you how DSAAS fits.
            </p>
          </Column>
          <Column lg={7} md={4} sm={4}>
            <ContactForm />
          </Column>
        </Grid>
      </section>
    </>
  );
}
