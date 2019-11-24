/**
 * Authenticate User
 */

import {} from './actions';

import { call, put, takeLatest } from 'redux-saga/effects';

import { GET_STUDENTS } from './constants';
import axios from 'axios';
import request from 'utils/request';

/**
 * Get students
 */
export function* authenticateUsersaga(email, password) {
  yield put(authStart());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true,
  };
  const requestURL = `"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDwjT2FSBkIxcvwi5En1ByORbQkRXmY9Hg"`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield axios.post(requestURL, authData);
    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('userId', response.data.localId);
    yield put(students);
  } catch (err) {
    yield put(showErrorWhileFetchingStudents(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* studentsData() {
  // Watches for GET_STUDENTS actions and calls getStudents when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(AUTHENTICATE_USER, authenticateUsersaga);
}
