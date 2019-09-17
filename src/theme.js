const base = 12;

export default {
  colors: {
    black: 'rgb(0,0,0)',
    white: 'rgb(255,255,255)',

    primary: '#4b0404',
    secondary: '#8c0f0f',
    tertiary: '#302f2f',
    darkGrey: '#444',
    lightGrey: '#b5b5b5',

    scoreBad: '#EE6352',
    scoreMid: '#FFF07C',
    scoreHigh: '#74ea80',
    scoreTrack: '#818181',
  },
  fonts: {
    barlow: '"Barlow", sans-serif',
    raleway: '"Raleway", sans-serif',
  },
  size: {
    header: {
      height: '64px',
    },
    content: {
      maxWidth: '1280px',
    },
  },
  space: {
    default: `${base}px`,
    xs: `${base / 4}px`,
    sm: `${base / 3}px`,
    md: `${base / 2}px`,
    lg: `${base * 2}px`,
    xl: `${base * 3}px`,
  },
};
