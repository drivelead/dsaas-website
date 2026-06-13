import type { Metadata } from 'next';
import { Grid, Column } from '@carbon/react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How DSAAS collects, uses, and protects personal data.',
};

const sections = [
  {
    number: '1.',
    heading: 'Who we are',
    content: [
      'This privacy policy explains how [DSAAS Limited / company name] ("DSAAS," "we," "us," "our"), a company registered in England and Wales under company number [company number] with its registered office at [registered address], collects, uses, and protects personal data when you visit this website or contact us. DSAAS is the data controller for the purposes of UK data protection law.',
    ],
  },
  {
    number: '2.',
    heading: 'Information we collect',
    content: [
      'We collect personal data that you provide directly to us, such as when you submit an enquiry through our contact form, including your name, organisation, email address, and the content of your message. We do not use third-party advertising or tracking cookies on this website. [If analytics are used: If we use website analytics, we may also collect technical information such as your IP address, browser type, and pages visited, in accordance with the cookie information below.]',
    ],
  },
  {
    number: '3.',
    heading: 'How we use your information',
    content: [
      'We use the information you provide to respond to your enquiry, to correspond with you about our services, and, where applicable, to comply with our legal obligations. The legal basis for this processing is our legitimate interest in responding to enquiries and, where a contract or potential contract is discussed, the steps necessary to enter into that contract.',
    ],
  },
  {
    number: '4.',
    heading: 'Retention',
    content: [
      'We retain personal data submitted via our contact form for as long as is necessary to respond to your enquiry and for a reasonable period afterwards in case of follow-up correspondence, after which it is securely deleted, unless a longer retention period is required by law or by an ongoing business relationship.',
    ],
  },
  {
    number: '5.',
    heading: 'Sharing your information',
    content: [
      'We do not sell or rent personal data. We may share personal data with trusted service providers who support our operation of this website (for example, hosting or email service providers), who are required to handle such data securely and in accordance with this policy. We will only share personal data with other third parties where required by law.',
    ],
  },
  {
    number: '6.',
    heading: 'Cookies',
    content: [
      '[This website uses only essential cookies necessary for its operation. / This website uses the following cookies: [list].] You can control cookies through your browser settings; disabling cookies may affect the functionality of this website.',
    ],
  },
  {
    number: '7.',
    heading: 'Your rights',
    content: [
      'Under UK data protection law, you have the right to access, correct, or request deletion of your personal data, to restrict or object to our processing of it, and to data portability where applicable. To exercise these rights, contact us at [contact email address]. You also have the right to lodge a complaint with the Information Commissioner\'s Office (ICO) at ico.org.uk if you believe your data protection rights have been infringed.',
    ],
  },
  {
    number: '8.',
    heading: 'Changes to this policy',
    content: [
      'We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.',
    ],
  },
  {
    number: '9.',
    heading: 'Contact',
    content: [
      'For any questions about this privacy policy or how we handle personal data, contact [contact email address].',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="dsaas-page-headline">
        <Grid fullWidth>
          <Column lg={{ span: 10, offset: 2 }} md={8} sm={4}>
            <p className="dsaas-eyebrow">Legal</p>
            <h1 className="cds--productive-heading-06">Privacy Policy</h1>
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
