import axios from 'axios';

import { API_BASE_URI } from '../../constants';

export const signIn = (data: { email: string; password: string }) =>
  axios.post(`${API_BASE_URI}/auth/login`, data, {
    headers: {
      'Content-Type': 'application/json'
    },
    validateStatus: function (status) {
      return status >= 200 && status < 400;
    }
  });

export const signOut = () => axios.delete(`${API_BASE_URI}/auth/logout`);
