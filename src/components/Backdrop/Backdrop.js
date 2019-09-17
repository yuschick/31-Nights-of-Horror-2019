import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LoadingScreen from '../LoadingScreen/LoadingScreen';
import theme from '../../theme';

const propTypes = {
  src: PropTypes.string.isRequired,
};

const Backdrop = ({ src }) => {
  const [loading, setLoading] = useState(true);
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
    <Wrapper>
      {loading ? <LoadingScreen /> : <BackdropContainer backdrop={src} />}
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
  width: 100%;
`;

Backdrop.propTypes = propTypes;

export default Backdrop;
