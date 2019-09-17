import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PlayIcon from '../../assets/icon-play.svg';
import theme from '../../theme';

import MovieContentContainer from '../MovieContentContainer/MovieContentContainer';
import Loader from '../Loader/Loader';

const propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    day: PropTypes.string.isRequired,
    backdrop: PropTypes.string.isRequired,
    movieId: PropTypes.number.isRequired,
    services: PropTypes.shape({
      netflix: PropTypes.string,
      hulu: PropTypes.string,
      shudder: PropTypes.string,
      amazon: PropTypes.string,
      youtube: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

const MoviePanel = ({ movie }) => {
  const [data, setData] = useState(movie);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { movieId: id } = movie;
    const key = '84d2690223f00a8cc05141e0c91c56b8';

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${key}&append_to_response=releases,videos`
    )
      .then(res => res.json())
      .then(details => setData({ ...data, ...details }))
      .then(() => setLoading(false));
  }, []);

  return (
    <PanelSection key={data.movieId} id={`panel-${data.movieId}`}>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Play />
          <MovieContentContainer data={data} />
        </Fragment>
      )}
    </PanelSection>
  );
};

const PanelSection = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: minmax(25%, 50%) auto;
  grid-template-areas:
    'open open'
    'content .';
  height: calc(100vh - ${theme.size.header.height});
  margin: 0 auto;
  max-width: ${theme.size.content.maxWidth};
  position: relative;
  width: 100%;
`;

const Play = styled.img.attrs(() => ({
  src: PlayIcon,
  alt: 'Play trailer',
}))`
  align-self: end;
  cursor: pointer;
  grid-area: open;
  height: auto;
  margin: 0 auto;
  opacity: 0.25;
  transition: all 0.2s ease;
  width: 75px;

  :hover {
    opacity: 0.4;
    transform: scale(1.05);
  }

  :active {
    opacity: 0.6;
    transform: scale(0.9);
  }
`;

MoviePanel.propTypes = propTypes;

export default MoviePanel;
