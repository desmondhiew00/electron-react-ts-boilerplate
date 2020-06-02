/* eslint-disable no-param-reassign */
import _ from 'lodash';
import Cookies from 'universal-cookie';
import { Dispatch } from '@store/store.types';
import * as Types from '@reducers/auth.reducers';
import { store, dispatch as storeDispatcher } from '@store';
import * as API from '@apis/auth.api';

export const login = (data: API.Login) => async (
  dispatch: Dispatch
): Promise<void> => {
  if (!dispatch) dispatch = storeDispatcher;
  try {
    dispatch({ type: Types.REQUEST_LOGIN });

    const res = await API.Login(data);
    const user = _.get(res, 'data.payload');
    const cookieName = _.get(res, 'data.cookieName');

    dispatch({ type: Types.SUCCESS_LOGIN, payload: { user, cookieName } });
  } catch (e) {
    dispatch({ type: Types.FAIL_LOGIN });
  }
};

export const logout = () => async (dispatch: Dispatch) => {
  if (!dispatch) dispatch = storeDispatcher;

  dispatch({ type: Types.REQUEST_LOGOUT });
  try {
    const { cookieName } = store.getState().auth;
    await API.Logout();
    const cookies = new Cookies();
    cookies.remove(cookieName, { path: '/' });

    dispatch({ type: Types.SUCCESS_LOGOUT });
  } catch (e) {
    dispatch({ type: Types.FAIL_LOGOUT });
  }
};
