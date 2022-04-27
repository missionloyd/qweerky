import { useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Playlist } from './Playlist';

const useStyles = makeStyles((theme) => ({
  spacer: {
    marginTop: '2rem'
  }
}));

export function PlaylistFeed({ res, username }) {
  const classes = useStyles();
  const [playlists, setSongs] = useState(res);

  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>ID</TableCell>
            <TableCell align="right">Created By</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {playlists?.map(playlist => {
            if(playlist.p_uid != playlist.pid) {
              return <Playlist playlist={playlist} key={playlist?.pid} username={username} />
            }
          }
          )}
        </TableBody>
      </Table>
    </>
  )
}