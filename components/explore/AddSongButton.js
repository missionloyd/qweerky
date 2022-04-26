import { IconButton, makeStyles } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../lib/context';
import { addPlaylistSongs, deletePlaylistSongs, getAddedSongs } from '../../lib/queries';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function AddSongButton({ song }) {
  const classes = useStyles();
  const { uid } = useContext(UserContext);
  const [added, setAdded] = useState(false);

  useEffect(async() => {

    if(uid && song?.sid) {
      const songs = await getAddedSongs(uid, song?.sid);

      if(songs?.length > 0) {
        setAdded(true);
      }
    }
  }, [uid]);

  const handleClick = async () => {
    if(uid, song?.sid) {
      if(!added) {
        await addPlaylistSongs(uid, song?.sid).then(() => {
          setAdded(true);
        });
      }
      else {
        await deletePlaylistSongs(uid, song?.sid).then(() => {
          setAdded(false);
        });
      }
    }
  }

  return (
    <IconButton onClick={handleClick}>
      {!added && (
        <AddBoxIcon color='primary'/>
      ) ||
        <DeleteIcon color='secondary' />
      }
    </IconButton>
  )
}