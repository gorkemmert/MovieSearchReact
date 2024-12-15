/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const API_KEY = '75adbfae';
const BASE_URL = 'http://www.omdbapi.com/';

export const getMovies = async (query: string, year?: string, type?: string) => {
  const params: any = {
    s: query,
    apiKey: API_KEY,
    type,
  };
  if (year) params.y = year;

  const response = await axios.get(BASE_URL, { params });
  return response.data;
};

export const getMovieDetails = async (id: string) => {
  const response = await axios.get(BASE_URL, {
    params: { i: id, apiKey: API_KEY },
  });
  return response.data;
};