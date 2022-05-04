import { render } from '@testing-library/react';
import { Link } from '../..';

import Navbar from './navbar';

const pages: Link[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

describe('SharedComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navbar pages={pages} />);
    expect(baseElement).toBeTruthy();
  });
});
