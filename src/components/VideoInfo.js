import React from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import moment from 'moment';
import { colors } from '../utilities/colors';
import { getPageContent } from '../redux/slices/contentSlice';

const VideoInfo = () => {
  const video = useSelector(getPageContent).content.data;
  const useStyles = createUseStyles({
    videoInfoWrapper: {
      padding: '5px',
      display: 'table',
      margin: 'auto',
      marginTop: '10px',
    },
    titleText: {
      fontSize: '25px',
      fontWeight: 'bold',
      color: 'white',
    },
    channelText: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: colors.lemon,
    },
    dateText: {
      fontSize: '18px',
      color: colors.lemon,
    },
    descriptionText: {
      fontSize: '18px',
      color: colors.lemon,
    },
  });
  const classes = useStyles();

  const {
    id,
    snippet: { channelId, channelTitle, description, publishedAt, title },
  } = video;

  const publishedDate = moment(publishedAt.slice(0, 10)).format(
    'dddd, MMMM Do YYYY'
  );

  return (
    <div className={classes.videoInfoWrapper}>
      <div className={classes.titleText}>{title}</div>
      <div className={classes.channelText}>{channelTitle}</div>
      <div className={classes.dateText}>{publishedDate}</div>
      <div className={classes.descriptionText}>{description}</div>
    </div>
  );
};

export default VideoInfo;
