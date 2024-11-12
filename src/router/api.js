import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:7070', // URL base de tu API de envíos
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
