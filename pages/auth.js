import React, { useContext, useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Page from '../components/shared/Page';
import { createNewUser, createPlaylist, getAllUsers, getUserWithUsername } from '../lib/queries';
import { UserContext } from '../lib/context';
import { Router, useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  btnSwitchView: {
    color: theme.palette.primary.main,
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  }
}));

export default function Auth() {
  const classes = useStyles();
  const auth = useContext(UserContext);
  const [signInMode, setSignInMode] = useState(true);
  const [username, setUsername] = useState('');
  const [res, setRes] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const test = await checkIfUserExists();
    // if log in
    if(signInMode) {
      if(test?.length > 0) {
        auth.login(test[0].u_primaryname, test[0].uid);
        router.push('/home')
      }
    }
    // if sign up in
    else {      
      if(test?.length == 0) {
        await createNewUser(username).then(async () => {
          const user = await getUserWithUsername(username);
          await createPlaylist('Library', user[0].uid, user[0].uid);
          auth.login(user[0].u_primaryname, user[0].uid);
          router.push('/home');
        });
      }
      else {
        setError('Trouble Signing Up');
      }
    }
  }

  const checkIfUserExists = async () => {
    return getUserWithUsername(username);
  }

  return (
    <Page
      title='Auth'
    >
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {signInMode ? "Login" : "Sign Up"}
        </Typography>
        <form 
          className={classes.form} 
          noValidate
          onSubmit={e => handleSubmit(e)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label={signInMode ? "Username" : "New Username"}
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={e => setUsername(e.target.value)}
            helperText={error}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={username == ''}
          >
            {signInMode ? "Login" : "Sign Up"}
          </Button>
          <Grid container>
            <Grid item xs />
            <Grid item>
              <a className={classes.btnSwitchView} variant="body2" onClick={e => setSignInMode(!signInMode)}>
                {signInMode ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
              </a>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </Page>
  );
}