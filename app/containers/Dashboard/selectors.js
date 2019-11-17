/**
 * Dashboard selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const dashboardState = state => state.dashboard || initialState;

// get students list
const getStudents = () =>
  createSelector(
    dashboardState,
    dashboard => dashboard.students,
  );

// get error occurred
const getDashboardError = () =>
  createSelector(
    dashboardState,
    dashboard => dashboard.err,
  );

// get loading state
const getLoadingState = () =>
  createSelector(
    dashboardState,
    dashboard => dashboard.isLoading,
  );

export { dashboardState, getStudents, getDashboardError, getLoadingState };
