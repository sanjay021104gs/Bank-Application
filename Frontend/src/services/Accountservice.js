import axios from 'axios';

const BASE_URL = 'http://localhost:8081';

export const listAccounts = () => axios.get(BASE_URL + '/api/account/all');
export const getAccountById = (id) => axios.get(BASE_URL + '/api/account/' + id);
export const createAccount = (account) => axios.post(BASE_URL + '/api/account/add', account);
export const deposit = (id, amount) => axios.put(BASE_URL + '/api/account/' + id + '/deposit', { amount });
export const withdraw = (id, amount) => axios.put(BASE_URL + '/api/account/' + id + '/withdraw', { amount });
export const deleteAccount = (id) => axios.delete(BASE_URL + '/api/account/delete/' + id);