import React, { useState } from 'react';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Lock } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(5),
  },

  card: {
    height: 250,
    width: 400,
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: '#eee',
    margin: 'auto',
    textAlign: 'center',
    boxShadow: '0px 2px 3px #ccc',
    border: '1px solid #eee',
    padding: 20,
    boxSizing: 'border-box',
    // display: 'flex',

    // justifyContent: 'center',
  },
  sumbit: {
    paddingTop: '50px',
  },
}));

export default function Auth({ submitHandler }) {
  const classes = useStyles();
  const [emailString, changeEmailString] = useState('');
  const [passString, changePassString] = useState('');

  const EmailInputHandler = val => {
    changeEmailString(val);
    console.log('in handleEmailInput', emailString);
  };

  const PasswordInputHandler = pas => {
    changePassString(pas);
    console.log('in PassChange', passString);
  };
  return (
    <div className={classes.card}>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="Your Email"
              type="email"
              onChange={e => EmailInputHandler(e.target.value)}
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Lock />
          </Grid>
          <TextField
            id="input-with-icon-grid"
            label="Password"
            type="password"
            onChange={e => PasswordInputHandler(e.target.value)}
          />
        </Grid>
      </div>

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={(emailString, passString) =>
          submitHandler(emailString, passString)
        }
      >
        Login
      </Button>
    </div>
  );
}
