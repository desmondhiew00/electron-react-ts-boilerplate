import { apiCaller } from './index';

export const Login = (data: Login) => {
  return apiCaller.post('auth/login', { data });
};

export const Logout = () => {
  return apiCaller.post('auth/logout');
};

export interface Login {
  email: string;
  password: string;
}
