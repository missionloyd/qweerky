import { useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Song } from './Song';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export function SongFeed({ res, slug }) {
  const classes = useStyles();
  const [songs, setSongs] = useState(res);

  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Album</TableCell>         
          <TableCell>Artist</TableCell>
          <TableCell>Length</TableCell>
          <TableCell>Genre</TableCell>
          <TableCell align="right">Library/Playlist</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {songs?.map(song => (
          <Song song={song} key={song?.sid} slug={slug} />
        ))}
      </TableBody>
    </Table>
  )
}