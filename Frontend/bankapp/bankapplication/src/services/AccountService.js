import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8081/api/account/';

export const getAccounts = () => axios.get('http://localhost:8081/api/account/all');
export const createAccount = (account) => axios.post(REST_API_BASE_URL, account);
export const getAccountById = (id) => axios.get(`${REST_API_BASE_URL}/${id}`);
export const updateAccount = (id, account) => axios.put(`${REST_API_BASE_URL}/${id}`, account);
export const deleteAccount = (id) => axios.delete(`${REST_API_BASE_URL}/${id}`);
export const depositMoney = (id, amount) => axios.put(`${REST_API_BASE_URL}/${id}/deposit?amount=${amount}`);
export const withdrawMoney = (id, amount) => axios.put(`${REST_API_BASE_URL}/${id}/withdraw?amount=${amount}`);