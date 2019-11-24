import { createSelector } from 'reselect';
import { initialState } from './reducer';

const loginState = state => state.login || initialState;

// get error occurred
const getAuthenticateError = () =>
  createSelector(
    loginState,
    login => login.err,
  );

// get loading state
const getLoadingState = () =>
  createSelector(
    loginState,
    login => login.isLoading,
  );
//get userId
const getUserId = () =>
  createSelector(
    loginState,
    login => login.userId,
  );

export { loginState, getUserId, getAuthenticateError, getLoadingState };
