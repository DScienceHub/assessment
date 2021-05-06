import React from 'react';
import { AccordionActions, Container, CssBaseline } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import questions from '../assets/docs/faq.json';
import smartscreenBase from '../assets/images/smartscreenBase.png';
import smartscreenRun from '../assets/images/smartscreenRun.png';
import macUnverifiedWarning from '../assets/images/macUnverifiedWarning.png';
import macOpenAnyway from '../assets/images/macOpenAnyway.png';
import { makeStyles } from '@material-ui/core/styles';

const attachments = {
  smartscreenBase: smartscreenBase,
  smartscreenRun: smartscreenRun,
  macUnverifiedWarning: macUnverifiedWarning,
  macOpenAnyway: macOpenAnyway,
};

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const useEntryStyles = makeStyles((theme) => ({
  header: {
    marginLeft: 15,
    marginBottom: 15,
    marginTop: 15,
  },
  justifyLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  span: {
    whiteSpace: 'pre-wrap',
  },
}));

function FAQEntry(props) {
  const { entry } = props;
  const classes = useEntryStyles();

  return (
    <React.Fragment>
      <Typography className={classes.header} variant={'h5'}>
        {entry}
      </Typography>
      {questions[entry].map((question, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant={'h6'}>{question.title}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.justifyLeft}>
            <Typography
              variant={'body1'}
              component={'span'}
              className={classes.span}
            >
              <ReactMarkdown>{question.content}</ReactMarkdown>
            </Typography>
          </AccordionDetails>
          <AccordionActions className={classes.justifyLeft}>
            {'attachments' in question
              ? question.attachments.map((attachment, index) => (
                  <img
                    key={index}
                    alt={attachment}
                    height={400}
                    src={attachments[attachment]}
                  />
                ))
              : null}
          </AccordionActions>
        </Accordion>
      ))}
    </React.Fragment>
  );
}

FAQEntry.propTypes = {
  entry: PropTypes.string,
};

function FAQ(props) {
  const { ...forwardProps } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters {...forwardProps}>
        <FAQEntry entry={'General'} />
        <FAQEntry entry={'MacOS'} />
        <FAQEntry entry={'Windows'} />
        <FAQEntry entry={'Linux'} />
      </Container>
    </React.Fragment>
  );
}

export default FAQ;
