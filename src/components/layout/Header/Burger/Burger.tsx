import { FC } from 'react';

import { TBurger } from '@/components/layout/Header/Burger/burger.types';
import { BurgerIcon } from '@/components/icons/BurgerIcon';

export const Burger: FC<TBurger> = ({ setIsMenuOpen }) => {
  return (
    <button
      type={'button'}
      onClick={() => {
        setIsMenuOpen(true);
      }}
      className={'flex items-center justify-center 2xl:hidden'}
      aria-label={'open mobile menu button'}
    >
      <BurgerIcon />
    </button>
  );
};
