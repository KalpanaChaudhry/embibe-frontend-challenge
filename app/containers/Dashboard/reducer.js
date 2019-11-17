/*
 * Dashboard reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  SAVE_STUDENTS_TO_REDUCER,
  SHOW_ERROR_WHILE_FETCHING_STUDENTS,
  LOADING,
} from './constants';

// The initial state of the App
export const initialState = {
  students: {},
  err: null,
  isLoading: false,
};

/* eslint-disable default-case, no-param-reassign */
const dashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SAVE_STUDENTS_TO_REDUCER:
        const tempStudents = action.students;
        const studentsKeys =
          typeof tempStudents === 'object' && Object.keys(tempStudents);

        Array.isArray(studentsKeys) &&
          studentsKeys.length &&
          studentsKeys.forEach(student => {
            student.totalMarks =
              (students.marks &&
                typeof student.marks === 'object' &&
                Object.values(student.marks).reduce((a, b) => a + b)) ||
              0;
          });
        draft.students = tempStudents;
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
