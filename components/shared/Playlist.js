import { getAllSongs, getArtistNameWithId } from '../../lib/queries';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import { useEffect, useState } from 'react';
import { AddSongButton } from './AddSongButton';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  albumContainer: {
    display: 'flex',
    alignItems: 'center',   
  },
  image: {
    borderRadius: '5px', 
    overflow: 'hidden',
  },
  spacer: {
    marginRight: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  }
}));

export function Playlist({ playlist, username }) {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell>
        <div className={classes.link}>
          <Link
            href={`/playlist/${playlist.pid}`}  
          >
            {playlist?.p_name}
          </Link>
        </div>
      </TableCell>
      <TableCell>{playlist.pid}</TableCell>
      <TableCell align="right">
        {username}
      </TableCell>
    </TableRow>
  )
}