import type { Metadata } from 'next';
import { Grid, Column, Button } from '@carbon/react';

export const metadata: Metadata = {
  title: 'DSAAS',
  description:
    'Brand consistency, governed at scale. DSAAS defines the standard and keeps it, regardless of who builds, or what they build it in.',
};

const capabilityThreads = [
  {
    label: 'Design Systems',
    body: 'A design system is not a library of components. It is the codified discipline that keeps a thousand decisions aligned with one identity.',
  },
  {
    label: 'Brand Identity',
    body: 'Your brand does not end at the logo. It continues into every form, every button, every error message.',
  },
  {
    label: 'Human-Computer Interaction',
    body: 'Interfaces are read by people, not platforms. We design for how people behave, not how software assumes they will.',
  },
  {
    label: 'UI/UX',
    body: 'Consistency is not uniformity. It is the discipline that lets variation exist without losing coherence.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="dsaas-hero">
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
      </section>

      <section className="dsaas-section">
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            {capabilityThreads.map((thread) => (
              <div key={thread.label} className="dsaas-thread">
                <p className="dsaas-eyebrow">{thread.label}</p>
                <p className="cds--body-long-02 dsaas-thread__text">{thread.body}</p>
              </div>
            ))}
          </Column>
        </Grid>
      </section>

      <section className="dsaas-continuum">
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            <p className="cds--productive-heading-04 dsaas-continuum__text">
              Engage DSAAS for a single component, a complete system, or its ongoing custodianship.
              The relationship is the same. Only the scope changes.
            </p>
            <Button kind="primary" href="/contact">
              Start a conversation.
            </Button>
          </Column>
        </Grid>
      </section>
    </>
  );
}
