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
  const auth = useContext(UserContext);
  const classes = useStyles();
  console.log(auth)

  if(auth?.username) {
    if (props.children) {
      return props.children;
    }
    else {
      return <></>
    }
  } else {
    return <a href="/auth" className={classes.text}><h1>You must sign in to view this page! (Click Me)</h1></a>;
  }
}