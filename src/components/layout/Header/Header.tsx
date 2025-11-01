'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

import { Logo } from '@/components/layout/Header/Logo/Logo';
import { Button } from '@/components/ui/Button/Button';
import { Burger } from '@/components/layout/Header/Burger/Burger';
import { Typography } from '@/components/common/Typography/Typography';
import { Navigation } from '@/components/layout/Header/Navigation/Navigation';
import { MobileMenu } from '@/components/layout/Header/MobileMenu/MobileMenu';
import { AppContainer } from '@/components/common/AppContainer/AppContainer';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={
        'mt-3 mb-[45px] md:mt-8 md:mb-[110px] 2xl:mt-[50px] 2xl:mb-[140px]'
      }
    >
      <AppContainer>
        <div
          className={
            'flex items-center justify-between 2xl:rounded-2xl 2xl:px-[30px] 2xl:py-4 2xl:shadow-[0_0_66.6px_0_rgba(29,78,216,0.27)] 2xl:backdrop-blur-[70px]'
          }
        >
          <Logo />
          <Navigation />
          <Burger setIsMenuOpen={setIsMenuOpen} />
          <Button className={'hidden 2xl:flex'}>
            <Typography variant="bodyMed">Build with us</Typography>
          </Button>
        </div>
      </AppContainer>
      {isMenuOpen &&
        createPortal(
          <MobileMenu onClose={() => setIsMenuOpen(false)} />,
          document.getElementById('portal-root')!,
        )}
    </header>
  );
};
