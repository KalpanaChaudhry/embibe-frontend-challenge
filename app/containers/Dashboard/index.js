import React, { memo, useEffect } from 'react';
import { getDashboardError, getLoadingState, getStudents } from './selectors';
import { makeApiCallToFetchStudents, setLoadingState } from './actions';

import AppBar from 'components/AppBar';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';
import LoadingIndicator from 'components/LoadingIndicator';
import PropTypes from 'prop-types';
import StudentCard from 'components/StudentsCard';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';
import saga from './saga';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

const key = 'dashboard';

export function DashboardPage({
  students,
  error,
  isLoading,
  fetchStudents,
  setLoading,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (!students || Object.keys(students).length === 0) {
      setLoading(true);
      fetchStudents();
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Students Dashboard" />
      </Helmet>
      {!isLoading && (
        <AppBar>
          <Grid container spacing={3}>
            {students &&
              Object.keys(students) &&
              Object.keys(students).length &&
              Object.keys(students).map(id => (
                <StudentCard student={students[id]} key={id} />
              ))}
          </Grid>
        </AppBar>
      )}
      {isLoading && <LoadingIndicator />}
    </>
  );
}

DashboardPage.PropTypes = {
  students: PropTypes.object,
  error: PropTypes.any,
  isLoading: PropTypes.bool,
  fetchStudents: PropTypes.func,
  setLoading: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  students: getStudents() || {},
  error: getDashboardError(),
  isLoading: getLoadingState(),
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchStudents: () => dispatch(makeApiCallToFetchStudents()),
    setLoading: isLoading => dispatch(setLoadingState(isLoading)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DashboardPage);
