import axios, { AxiosInstance } from 'axios';
import { SERVER_URL } from 'config/config.json';

export const customAxios: AxiosInstance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});