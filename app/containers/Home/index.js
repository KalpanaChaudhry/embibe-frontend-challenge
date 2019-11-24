import React, { memo, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import DashboardPage from 'containers/Dashboard/Loadable';
import DetailsPage from 'containers/DetailsPage/Loadable';
import Graph from '../../components/Graph';
import RegisterPage from 'containers/RegisterPage/Loadable';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getAllStudents } from 'containers/Dashboard/selectors';

export function Home({ studentsList }) {
  const history = useHistory();

  useEffect(() => {
    const keys = Object.keys(studentsList);
    if (keys && Array.isArray(keys) && keys.length > 0) {
      history.push('/dashboard');
    } else {
      history.push('/');
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={RegisterPage} />

      <Route exact path="/dashboard" component={DashboardPage} />
      <Route exact path="/:id" component={DetailsPage} />
      <Route path="/graph" component={Graph} />
    </Switch>
  );
}

const mapStateToProps = createStructuredSelector({
  studentsList: getAllStudents() || [],
});

export function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Home);
