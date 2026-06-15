'use client';

import { usePathname } from 'next/navigation';
import {
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderNavigation,
  HeaderMenuItem,
  SideNav,
  SideNavItems,
  SideNavMenuItem,
  SkipToContent,
} from '@carbon/react';

const navItems = [
  { href: '/approach', label: 'Approach' },
  { href: '/perspective', label: 'Perspective' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <HeaderContainer
      render={({
        isSideNavExpanded,
        onClickSideNavExpand,
      }: {
        isSideNavExpanded: boolean;
        onClickSideNavExpand: () => void;
      }) => (
        <Header aria-label="DSAAS">
          <SkipToContent />
          <HeaderMenuButton
            aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'}
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <a href="/" className="dsaas-wordmark">
            DSAAS
          </a>
          <HeaderNavigation aria-label="DSAAS navigation">
            {navItems.map((item) => (
              <HeaderMenuItem
                key={item.href}
                href={item.href}
                isCurrentPage={pathname === item.href}
              >
                {item.label}
              </HeaderMenuItem>
            ))}
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            isPersistent={false}
            expanded={isSideNavExpanded}
            onOverlayClick={onClickSideNavExpand}
          >
            <SideNavItems>
              {navItems.map((item) => (
                <SideNavMenuItem
                  key={item.href}
                  href={item.href}
                  isActive={pathname === item.href}
                >
                  {item.label}
                </SideNavMenuItem>
              ))}
            </SideNavItems>
          </SideNav>
        </Header>
      )}
    />
  );
}
