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

export function AddSongButton({ song, slug }) {
  const classes = useStyles();
  const { uid } = useContext(UserContext);
  const [pid, setPid] = useState(slug || uid);
  const [added, setAdded] = useState(false);

  useEffect(async() => {

    if(pid && song?.sid) {
      const songs = await getAddedSongs(pid, song?.sid);

      if(songs?.length > 0) {
        setAdded(true);
      }
    }
  }, [pid]);

  const handleClick = async () => {
    if(pid, song?.sid) {
      if(!added) {
        await addPlaylistSongs(pid, song?.sid).then(() => {
          setAdded(true);
        });
      }
      else {
        await deletePlaylistSongs(pid, song?.sid).then(() => {
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