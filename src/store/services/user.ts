import axios from 'axios';

import { API_BASE_URI } from '../../constants';

export const getUserByEmail = (email: string) =>
  axios.get(`${API_BASE_URI}/users?email=${email}`);

export const createUser = (data: any) =>
  axios.post(`${API_BASE_URI}/users`, data, {
    headers: { 'Content-Type': 'application/json' }
  });
