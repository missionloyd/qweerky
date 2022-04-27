import { useEffect, useState } from 'react';
import Page from '../../components/shared/Page';
import Dashboard from '../../layouts/DashboardLayout/Dashboard';
import { getSongsFromPlaylistByPid } from '../../lib/queries';
import { SongFeed } from '../../components/shared/SongFeed';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const { slug } = context.params;
  
  return {
    props: { 
      res: await getSongsFromPlaylistByPid(slug),
      slug: slug
     }
  };
}

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
}));

function Playlist({ res, slug }) {
  const classes = useStyles();
  const router = useRouter()

  return (
    <Page
      title='Library'
    >
      <div className={classes.header}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Playlist Songs
        </Typography>
        <Button 
          color='primary'
          onClick={e => {router.push(`/addsongs/${slug}`)}}
        >
          Add Songs
        </Button>
      </div>
      <SongFeed res={res} slug={slug} />
    </Page>
  )
}

Playlist.layout = Dashboard;

export default Playlist;