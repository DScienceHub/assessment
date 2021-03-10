import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

import './index.css';
import 'fontsource-roboto';
import App from './App';
import { logger } from './common';
import AppTopBar from './components/AppTopBar';

import { ElevationScroll } from './components/TitlebarScroll';

function Index() {
  const [selectedTheme, setSelectedTheme] = useState('light');

  const handleThemeChange = () => {
    if (selectedTheme === 'light') setSelectedTheme('dark');
    else setSelectedTheme('light');
  };

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: blue,
          type: selectedTheme,
        },
      }),
    [selectedTheme]
  );

  return (
    <React.StrictMode>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={1}
          preventDuplicate
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <ElevationScroll>
            <AppTopBar
              theme={selectedTheme}
              onThemeChange={handleThemeChange}
            />
          </ElevationScroll>
          <App />
        </SnackbarProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
