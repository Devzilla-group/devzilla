import { JSX, PropsWithChildren } from 'react';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4Reg'
  | 'h4Bold'
  | 'bodyReg'
  | 'bodyMed'
  | 'bodySemibold'
  | 'bodyBold'
  | 'smallReg'
  | 'smallSemibold'
  | 'smallBold'
  | 'labelReg'
  | 'labelSemibold'
  | 'mobileReg';

export interface TypographyProps extends PropsWithChildren {
  as?: keyof JSX.IntrinsicElements;
  variant?: TypographyVariant;
  className?: string;
}
