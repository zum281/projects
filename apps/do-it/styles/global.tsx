import { Global, css } from '@emotion/react';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }
`;

export const GlobalCSS = () => <Global styles={globalStyles} />;
