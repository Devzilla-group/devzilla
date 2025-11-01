import { FC } from 'react';
import clsx from 'clsx';

import { TButtonProps } from '@/components/ui/Button/button.types';

export const Button: FC<TButtonProps> = ({ children, className }) => {
  return (
    <button
      type={'button'}
      onClick={() => {}}
      className={clsx(
        'bg-green hover:text-green hover:border-green focus:text-green focus:border-green block cursor-pointer rounded-[8px] border-2 px-8 py-2 font-medium outline-0 transition-colors duration-300 hover:bg-black focus:bg-black 2xl:items-center 2xl:justify-center',
        className,
      )}
    >
      {children}
    </button>
  );
};
