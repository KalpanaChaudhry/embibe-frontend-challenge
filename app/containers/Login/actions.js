import { AUTHENTICATE_USER, AUTH_START } from './constants';

export function authenticateUser(emailId, pass) {
  return {
    type: AUTHENTICATE_USER,
    emailId,
    pass,
  };
}

export function authStart() {
  return {
    type: AUTH_START,
  };
}
