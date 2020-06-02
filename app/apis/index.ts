import axios from 'axios';

export const { API_URL } = process.env;
export const apiCaller = axios.create({
  baseURL: API_URL,
  timeout: 20000,
  withCredentials: true,
  headers: {
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  }
});
