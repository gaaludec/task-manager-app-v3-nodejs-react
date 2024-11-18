import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'http://localhost:5000/api/tasks',
  Headers: { Accept: 'application/json' },
});

export default customFetch;
