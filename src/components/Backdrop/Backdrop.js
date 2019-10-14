import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LoadingScreen from '../LoadingScreen/LoadingScreen';
import theme from '../../theme';
import PlayIcon from '../../assets/icon-play.svg';

const propTypes = {
  src: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
  trailer: PropTypes.string.isRequired,
};

const Backdrop = ({ src, movieId, trailer }) => {
  const [loading, setLoading] = useState(true);
  const [playTrailer, setPlayTrailer] = useState(false);

  useEffect(() => {
    const img = document.createElement('img');
    img.src = src;

    img.addEventListener(
      'load',
      () => {
        setLoading(false);
      },
      false
    );
  });

  return (
    <Wrapper id={`backdrop-${movieId}`}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Fragment>
          {playTrailer && (
            <CloseContainer onClick={() => setPlayTrailer(false)}>
              CLOSE
            </CloseContainer>
          )}
          <Play onClick={() => setPlayTrailer(true)} />

          <IFrame
            src={`https://www.youtube.com/embed/${trailer}?controls=0&autoplay=${
              playTrailer ? '1' : '0'
            }`}
            fade={playTrailer}
          />
          <BackdropContainer backdrop={src} fade={playTrailer} />
        </Fragment>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - ${theme.size.header.height});
  margin-bottom: ${theme.space.xl};
  position: relative;
  width: 100%;
`;

const BackdropContainer = styled.div`
  background: url(${props => props.backdrop}) ${theme.colors.black};
  background-position: center;
  filter: blur(8px);
  height: calc(100vh - ${theme.size.header.height});
  opacity: ${props => (props.fade ? 0 : 1)};
  transition: opacity 0.75s ease;
  width: 100%;
`;

const Play = styled.img.attrs(() => ({
  src: PlayIcon,
  alt: 'Play trailer',
}))`
  cursor: pointer;
  height: auto;
  left: 50%;
  margin: 0 auto;
  position: absolute;
  opacity: 0.25;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease;
  width: 75px;
  z-index: 20;

  :hover {
    opacity: 0.4;
    transform: translate(-50%, -50%) scale(1.05);
  }

  :active {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(0.9);
  }
`;

const IFrame = styled.iframe.attrs(() => ({
  allow:
    'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
  frameBorder: 0,
  height: '100%',
  src: props => props.src,
  width: '100%',
}))`
  height: 100%;
  opacity: ${props => (props.fade ? 1 : 0)};
  pointer-events: none;
  position: absolute;
  transition: opacity 0.75s ease;
  width: 100%;
  z-index: 21;
`;

const CloseContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  padding: ${theme.space.md};
  position: absolute;
  right: ${theme.space.lg};
  top: ${theme.space.lg};
  z-index: 100;
`;

Backdrop.propTypes = propTypes;

export default Backdrop;
