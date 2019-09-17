import React from 'react';
import styled from 'styled-components';

import MoviesContainer from './MoviesContainer';
import Header from '../components/Header/Header';
import theme from '../theme';

const SiteContainer = () => (
  <SiteGrid>
    <Header />
    <MoviesContainer />
  </SiteGrid>
);

const SiteGrid = styled.main`
  display: grid;
  grid-template-rows: ${theme.size.header.height} auto;
  height: 100%;
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

export default SiteContainer;
