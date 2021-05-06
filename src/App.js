import React, { useEffect, useState } from 'react';
import {
  Container,
  CssBaseline,
  Divider,
  Grid,
  makeStyles,
} from '@material-ui/core';
import {
  faWindows,
  faLinux,
  faApple,
} from '@fortawesome/free-brands-svg-icons';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import DownloadCard from './components/DownloadCard';
import Disclaimer from './components/Disclaimer';
import Carousel from './components/Carousel';
import useWindowDimensions from './hooks/useWindowDimensions';
import awsClient from './model/client';
import FAQ from './components/FAQ';

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
  const classes = useStyles();
  const defaultVersion = { url: '', version: '', date: '' };
  const { width, height } = useWindowDimensions();
  const [windowsDownload, setWindowsDownload] = useState(defaultVersion);
  const [macDownload, setMacDownload] = useState(defaultVersion);
  const [linuxDownload, setLinuxDownload] = useState(defaultVersion);
  const matches = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    (async () => {
      setWindowsDownload(await awsClient.getLatestWindowsVersion());
      setLinuxDownload(await awsClient.getLatestLinuxVersion());
      setMacDownload(await awsClient.getLatestMacVersion());
    })();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root} maxWidth={'xl'} disableGutters>
        <Carousel width={width} height={height - 68} isMobile={matches} />
        <Typography variant={'h4'} className={classes.header}>
          Download
        </Typography>
        <Grid
          container
          direction={'row'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item>
            <DownloadCard
              title={'Download Windows .exe'}
              icon={faWindows}
              downloadInfo={windowsDownload}
            />
          </Grid>
          <Grid item>
            <DownloadCard
              title={'Download MacOS .dmg'}
              icon={faApple}
              downloadInfo={macDownload}
            />
          </Grid>
          <Grid item>
            <DownloadCard
              title={'Download Linux .AppImage'}
              icon={faLinux}
              downloadInfo={linuxDownload}
            />
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Typography className={classes.header} variant={'h4'}>
          Frequently Asked Questions
        </Typography>
        <FAQ
          style={{
            width: 0.75 * width,
            height: 0.5 * height,
            overflow: 'auto',
          }}
        />
        <Divider />
        <Typography variant={'h4'} className={classes.header}>
          Important Information
        </Typography>
        <Disclaimer
          style={{
            width: 0.85 * width,
          }}
        />
      </Container>
    </React.Fragment>
  );
}

export default App;
