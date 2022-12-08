import axios from 'axios';

const baseURL = process.env.API_BASE_URI;

export const getMealById = (id: string, fields: string, orderBy: string) =>
  axios.get(`${baseURL}/meals/${id}?fields=${fields}&sort_by=${orderBy}`);

export const getMeals = (fields: string, orderBy: string) =>
  axios.get(
    `${baseURL}/meals?fields=${fields}&sort_by=${orderBy}${baseURL}/meals?fields=${fields}&sort_by=${orderBy}`
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
