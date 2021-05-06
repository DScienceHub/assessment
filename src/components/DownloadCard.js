import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { Container, makeStyles, Tooltip } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const DownloadButton = withStyles((theme) => ({
  root: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}))(IconButton);

const useStyles = makeStyles((theme) => ({
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function DownloadCard(props) {
  const { downloadInfo, title, icon } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.column}>
        <Tooltip placement={'top'} title={title}>
          <DownloadButton
            disableFocusRipple
            disableRipple
            size={'medium'}
            href={downloadInfo.url}
          >
            <FontAwesomeIcon icon={icon} size={'6x'} />
          </DownloadButton>
        </Tooltip>
        <Typography variant={'caption'}>
          Version {downloadInfo.version}
        </Typography>
        <Typography variant={'caption'}>
          Released {downloadInfo.date}
        </Typography>
      </Container>
    </React.Fragment>
  );
}

DownloadCard.propTypes = {
  downloadInfo: PropTypes.object,
  title: PropTypes.string,
  icon: PropTypes.any,
};

export default DownloadCard;
