/*
 * Dashboard reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import {
  LOADING,
  SAVE_STUDENTS_TO_REDUCER,
  SHOW_ERROR_WHILE_FETCHING_STUDENTS,
} from './constants';

import produce from 'immer';

// The initial state of the App
export const initialState = {
  students: {},
  err: null,
  isLoading: false,
  filteredStudents: {},
};

/* eslint-disable default-case, no-param-reassign */
const dashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SAVE_STUDENTS_TO_REDUCER:
        draft.students = action.students;
        draft.filteredStudents = action.students;
        draft.isLoading = false;
        break;
      case SHOW_ERROR_WHILE_FETCHING_STUDENTS:
        draft.err = action.err;
        draft.isLoading = false;
        break;
      case LOADING:
        draft.isLoading = action.isLoading;
        break;
      default:
        break;
    }
  });

export default dashboardReducer;
