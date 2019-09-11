import React from 'react';
import styled from 'styled-components';

const SiteContainer = () => (
  <SiteGrid>
    <span>Header</span>
    <span>Content</span>
  </SiteGrid>
);

const SiteGrid = styled.main`
  display: grid;
  grid-template-rows: 80px auto;
  height: 100%;
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

export default SiteContainer;
