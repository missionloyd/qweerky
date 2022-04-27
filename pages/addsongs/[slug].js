import { useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import Page from '../../components/shared/Page';
import Dashboard from '../../layouts/DashboardLayout/Dashboard';
import { getAllSongs, getArtistNameWithId } from '../../lib/queries';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { SongFeed } from '../../components/shared/SongFeed';

export async function getServerSideProps(context) {
  const { slug } = context.params;

  return {
    props: { 
      res: await getAllSongs(),
      slug: slug
     }
  };
}

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

function Explore({ res, slug }) {
  const classes = useStyles();
  const [songs, setSongs] = useState(res);

  return (
    <Page
      title='Explore'
    >
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Songs
      </Typography>
      <SongFeed res={res} slug={slug}/>
    </Page>
  )
}

Explore.layout = Dashboard;

export default Explore;