import { keyframes } from 'styled-components';

export const Stabbing = keyframes`
  to {
    transform: rotate(-90deg);
  }
`;

export const StabbingFlipped = keyframes`
  to {
    transform: scaleX(-1) rotate(-90deg);
  }
`;

export const ShowScore = score => keyframes`
  to {
    width: ${score * 10}px;
  }
`;

export const DelayFade = () => keyframes`
  to {
    opacity: 1;
  }
`;
