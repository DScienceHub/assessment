import React from 'react';
import {
  Button,
  CssBaseline,
  GridList,
  GridListTile,
  makeStyles,
} from '@material-ui/core';
import image from '../../assets/images/customize.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '1000',
  },
}));

const tileData = [
  {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
];

function Landing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <GridList cellHeight={600} className={classes.gridList} cols={2}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </React.Fragment>
  );
}

export default Landing;
