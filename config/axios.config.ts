import axios from "axios";

export const swapiAxios = axios.create({
  baseURL: 'https://swapi.dev/api',
  timeout: 25000,
  validateStatus: status => status < 500
});

