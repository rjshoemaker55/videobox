import React from 'react';
import { createUseStyles } from 'react-jss';
import Video from '../components/Video';
import VideoInfo from '../components/VideoInfo';
import { colors } from '../utilities/colors';

const VideoScreen = () => {
  const useStyles = createUseStyles({
    videoScreenWrapper: {
      backgroundColor: colors.darkPurple,
      height: '100%',
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.videoScreenWrapper}>
      <Video />
      <VideoInfo />
    </div>
  );
};

export default VideoScreen;
