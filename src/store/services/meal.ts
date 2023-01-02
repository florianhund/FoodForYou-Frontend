import axios from 'axios';

// const baseURL = 'http://10.0.2.2:5000/api/v2';
const baseURL = 'http://172.19.157.105:5000/api/v2';

export const getMealById = (id: string, fields: string, orderBy: string) =>
  axios.get(`${baseURL}/meals/${id}?fields=${fields}&sort_by=${orderBy}`);

export const getAllMeals = (fields: string, orderBy: string) =>
  axios.get(`${baseURL}/meals?fields=${fields}&sort_by=${orderBy}`);

export const getMeals = (fields: string, orderBy: string, query: Object) =>
  axios.get(
    `${baseURL}/meals?fields=${fields}&sort_by=${orderBy}&${Object.entries(
      query
    ).map(([key, value]) => `${key}=${value}&`)}`
  );

export const postMeal = (data: any) =>
  axios.post(`${baseURL}/meals`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

export const updateMeal = (id: string, data: any) =>
  axios.patch(`${baseURL}/meals/${id}`, data, {
    headers: { 'Content-Type': 'application/json' }
  });

export const deleteMeal = (id: string) =>
  axios.delete(`${baseURL}/meals/${id}`);
