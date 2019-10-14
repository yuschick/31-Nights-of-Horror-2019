import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  trailer: PropTypes.string.isRequired,
};

const MovieTrailer = ({ trailer }) => {
  console.log(trailer);
  return (
    <Wrapper>
      <span>jlkjlkj</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

MovieTrailer.propTypes = propTypes;

export default MovieTrailer;
