import { createTheme } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#0070f3',
    },
    secondary: {
      main: '#0070f3',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    grey: {
      main: grey
    }
  },
});

export default theme;