import axios from 'axios';

const token = localStorage.getItem('freydatoken');

const http = axios.create({
  baseURL: process.env.VUE_APP_API,
  headers: {
    'x-access-token': token
  }
});

export default http;
