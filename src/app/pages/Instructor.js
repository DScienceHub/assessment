import React, { useState } from 'react';
import {
  Container,
  CssBaseline,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import InputBase from '@material-ui/core/InputBase';
import awsClient from '../model/aws';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: 'hidden',
    paddingBottom: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  form: {
    marginTop: theme.spacing(1),
    padding: '2px 4px',
    width: 300,
  },
  input: {
    marginLeft: theme.spacing(1),
    width: 240,
  },
  iconButton: {
    marginRight: 0,
    paddingRight: 0,
  },
}));

export function validateEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
}

function Instructor() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleFormChange = (prop) => (event) => {
    switch (prop) {
      case 'email':
        setEmail(event.target.value);
        setEmailError('');
        break;
      default:
        console.debug(`Newsletter signup unknown handle`);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (validateEmail(email)) {
      try {
        const result = await awsClient.signUp(email);
        setLoading(false);
        if (result.response === 'success') {
          enqueueSnackbar('Successfully signed up', { variant: 'success' });
        } else if (result.response === 'failure' && result.failureMessage) {
          enqueueSnackbar(`Failed to signed up. ${result.failureMessage}`, {
            variant: 'error',
          });
        }
      } catch {
        setLoading(false);
        enqueueSnackbar('Service error. Please try again later.', {
          variant: 'error',
        });
      }
    } else {
      setLoading(false);
      enqueueSnackbar('Incorrect email address', {
        variant: 'error',
      });
    }
    console.debug(`Submitting with email ${email}`);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters className={classes.root} maxWidth={'xl'}>
        <Typography variant={'h3'}>Live Soon!</Typography>
        <Typography variant={'h6'}>
          Instructor application will be live and available for testing very
          soon
        </Typography>
        <Typography variant={'h6'}>{'Sign up to be notified'}</Typography>
        <Paper className={classes.form}>
          <form noValidate onSubmit={handleSubmit}>
            <InputBase
              required
              variant="outlined"
              name="email"
              id="email"
              label="Your Email"
              type={'email'}
              autoComplete="email"
              placeholder="Your Email"
              error={emailError !== ''}
              onChange={handleFormChange('email')}
              className={classes.input}
            />
            <IconButton
              type="submit"
              color={'primary'}
              disabled={loading}
              className={classes.iconButton}
            >
              <SendIcon />
            </IconButton>
          </form>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default Instructor;
