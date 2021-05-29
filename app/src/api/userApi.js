import axios from  "./axios-instance"

const route = "/api/users/";

export const registerUser = (newUser) => axios.post(`${route}/register`, newUser);

export const loginUser = (loginCredentials) => axios.post(`${route}/login`, loginCredentials);