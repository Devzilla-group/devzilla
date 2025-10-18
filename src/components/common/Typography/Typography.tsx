import { FC } from 'react';
import clsx from 'clsx';
import {
  TypographyProps,
  TypographyVariant,
} from '@/components/common/Typography/typography.types';

const variantClasses: Record<TypographyVariant, string> = {
  // Headings
  h1: 'text-[60px] leading-[72px] font-bold',
  h2: 'text-[48px] leading-[60px] font-bold',
  h3: 'text-[36px] leading-[44px] font-bold',

  // H4
  h4Reg: 'text-[24px] leading-[32px] font-normal',
  h4Bold: 'text-[24px] leading-[32px] font-bold',

  // Body
  bodyReg: 'text-[16px] leading-[24px] font-normal',
  bodyMed: 'text-[16px] leading-[24px] font-medium',
  bodySemibold: 'text-[16px] leading-[24px] font-semibold',
  bodyBold: 'text-[16px] leading-[24px] font-bold',

  // Small
  smallReg: 'text-[14px] leading-[20px] font-normal',
  smallSemibold: 'text-[14px] leading-[20px] font-semibold',
  smallBold: 'text-[14px] leading-[20px] font-bold',

  // Label
  labelReg: 'text-[12px] leading-[16px] font-normal',
  labelSemibold: 'text-[12px] leading-[16px] font-semibold',

  // Mobile regular
  mobileReg: 'text-[20px] leading-[28px] font-normal',
};

export const Typography: FC<TypographyProps> = ({
  as: Component = 'span',
  variant = 'bodyReg',
  className,
  children,
}) => {
  return (
    <Component className={clsx(variantClasses[variant], className)}>
      {children}
    </Component>
  );
};
