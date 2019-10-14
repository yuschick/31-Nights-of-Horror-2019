import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import theme from '../../theme';
import { ShowScore, DelayFade } from '../../utils/Animations';

const propTypes = {
  score: PropTypes.number.isRequired,
};

const MovieRating = ({ score }) => (
  <Track>
    <Score score={score}>
      <ScoreText>
        {score * 10}
        &nbsp;%
      </ScoreText>
    </Score>
  </Track>
);

const Track = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 15px;
  width: 100px;
`;

const Score = styled.div`
  align-items: center;
  animation: ${props => ShowScore(props.score)} 1s
    cubic-bezier(0.35, 0.21, 0.54, 1.31) forwards;
  background-color: ${props =>
    props.score < 7
      ? props.score < 5.7
        ? theme.colors.scoreBad
        : theme.colors.scoreMid
      : theme.colors.scoreHigh};
  background-image: url('https://www.transparenttextures.com/patterns/black-mamba.png');
  display: flex;
  height: 15px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 0;
`;

const ScoreText = styled.span`
  animation: ${DelayFade()} 0.25s 1s ease forwards;
  color: ${theme.colors.black};
  font-size: 0.9rem;
  opacity: 0;
  position: absolute;
`;

MovieRating.propTypes = propTypes;

export default MovieRating;
