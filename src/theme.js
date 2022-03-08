import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#0063B1',
      light: '#fff',
      dark: '#2D4260'
    },
    secondary: {
      main: '#757575',
      dark: '#000',
      light: '#fff'
    },
  },
});