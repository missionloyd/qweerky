import { getAllSongs, getArtistNameWithId } from '../../lib/queries';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import { useEffect, useState } from 'react';
import { AddSongButton } from './AddSongButton';



export function Song({ song }) {

  return (
    <TableRow>
    <TableCell>{song?.s_title}</TableCell>
    <TableCell>{song?.s_songlength}</TableCell>
    <TableCell>{song?.artistName}</TableCell>
    <TableCell>{song?.s_genre}</TableCell>
    <TableCell align="right">
      <AddSongButton song={song} />
    </TableCell>
    </TableRow>
  )
}