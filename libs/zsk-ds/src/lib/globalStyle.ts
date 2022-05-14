import { createGlobalStyle } from 'styled-components';
import { theme } from '../lib/theme';
import { palette } from '../lib/variables/colors';
import { font } from '../lib/variables/typography';
import { radius } from '../lib/variables/radius';
import { spacing } from '../lib/variables/spacing';

const global = {
  '*': {
    margin: '0',
    padding: '0',
    'box-sizing': 'border-box',
  },
  '*:before': {
    margin: '0',
    padding: '0',
    'box-sizing': 'border-box',
  },
  '*:after': {
    margin: '0',
    padding: '0',
    'box-sizing': 'border-box',
  },
};

export const GlobalCSS = createGlobalStyle({
  ':root': {
    ...palette.blue,
    ...palette.green,
    ...palette.red,
    ...palette.neutral,
    ...radius,
    ...spacing,
    ...font.family,
    ...font.size,
    ...font.weight,
  },
  ...global,
  ...theme,
});
