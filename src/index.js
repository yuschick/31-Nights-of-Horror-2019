import React, { Fragment } from 'react';
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
    box-sizing: border-box;
  }

  html, body {
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    font-family: ${theme.fonts.barlow};
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

  ul, li {
    list-style: none;
  }
`;

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <SiteContainer />
  </Fragment>,
  document.getElementById('root')
);
