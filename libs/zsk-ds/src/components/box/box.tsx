import { FunctionComponent as FC } from 'react';
import styled from 'styled-components';

type BoxProps = {
  as?: 'div' | 'section';
  flex?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  spacing?: number;
  children: React.ReactNode;
};

export const Box: FC<BoxProps> = ({
  as,
  flex,
  align,
  justify,
  spacing,
  children,
}: BoxProps) => {
  const styledBoxProps = { as, flex, align, justify, spacing };
  return <StyledBox {...styledBoxProps}>{children}</StyledBox>;
};

export default Box;

const StyledBox = styled.div<BoxProps>`
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  flex-direction: ${({ flex }) => flex ?? 'row'};
  align-items: ${({ align }) => align ?? 'flex-start'};
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  gap: ${({ spacing }) => spacing ?? 0}rem;
`;
