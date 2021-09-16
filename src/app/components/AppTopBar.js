import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import logoLight from '../../assets/images/logo-lightBg.png';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    marginTop: 0,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
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
  button: {
    height: 80,
    textTransform: 'none',
  },
}));

function AppTopBar() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Toolbar>
          <Grid
            container
            direction={'row'}
            alignItems={'center'}
            justify={'flex-start'}
            spacing={2}
          >
            <Grid item>
              <Button
                disableRipple
                disableFocusRipple
                disableTouchRipple
                disableElevation
                className={classes.button}
                variant={'text'}
                startIcon={
                  <img
                    onClick={() => {
                      history.push('/assessment');
                    }}
                    src={logoLight}
                    width={60}
                  />
                }
              >
                <Typography
                  variant="h5"
                  onClick={() => {
                    history.push('/assessment');
                  }}
                >
                  Dr. Proctor
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant={'text'}
                style={{ height: 65 }}
                onClick={() => history.push('/instructor')}
              >
                Instructors
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppTopBar.propTypes = {
  theme: PropTypes.string,
  onThemeChange: PropTypes.func,
};

export default AppTopBar;
