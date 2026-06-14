'use client';

import { Theme } from '@carbon/react';

interface ThemeSectionProps {
  theme: 'white' | 'g10' | 'g90' | 'g100';
  children: React.ReactNode;
  className?: string;
}

export function ThemeSection({ theme, children, className }: ThemeSectionProps) {
  return (
    <Theme theme={theme} as="section" className={`dsaas-band${className ? ` ${className}` : ''}`}>
      {children}
    </Theme>
  );
}
