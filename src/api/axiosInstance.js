import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://my-partner-outdoor-back-production.up.railway.app'
});
