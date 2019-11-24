import React, { memo } from 'react';
import { getAuthenticateError, getLoadingState, getUserId } from './selectors';

import Auth from '../../components/Auth/index';
import { authenticateUser } from './actions';

const key = 'Login';

export function Login({ isLoading, error, userId, authUser, setLoading }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const submitHandler = (email, password) => {
    authUser(email, password);
    console.log('in sumbithandler', email, password);
  };

  return <Auth submitHandler={submitHandler()} />;
}

Login.PropTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  userId: PropTypes.object,
  authUser: PropTypes.func,
  setLoading: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  userId: getUserId() || {},
  error: getAuthenticateError(),
  isLoading: getLoadingState(),
});

export function mapDispatchToProps(dispatch) {
  return {
    authUser: (emailId, pass) => dispatch(authenticateUser(emailId, pass)),
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
)(Login);
