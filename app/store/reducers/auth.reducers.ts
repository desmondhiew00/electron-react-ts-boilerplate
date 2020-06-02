import { Action } from 'redux';

export const REQUEST_LOGIN = 'auth/INCREMENT_COUNTER';
export const SUCCESS_LOGIN = 'auth/DECREMENT_COUNTER';
export const FAIL_LOGIN = 'auth/DECREMENT_COUNTER';
export const REQUEST_REVOKE = 'auth/REQUEST_REVOKE';
export const SUCCESS_REVOKE = 'auth/SUCCESS_REVOKE';
export const FAIL_REVOKE = 'auth/FAIL_REVOKE';
export const REQUEST_LOGOUT = 'auth/REQUEST_LOGOUT';
export const SUCCESS_LOGOUT = 'auth/SUCCESS_LOGOUT';
export const FAIL_LOGOUT = 'auth/FAIL_LOGOUT';

const initialState = {
  isAuthenticating: false,
  isAuthenticated: false,
  isRevoking: false,
  user: {},
  cookieName: null,
  login: { isSubmitting: false },
  logout: { isSubmitting: false }
};

export default (state = initialState, action: Action<string>) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return Object.assign(state, {
        isAuthenticating: true,
        login: { isSubmitting: true }
      });
    case SUCCESS_LOGIN:
      return Object.assign(state, {
        isAuthenticating: false,
        isAuthenticated: true,
        login: { isSubmitting: false }
      });
    case FAIL_LOGIN:
      return Object.assign(state, {
        isAuthenticating: true,
        isAuthenticated: false,
        login: { isSubmitting: false }
      });
    case REQUEST_REVOKE:
      return Object.assign(state, {
        isRevoking: true
      });
    case SUCCESS_REVOKE:
      return Object.assign(state, {
        isAuthenticating: true,
        isRevoking: false
      });
    case FAIL_REVOKE:
      return Object.assign(state, {
        isAuthenticated: false,
        isRevoking: false
      });
    case REQUEST_LOGOUT:
      return Object.assign(state, {
        logout: { isSubmitting: true }
      });
    case SUCCESS_LOGOUT:
      return Object.assign(state, {
        isAuthenticated: false,
        user: null,
        cookieName: null,
        logout: { isSubmitting: false }
      });
    case FAIL_LOGOUT:
      return Object.assign(state, {
        logout: { isSubmitting: false }
      });
    default:
      return state;
  }
};
