import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import theme from './theme';

import SiteContainer from './containers/SiteContainer';

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-size: 100%;
    margin: 0;
    padding: 0;
	  vertical-align: baseline
  }

  *,
*::before,
*::after {
  box-sizing: inherit;
}

  html, body {
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    height: 100%;
    -webkit-backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
  }

  img {
    border: 0;
    height: auto;
    max-width: 100%;
  }
`;

ReactDOM.render(
  <GlobalStyle>
    <SiteContainer />
  </GlobalStyle>,
  document.getElementById('root')
);
