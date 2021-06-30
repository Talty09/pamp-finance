import {createMuiTheme} from '@material-ui/core';
import "typeface-forum";
import corleoneDueFont from '../assets/fonts/CorleoneDue.TTF';

export const fontWeightLight = 300;
export const fontWeightRegular = 400;
export const fontWeightMedium = 500;
export const fontWeight700 = 700;
export const fontWeightBold = 800;

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Corleone Due',
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
  }
});