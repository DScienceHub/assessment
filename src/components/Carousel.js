import React from 'react';
import { blue } from '@material-ui/core/colors';
import AutoRotatingCarousel from './carousel/AutoRotatingCarousel';
import Slide from './carousel/Slide';
import { Box, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import sleek from '../assets/sleek.png';
import track from '../assets/track.png';
import customize from '../assets/customize.png';
import code from '../assets/code.png';
import privacy from '../assets/privacy.png';

const useStyles = makeStyles((theme) => ({
  image: {
    objectFit: 'contain',
  },
}));

const Carousel = (props) => {
  const { isMobile, width, height } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Box width={width} height={height}>
        <AutoRotatingCarousel
          open={true}
          interval={7000}
          autoplay={true}
          mobile={isMobile}
          style={{ position: 'absolute' }}
        >
          <Slide
            media={<img src={sleek} className={classes.image} />}
            mediaBackgroundStyle={{ backgroundColor: blue[400] }}
            style={{ backgroundColor: blue[600] }}
            title="Simple And Sleek"
            subtitle="All your exam questions and answers in one screen with with no distractions and no unnecessary navigation"
          />
          <Slide
            media={<img src={track} className={classes.image} />}
            mediaBackgroundStyle={{ backgroundColor: blue[400] }}
            style={{ backgroundColor: blue[600] }}
            title="Keep Track Of Everything"
            subtitle="Never miss a question again. Mark answers you want to go back to and get those finished ones out of the way to focus on what matters. Keep track of all your answers in one place and rest assured you'll be reminded of anything you may miss before submitting."
          />
          <Slide
            media={<img src={customize} className={classes.image} />}
            mediaBackgroundStyle={{ backgroundColor: blue[400] }}
            style={{ backgroundColor: blue[600] }}
            title="Your Exams, Your Way"
            subtitle="Highly customizable with an expanding range of options to tailor your exam experience to what makes you comfortable and in the zone."
          />
          <Slide
            media={<img src={code} className={classes.image} />}
            mediaBackgroundStyle={{ backgroundColor: blue[400] }}
            style={{ backgroundColor: blue[600] }}
            title="Integrated Code Editor"
            subtitle="Coding exams have never been easier with a fully-featured integrated code editor that offers all the functionality you're used to in an IDE editor."
          />
          <Slide
            media={<img src={privacy} className={classes.image} />}
            mediaBackgroundStyle={{ backgroundColor: blue[400] }}
            style={{ backgroundColor: blue[600] }}
            title="Your Privacy Matters"
            subtitle="Clear and transparent research participation rules. Your rights are protected and your data is stored securely, anonymously and with several facilities in place to protect your privacy."
          />
        </AutoRotatingCarousel>
      </Box>
    </React.Fragment>
  );
};

Carousel.propTypes = {
  isMobile: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Carousel;
