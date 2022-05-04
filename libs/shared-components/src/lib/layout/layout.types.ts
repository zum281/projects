import { ReactNode } from 'react';
import { Link } from '../..';

export type LayoutProps = {
  title: string;
  description: string;
  pages?: Link[];
  children: ReactNode;
};
