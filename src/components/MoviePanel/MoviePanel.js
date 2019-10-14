import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  loading: PropTypes.bool.isRequired,
};

const MoviePanel = ({ movie, loading }) => (
  <PanelSection key={movie.movieId} id={`panel-${movie.movieId}`}>
    {loading ? (
      <Loader />
    ) : (
      <Fragment>
        <span />
        <MovieContentContainer data={movie} />
      </Fragment>
    )}
  </PanelSection>
);

const PanelSection = styled.section`
  display: grid;
  grid-template-rows: minmax(25%, 50%) auto;
  grid-template-areas:
    '.'
    'content';
  height: calc(100vh - ${theme.size.header.height});
  margin: 0 auto;
  max-width: ${theme.size.content.maxWidth};
  position: relative;
  width: 100%;
`;

MoviePanel.propTypes = propTypes;

export default MoviePanel;
