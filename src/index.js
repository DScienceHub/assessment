import ReactDOM from 'react-dom';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import './index.css';
import 'fontsource-roboto';
import App from './app/App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import { SnackbarProvider } from 'notistack';

function Index() {
  const theme = createMuiTheme({
    palette: {
      primary: blue,
      type: 'light',
      background: {
        default: '#E0E0E0',
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            WebkitFontSmoothing: 'auto',
          },
        },
      },
    },
  });

  return (
    <React.StrictMode>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={5}
          preventDuplicate
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <App />
        </SnackbarProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
