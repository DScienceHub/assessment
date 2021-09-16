import React from 'react';
import { makeStyles } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ElevationScroll } from './components/TitlebarScroll';
import AppTopBar from './components/AppTopBar';
import Instructor from './pages/Instructor';
import Student from './pages/Student';

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: 'hidden',
    paddingBottom: theme.spacing(10),
  },
  header: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    width: '100%',
    textAlign: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  return (
    <BrowserRouter>
      <ElevationScroll>
        <AppTopBar />
      </ElevationScroll>
      <Switch>
        <Route
          exact
          path="/instructor"
          render={(props) => <Instructor {...props} />}
        />
        <Route
          exact
          path={['/assessment', '/']}
          render={(props) => <Student {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
