import { FunctionComponent as FC } from 'react';
import { HeaderTitle, StyledHeader } from './header.style';

export const Header: FC = () => {
  return (
    <StyledHeader>
      <HeaderTitle>Find the word</HeaderTitle>
    </StyledHeader>
  );
};
