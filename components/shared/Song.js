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

export function Song({ song, slug }) {
  const classes = useStyles();
  console.log(song)
  return (
    <TableRow>
      <TableCell>
        <a
          href={song?.s_songurl || '#'}  
          target='_blank'
          className={classes.link}
        >
          {song?.s_title}
        </a>
      </TableCell>
      <TableCell>
        <div className={classes.albumContainer}>
          {song?.albumArtUrl && (
            <>
              <Image 
                src={song.albumArtUrl}
                width='50px'
                height='50px'
                className={classes.image}
              />
              <span className={classes.spacer} />
            </>
          )}
          {song?.albumTitle}
        </div>
      </TableCell>
      <TableCell>{song?.artistName}</TableCell>
      <TableCell>{song?.s_songlength}</TableCell>
      <TableCell>{song?.s_genre}</TableCell>
      <TableCell align="right">
        <AddSongButton song={song} slug={slug} />
      </TableCell>
    </TableRow>
  )
}