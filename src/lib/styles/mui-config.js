import {createMuiTheme} from '@material-ui/core';
import {lighten} from '@material-ui/core/styles';
import "typeface-forum";


export const fontWeightLight = 300;
export const fontWeightRegular = 400;
export const fontWeightMedium = 500;
export const fontWeight700 = 700;
export const fontWeightBold = 800;

const palette = {
  primary: {
    dark: '#033C5B',
    main: '#00A7E1',
    contrastText: '#fff',
  },
  secondary: {
    main: '#00A47E',
    dark: '#00755a',
    contrastText: '#fff',
  },
  grey: {
    dark: '#333333',
    main: '#676767',
    light: '#e6e6e6',
    secondary: '#ededed',
  },
  neutral: {
    dark: '#446073',
    main: '#5B7E96',
    light: '#D0DD28',
  },
  recommended: {
    main: '#DD5F13',
    contrastText: '#fff',
  },
  white: {
    light: '#ffffff',
    main: '#f0f8ff',
    dark: '#eeeeee',
  },
  blue: {
    light: '#D8DDE6',
  },
  advancedOptions: {
    light: lighten('#F9F9F9', 1),
    main: lighten('#1F6CB0', .95),
    dark: lighten('#009CD3', .9),
  },
  error: {
    main: '#c30505',
  },
};

export const theme = createMuiTheme({
  palette,
  typography: {
    fontFamily: [
      'Corleone Due',
      'Proxima Nova',
      'Forum',
      '-apple-system',
      'BlinkMacSystemFont',
      'Arial',
      'sans-serif'
    ].join(','),
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          width: '0.4em',
          '@media print': {
            width: 'auto',
          },
        },
        '*::-webkit-scrollbar-track': {
          boxShadow: `inset 0 0 6px ${palette.grey.light}`,
          webkitBoxShadow: `inset 0 0 6px ${palette.grey.light}`,
          '@media print': {
            boxShadow: 'unset',
            webkitBoxShadow: 'unset',
          },
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: `${palette.grey.main}`,
          outline: '1px solid',
          outlineColor: `${palette.grey.main}`,
          '@media print': {
            backgroundColor: 'unset',
            outline: 'unset',
            outlineColor: 'unset',
          },
        },

        '.v2': {
          '& .MuiFormLabel-root': {
            fontWeight: `${fontWeightBold} !important`,
          },
          '& .MuiTableCell-root': {
            fontWeight: `${fontWeight700} !important`,
            fontSize: '1rem',
          },
          '& .recharts-legend-item-text': {
            fontWeight: `${fontWeight700} !important`,
          },
          '& h3': {
            fontWeight: `${fontWeightBold} !important`,
          },
          '& .strong': {
            fontWeight: `${fontWeight700} !important`,
          },
        },

      },
    },
  },
});