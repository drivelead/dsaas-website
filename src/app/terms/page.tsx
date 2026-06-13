import type { Metadata } from 'next';
import { Grid, Column } from '@carbon/react';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms governing access to and use of the DSAAS website.',
};

const sections = [
  {
    number: '1.',
    heading: 'Introduction',
    content: [
      'These terms of use govern your access to and use of this website, operated by [DSAAS Limited / company name], a company registered in England and Wales under company number [company number], with its registered office at [registered address] ("DSAAS," "we," "us," "our"). By accessing or using this website, you agree to be bound by these terms.',
    ],
  },
  {
    number: '2.',
    heading: 'Use of this website',
    content: [
      'This website and its content are provided for general information about DSAAS and its services. You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out in these terms.',
    ],
  },
  {
    number: '3.',
    heading: 'Intellectual property',
    content: [
      'All content on this website, including text, graphics, logos, and the DSAAS name and mark, is the property of DSAAS or its licensors and is protected by copyright and other intellectual property laws. Nothing on this website grants any licence or right to use any trade mark without the prior written permission of DSAAS.',
    ],
  },
  {
    number: '4.',
    heading: 'No reliance on information',
    content: [
      'The content on this website is provided for general information only and does not constitute advice on which you should rely. You should obtain professional or specialist advice before taking, or refraining from, any action on the basis of content on this website.',
    ],
  },
  {
    number: '5.',
    heading: 'Limitation of liability',
    content: [
      'To the extent permitted by law, DSAAS excludes all liability for loss or damage arising from your use of this website, including but not limited to direct, indirect, or consequential loss, whether in contract, tort (including negligence), or otherwise. Nothing in these terms excludes or limits liability for death or personal injury caused by negligence, fraud, or any other liability which cannot be excluded or limited under applicable law.',
    ],
  },
  {
    number: '6.',
    heading: 'Links to other websites',
    content: [
      'This website may contain links to third-party websites. These links are provided for your convenience only. DSAAS has no control over, and accepts no responsibility for, the content of any third-party website.',
    ],
  },
  {
    number: '7.',
    heading: 'Changes to these terms',
    content: [
      'DSAAS may revise these terms at any time by updating this page. You are expected to check this page from time to time to take notice of any changes.',
    ],
  },
  {
    number: '8.',
    heading: 'Governing law',
    content: [
      'These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.',
    ],
  },
  {
    number: '9.',
    heading: 'Contact',
    content: ['Questions about these terms should be sent to [contact email address].'],
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="dsaas-page-headline">
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            <p className="dsaas-eyebrow">Legal</p>
            <h1 className="cds--productive-heading-06">Terms of Use</h1>
          </Column>
        </Grid>
      </section>

      <section>
        <Grid fullWidth>
          <Column lg={{ span: 8, offset: 2 }} md={8} sm={4}>
            {sections.map((s) => (
              <div key={s.number} className="dsaas-legal-section">
                <h2 className="cds--productive-heading-03">
                  {s.number} {s.heading}
                </h2>
                {s.content.map((para, i) => (
                  <p key={i} className="cds--body-long-01">
                    {para}
                  </p>
                ))}
              </div>
            ))}
            <div className="dsaas-legal-meta">
              <p className="cds--body-short-01">Last updated: [date]</p>
            </div>
          </Column>
        </Grid>
      </section>
    </>
  );
}
