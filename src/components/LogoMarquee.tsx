'use client';
import { motion } from 'framer-motion';

const logos = [
  { src: '/logos/nhs.svg', alt: 'NHS', height: 36 },
  { src: '/logos/govuk.svg', alt: 'GOV.UK', height: 36 },
  { src: '/logos/palantir.svg', alt: 'Palantir', height: 28 },
  { src: '/logos/hpe.svg', alt: 'HPE', height: 36 },
  { src: '/logos/pwc.svg', alt: 'PwC', height: 36 },
  { src: '/logos/ford.svg', alt: 'Ford', height: 48 },
  { src: '/logos/tfl.svg', alt: 'Transport for London', height: 40 },
  { src: '/logos/barclays.svg', alt: 'Barclays', height: 28 },
  { src: '/logos/aviva.svg', alt: 'Aviva', height: 32 },
];

export function LogoMarquee() {
  const track = [...logos, ...logos];
  return (
    <div className="dsaas-marquee" aria-hidden="true">
      <motion.div
        className="dsaas-marquee__track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 50, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
      >
        {track.map((logo, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            height={logo.height}
            className="dsaas-marquee__logo"
          />
        ))}
      </motion.div>
    </div>
  );
}
