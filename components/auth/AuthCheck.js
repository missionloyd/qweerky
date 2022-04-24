import Link from 'next/link';
import { auth } from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import { UserContext } from '../../lib/context';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  text: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '2rem',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  }
}))

// Component's children only shown to logged-in users
export default function AuthCheck(props) {
  const { user } = useContext(UserContext);
  const { token } = useContext(UserContext);
  const [User, loading] = useAuthState(auth);
  const classes = useStyles();

  if(user || token || User || loading) {
    if(loading) {
      return <></>;
    } else if(props.fallback){
        return props.fallback;
    } else if (props.children) {
      return props.children;
    }
  } else {
    return <a href="/auth" className={classes.text}><h1>You must sign in to view this page! (Click Me)</h1></a>;
  }
}