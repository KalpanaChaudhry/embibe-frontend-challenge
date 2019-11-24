import React, { memo, useState } from 'react';
import { validateEmail, validatePassword } from './validators';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

export function Register() {
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  const [emailError, changeEmailError] = useState(false);
  const [passwordError, changePasswordError] = useState(false);
  const history = useHistory();

  const disableButton = () =>
    emailError ||
    passwordError ||
    !email ||
    !password ||
    email.length === 0 ||
    password.length === 0;

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ height: '100vh' }}
    >
      <Grid item sm={4} xs={12}>
        <Paper style={{ padding: 20 }}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-end"
          >
            <Grid item xs={10}>
              <Typography variant="h5" component="h3">
                Login
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField
                label="Email"
                helperText={emailError && 'Email not valid'}
                margin="normal"
                variant="outlined"
                color="primary"
                fullWidth
                required
                onChange={e => {
                  e.preventDefault();
                  const mail = e.target.value;
                  changeEmail(mail);
                  changeEmailError(validateEmail(mail));
                }}
                error={emailError}
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                label="Password"
                helperText={
                  passwordError &&
                  'Password must contain between 6-20 characters and must have one digit, one uppercase and one lowercase letter.'
                }
                margin="normal"
                variant="outlined"
                color="primary"
                fullWidth
                required
                type="password"
                onChange={e => {
                  e.preventDefault();
                  const pass = e.target.value;
                  changePassword(pass);
                  changePasswordError(validatePassword(pass));
                }}
                error={passwordError}
              />
            </Grid>
            <Grid item xs={5}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                disabled={disableButton()}
                onClick={() => {
                  history.push('/dashboard');
                }}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default memo(Register);
