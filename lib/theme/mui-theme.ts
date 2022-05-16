import {createTheme} from '@mui/material';
import {red} from '@mui/material/colors';

const fontFamily = [
  'Montserrat',
  '"Noto Sans KR"',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
].join(',');

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily,
  },
});
