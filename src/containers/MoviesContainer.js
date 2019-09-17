import React, { Fragment } from 'react';
import { format, addDays } from 'date-fns';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

import Backdrop from '../components/Backdrop/Backdrop';
import MoviePanel from '../components/MoviePanel/MoviePanel';
import Movies from '../data/movies';
import Days from '../data/days';

import theme from '../theme';

const Oct1 = new Date('2019-10-1');
const MoviesContainer = () => (
  <Fragment>
    {Movies.map(movie => (
      <LazyLoad key={movie.movieId} height="100vh" once offset={150}>
        <Backdrop key={movie.title} src={movie.backdrop} />
      </LazyLoad>
    ))}
    <GradientOverlay />
    <PanelWrapper>
      {Movies.map((movie, i) => (
        <LazyLoad key={movie.title} height="110vh" once offset={150}>
          <MoviePanel
            key={movie.title}
            movie={{
              ...movie,
              date: i + 1,
              day:
                i === 30
                  ? Days.Halloween
                  : Days[format(addDays(Oct1, i), 'EEEE')],
            }}
          />
        </LazyLoad>
      ))}
    </PanelWrapper>
  </Fragment>
);

const GradientOverlay = styled.div`
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#000000',GradientType=0 );
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

const PanelWrapper = styled.article`
  display: grid;
  grid-template-rows: 100vh;
  grid-gap: ${theme.space.xl};
  position: absolute;
  width: 100%;
  z-index: 2;
`;

export default MoviesContainer;
