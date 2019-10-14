import React, { useState, useEffect, Fragment } from 'react';
import { format, addDays } from 'date-fns';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

import Backdrop from '../components/Backdrop/Backdrop';
import MoviePanel from '../components/MoviePanel/MoviePanel';
import Loader from '../components/Loader/Loader';

import Movies from '../data/movies';
import Days from '../data/days';

import theme from '../theme';

const getTrailer = movie => {
  const { videos } = movie;
  const trailer = videos
    ? videos.results.find(vid => vid.type === 'Trailer')
    : null;

  return trailer ? trailer.key : movie.trailer;
};

const Oct1 = new Date('2019-10-1');
const MoviesContainer = () => {
  const [enhancedMovies, setEnhancedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const key = '84d2690223f00a8cc05141e0c91c56b8';

      const requests = Movies.map(async movie => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.movieId}?language=en-US&api_key=${key}&append_to_response=releases,videos`
        )
          .then(res => res.json())
          .then(details => ({ ...movie, ...details }));
        return data;
      });

      const allMovies = await Promise.all(requests);
      setEnhancedMovies(allMovies);
      setLoading(false);
    };

    fetchData();
  }, []);

  return loading || enhancedMovies.length < 30 ? (
    <Loader />
  ) : (
    <Fragment>
      {enhancedMovies.map(movie => (
        <LazyLoad key={movie.movieId} height="100vh" once offset={150}>
          <Backdrop
            key={movie.title}
            movieId={movie.movieId}
            src={movie.backdrop}
            trailer={getTrailer(movie)}
          />
        </LazyLoad>
      ))}
      <GradientOverlay />
      <PanelWrapper>
        {enhancedMovies.map((movie, i) => (
          <LazyLoad key={movie.title} height="110vh" once offset={150}>
            <MoviePanel
              loading={loading}
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
};

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
