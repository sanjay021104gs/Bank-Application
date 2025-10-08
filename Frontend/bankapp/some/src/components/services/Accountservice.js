import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8081/api/accounts/3';

export const listEmployees = () => axios.get(REST_API_BASE_URL);