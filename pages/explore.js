import { useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import Page from '../components/shared/Page';
import Dashboard from '../layouts/DashboardLayout/Dashboard';
import { getAllSongs, getArtistNameWithId } from '../lib/queries';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Song } from '../components/explore/Song';

export async function getServerSideProps(context) {
  return {
    props: { 
      res: await getAllSongs()
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

function Explore({ res }) {
  const classes = useStyles();
  const [songs, setSongs] = useState([]);

  useEffect(async () => {
    if(res) {
      setSongs(res);
    }
  }, [])

  return (
    <Page
      title='Explore'
    >
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Songs
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Length</TableCell>
            <TableCell>Artist</TableCell>
            <TableCell>Genre</TableCell>
            <TableCell align="right">Add to Library</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {songs?.map(song => (
            <Song song={song} key={song?.sid}/>
          ))}
        </TableBody>
      </Table>
    </Page>
  )
}

Explore.layout = Dashboard;

export default Explore;