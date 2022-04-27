import { useEffect, useState } from 'react';
import Page from '../../components/shared/Page';
import Dashboard from '../../layouts/DashboardLayout/Dashboard';
import { getSongsFromPlaylistByPid } from '../../lib/queries';
import { SongFeed } from '../../components/shared/SongFeed';
import { Typography } from '@material-ui/core';

export async function getServerSideProps(context) {
  const { slug } = context.params;
  
  return {
    props: { 
      res: await getSongsFromPlaylistByPid(slug)
     }
  };
}


function Library({ res }) {
  const [songs, setSongs] = useState(res);

  return (
    <Page
      title='Library'
    >
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Songs
      </Typography>
      <SongFeed res={res} />
    </Page>
  )
}

Library.layout = Dashboard;

export default Library;