import { useContext, useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import Page from '../../components/shared/Page';
import Dashboard from '../../layouts/DashboardLayout/Dashboard';
import { createPlaylist, getPlaylistByPid  } from '../../lib/queries';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { PlaylistFeed } from '../../components/shared/PlaylistFeed';
import { UserContext } from '../../lib/context';

export async function getServerSideProps(context) {
  const { slug } = context.params;

  return {
    props: { 
      res: await getPlaylistByPid(slug)
     }
  };
}

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
}));

function Playlists({ res }) {
  const [playlists, setPlaylists] = useState(res);
  const classes = useStyles();
  const { username, uid } = useContext(UserContext);

  const handleClick = async () => {
    const name = prompt("Please enter a new playlist title:");
    await createPlaylist(name, uid, null).then(async () => {
      window.location.reload();
    });
  }

  return (
    <Page
      title='Playlists'
    >
      <div className={classes.header}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Playlists
        </Typography>
        <Button 
          color='primary'
          onClick={handleClick}
        >
          Create New Playlist
        </Button>
      </div>
      <PlaylistFeed res={playlists} username={username} />
    </Page>
  )
}

Playlists.layout = Dashboard;

export default Playlists;