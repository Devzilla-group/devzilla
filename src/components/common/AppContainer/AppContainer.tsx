import { FC } from 'react';
import clsx from 'clsx';
import type { AppContainerProps } from '@/components/common/AppContainer/appContainer.types';

export const AppContainer: FC<AppContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx('container mx-auto px-4 sm:px-8 2xl:px-28', className)}
    >
      {children}
    </div>
  );
};
