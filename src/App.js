import React, { useEffect, useState } from 'react';
import {
  Container,
  CssBaseline,
  Divider,
  Grid,
  makeStyles,
  Tooltip,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWindows,
  faLinux,
  faApple,
} from '@fortawesome/free-brands-svg-icons';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Carousel from './components/Carousel';
import useWindowDimensions from './hooks/useWindowDimensions';
import awsClient from './model/client';

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
  list: {
    justifyContent: 'center',
    alignItems: 'center',
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

const DownloadButton = withStyles((theme) => ({
  root: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}))(IconButton);

function App() {
  const classes = useStyles();
  const defaultVersion = { url: '', version: '', date: '' };
  const { height, width } = useWindowDimensions();
  const [windowsDownload, setWindowsDownload] = useState(defaultVersion);
  const [macDownload, setMacDownload] = useState(defaultVersion);
  const [linuxDownload, setLinuxDownload] = useState(defaultVersion);
  const [releaseNotes, setReleaseNotes] = useState(false);
  const matches = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    (async () => {
      setWindowsDownload(await awsClient.getLatestWindowsVersion());
      setLinuxDownload(await awsClient.getLatestLinuxVersion());
      setMacDownload(await awsClient.getLatestMacVersion());
    })();
  }, []);

  const handleShowReleaseNotes = (os) => {
    switch (os) {
      case 'linux':
        setReleaseNotes(linuxReleaseNotes());
        break;
      case 'windows':
        setReleaseNotes(windowsReleaseNotes());
        break;
      case 'mac':
        setReleaseNotes(macReleaseNotes());
        break;
    }
  };

  const macReleaseNotes = () => {
    return (
      <Grid item xs={12}>
        <Typography variant={'h5'} className={classes.header}>
          MacOS Notes
        </Typography>
        <ul className={classes.list}>
          <Typography variant={'body1'}>
            • Currently, MacOS client has no automatic updates. We are working
            on adding update notifications and automatic delivery for Mac. If
            you download the client now, please make sure to check back here
            within a couple of weeks for an updated version that will have an
            integrated solution for automatic updates.
          </Typography>
          <Typography variant={'body1'}>
            • The application requires the following permissions on first
            launch: <i>Webcam</i>, <i>Microphone</i>, <i>Desktop Capture</i>,{' '}
            <i>Keystroke Capture</i>. Some permissions require admin
            authorization and for the application to be restarted. Please grant
            all permissions and restart the application when prompted in
            settings.
          </Typography>
        </ul>
      </Grid>
    );
  };

  const linuxReleaseNotes = () => {
    return (
      <Grid item xs={12}>
        <Typography variant={'h5'} className={classes.header}>
          Linux Notes
        </Typography>
        <ul className={classes.list}>
          <Typography variant={'body1'}>
            • Linux client has been tested and known to work on Debian and
            Fedora based distributions. If you have a different distribution you
            can try the client and let us know if you run into any issues.
          </Typography>
          <Typography variant={'body1'}>
            • The client requires no special permissions to work.
          </Typography>
        </ul>
      </Grid>
    );
  };

  const windowsReleaseNotes = () => {
    return (
      <Grid item xs={12}>
        <Typography variant={'h5'} className={classes.header}>
          Windows Notes
        </Typography>
        <ul className={classes.list}>
          <Typography variant={'body1'}>
            • Windows client requires firewall permissions on first launch.
            Please be sure to grant firewall access to both public and private
            networks when prompted to do so when the application starts for the
            first time.
          </Typography>
        </ul>
      </Grid>
    );
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root} maxWidth={'xl'} disableGutters>
        <Carousel width={width} height={height - 68} isMobile={matches} />
        <Typography variant={'h3'} className={classes.header}>
          Download
        </Typography>
        <Grid
          container
          direction={'row'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item>
            <Container className={classes.column}>
              <Tooltip placement={'top'} title={'Download Windows .exe'}>
                <DownloadButton
                  disableFocusRipple
                  disableRipple
                  size={'large'}
                  href={windowsDownload.url}
                  onClick={() => {
                    handleShowReleaseNotes('windows');
                  }}
                >
                  <FontAwesomeIcon icon={faWindows} size={'6x'} />
                </DownloadButton>
              </Tooltip>
              <Typography variant={'caption'}>
                Version {windowsDownload.version}
              </Typography>
              <Typography variant={'caption'}>
                Released {windowsDownload.date}
              </Typography>
            </Container>
          </Grid>
          <Grid item>
            <Container className={classes.column}>
              <Tooltip placement={'top'} title={'Download MacOS .dmg'}>
                <DownloadButton
                  disableFocusRipple
                  disableRipple
                  size={'large'}
                  href={macDownload.url}
                  onClick={() => {
                    handleShowReleaseNotes('mac');
                  }}
                >
                  <FontAwesomeIcon icon={faApple} size={'6x'} />
                </DownloadButton>
              </Tooltip>
              <Typography variant={'caption'}>
                Version {macDownload.version}
              </Typography>
              <Typography variant={'caption'}>
                Released {macDownload.date}
              </Typography>
            </Container>
          </Grid>
          <Grid item>
            <Container className={classes.column}>
              <Tooltip placement={'top'} title={'Download Linux .AppImage'}>
                <DownloadButton
                  disableFocusRipple
                  disableRipple
                  size={'large'}
                  href={linuxDownload.url}
                  onClick={() => {
                    handleShowReleaseNotes('linux');
                  }}
                >
                  <FontAwesomeIcon icon={faLinux} size={'6x'} />
                </DownloadButton>
              </Tooltip>
              <Typography variant={'caption'}>
                Version {linuxDownload.version}
              </Typography>
              <Typography variant={'caption'}>
                Released {linuxDownload.date}
              </Typography>
            </Container>
          </Grid>
          {releaseNotes}
        </Grid>
        <Divider className={classes.divider} />
        <Typography variant={'h4'} className={classes.header}>
          Important Information
        </Typography>
        <ul className={classes.list}>
          <Typography variant={'h6'}>
            • This application is part of a research project to create
            privacy-aware remote exam proctoring software.
          </Typography>
          <Typography variant={'h6'}>
            • This application is currently in beta testing. Analytics data is
            automatically collected in anonymized format and communicated over
            encrypted channels
          </Typography>
          <Typography variant={'h6'}>
            • Any data collected through this application is subject to The
            American University in Cairo Rules on Informed Consent in research
            projects. You may find the full details of the consent{' '}
            <a
              href={
                'https://datasciencehub.s3.amazonaws.com/Informed+Consent+Rules.pdf'
              }
            >
              here
            </a>
            .
          </Typography>
          <Typography variant={'h6'}>
            • By participating in research testing of this application you agree
            to have your data collected and used only in anonymized format to
            further the goals of the project.
          </Typography>
          <Typography variant={'h6'}>
            • You must be at least 18 years old to participate in research
            testing. If you are under 18 you may still make use of the
            application and your data will not be used in our research.
          </Typography>
          <Typography variant={'h6'}>
            • Your data is only accessed in anonymous format by the project
            researchers. No third parties have access to your data.
          </Typography>
          <Typography variant={'h6'}>
            • If you have participated in research testing and would like your
            data to be deleted and withdraw your agreement, please contact
            datasciencehub@aucegypt.edu
          </Typography>
        </ul>
      </Container>
    </React.Fragment>
  );
}

export default App;
