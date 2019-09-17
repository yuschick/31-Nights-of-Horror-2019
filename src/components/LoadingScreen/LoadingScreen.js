import React from 'react';
import styled, { css } from 'styled-components';

import { Stabbing, StabbingFlipped } from '../../utils/Animations';
import LoadingStab from '../../assets/stab.svg';

const LoadingScreen = () => (
  <Container>
    <Image />
    <Image flipped />
  </Container>
);

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  opacity: 0.5;
  width: 100%;
`;

const Image = styled.img.attrs(() => ({
  src: LoadingStab,
  alt: 'Loading backdrop',
}))`
  animation: ${Stabbing} 0.35s ease infinite alternate;
  height: auto;
  transform-origin: left center;
  width: 100px;

  ${props =>
    props.flipped &&
    css`
      animation: ${StabbingFlipped} 0.35s ease infinite alternate;
      margin-left: 0rem;
      transform: scaleX(-1);
    `};
`;

export default LoadingScreen;
