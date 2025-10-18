import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type TButtonProps = {
  children: ReactNode;
  className?: string;
};

export const Button: FC<TButtonProps> = ({ children, className }) => {
  return (
    <button
      type={'button'}
      onClick={() => {}}
      className={clsx(
        'bg-green hover:text-green hover:border-green focus:text-green focus:border-green hidden cursor-pointer rounded-[8px] border-2 px-8 py-2 outline-0 transition-colors duration-300 hover:bg-black focus:bg-black 2xl:flex 2xl:items-center 2xl:justify-center',
        className,
      )}
    >
      {children}
    </button>
  );
};
