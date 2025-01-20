import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    withCredentials: true,
    withXSRFToken: true
  });

export default apiClient;