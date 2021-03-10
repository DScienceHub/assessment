import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Brightness4, Brightness7, Home } from '@material-ui/icons';
import { Grid, Icon, Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    marginTop: 0,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.A200,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function AppTopBar(props) {
  const { theme, onThemeChange } = props;
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Toolbar>
          <Grid
            container
            direction={'row'}
            alignItems={'center'}
            justify={'space-between'}
          >
            <Grid item className={classes.row}>
              <Home />
            </Grid>
            <Grid item>
              <Typography className={classes.title} variant="h6" noWrap>
                Data Science Hub Assessment Project
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title={'Toggle light/dark theme'}>
                <IconButton
                  aria-label="theme select"
                  color="inherit"
                  onClick={onThemeChange}
                >
                  {theme === 'light' ? <Brightness4 /> : <Brightness7 />}
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
